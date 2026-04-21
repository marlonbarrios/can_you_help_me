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

export interface OpenAIStreamPayload {
  model: string
  messages: ChatGPTMessage[]
  temperature: number
  top_p: number
  frequency_penalty: number
  presence_penalty: number
  max_tokens: number
  stream: boolean
  stop?: string[]
  user?: string
  n: number
}

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder()

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
  }

  if (process.env.OPENAI_API_ORG) {
    requestHeaders['OpenAI-Organization'] = process.env.OPENAI_API_ORG
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: requestHeaders,
    method: 'POST',
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(
      `OpenAI API error (${res.status}): ${errorBody || res.statusText}`
    )
  }

  const stream = new ReadableStream({
    async start(controller) {
      let counter = 0

      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === 'event') {
          const data = event.data
          if (data === '[DONE]') {
            controller.close()
            return
          }
          try {
            const json = JSON.parse(data)
            const text = json.choices[0].delta?.content || ''
            if (counter === 0 && /^\n+$/.test(text)) {
              counter++
              return
            }
            if (!text) {
              return
            }
            controller.enqueue(encoder.encode(text))
            counter++
          } catch (e) {
            controller.error(
              e instanceof Error ? e : new Error('OpenAI stream parse error')
            )
          }
        }
      }

      const parser = createParser(onParse)
      const inbound = new TextDecoder()

      try {
        const body = res.body
        if (!body) {
          controller.close()
          return
        }
        const reader = body.getReader()
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
      } catch (e) {
        controller.error(
          e instanceof Error ? e : new Error('OpenAI stream read error')
        )
      }
    },
  })

  return stream
}
