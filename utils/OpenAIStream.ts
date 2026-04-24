import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser'

export type ChatGPTAgent = 'user' | 'system' | 'assistant'

export interface ChatGPTMessage {
  role: ChatGPTAgent
  content: string
}

export interface AnthropicStreamPayload {
  model: string
  messages: ChatGPTMessage[]
  temperature: number
  max_tokens: number
  stream: boolean
  stop?: string[]
  user?: string
}

function buildAnthropicMessagesPayload(messages: ChatGPTMessage[]) {
  const systemParts = messages
    .filter((m) => m.role === 'system')
    .map((m) => m.content.trim())
    .filter(Boolean)

  const system = systemParts.length > 0 ? systemParts.join('\n\n') : undefined

  const apiMessages = messages
    .filter((m) => m.role !== 'system')
    .map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content.trim(),
    }))

  return { system, messages: apiMessages }
}

export async function AnthropicStream(payload: AnthropicStreamPayload) {
  const encoder = new TextEncoder()
  const apiKey = process.env.ANTHROPIC_API_KEY?.trim() ?? ''

  const { system, messages: apiMessages } = buildAnthropicMessagesPayload(
    payload.messages
  )

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
  }

  const body: Record<string, unknown> = {
    model: payload.model,
    max_tokens: payload.max_tokens,
    messages: apiMessages,
    temperature: payload.temperature,
    stream: payload.stream,
  }

  if (system) {
    body.system = system
  }

  if (payload.stop?.length) {
    body.stop_sequences = payload.stop
  }

  if (payload.user) {
    body.metadata = { user_id: String(payload.user) }
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    headers: requestHeaders,
    method: 'POST',
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(
      `Anthropic API error (${res.status}): ${errorBody || res.statusText}`
    )
  }

  const stream = new ReadableStream({
    async start(controller) {
      let streamFailed = false

      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type !== 'event' || !event.data) {
          return
        }

        try {
          const json = JSON.parse(event.data) as {
            type?: string
            delta?: { type?: string; text?: string }
            error?: { type?: string; message?: string }
          }

          if (json.type === 'error' && json.error) {
            streamFailed = true
            const msg =
              typeof json.error.message === 'string'
                ? json.error.message
                : JSON.stringify(json.error)
            controller.error(new Error(`Anthropic: ${msg}`))
            return
          }

          if (
            json.type === 'content_block_delta' &&
            json.delta?.type === 'text_delta' &&
            typeof json.delta.text === 'string' &&
            json.delta.text.length > 0
          ) {
            controller.enqueue(encoder.encode(json.delta.text))
          }
        } catch (e) {
          streamFailed = true
          controller.error(
            e instanceof Error
              ? e
              : new Error('Anthropic stream parse error')
          )
        }
      }

      const parser = createParser(onParse)
      const inbound = new TextDecoder()

      try {
        const bodyStream = res.body
        if (!bodyStream) {
          controller.close()
          return
        }

        const reader = bodyStream.getReader()
        try {
          let readDone = false
          while (!readDone) {
            const { value, done } = await reader.read()
            readDone = done
            if (value?.byteLength) {
              parser.feed(inbound.decode(value, { stream: !readDone }))
            }
          }
          parser.feed(inbound.decode())
        } finally {
          reader.releaseLock()
        }

        if (!streamFailed) {
          controller.close()
        }
      } catch (e) {
        if (!streamFailed) {
          controller.error(
            e instanceof Error ? e : new Error('Anthropic stream read error')
          )
        }
      }
    },
  })

  return stream
}
