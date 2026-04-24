import { useEffect, useRef, useState } from 'react'
import { englishLanguageName } from '../lib/languages'
import { downloadChatAsPdf } from '../utils/exportChatPdf'
import { Button } from './Button'
import { type ChatGPTMessage, ChatLine } from './ChatLine'
import LanguageSelect from './LanguageSelect'
import { useCookies } from 'react-cookie'

const COOKIE_NAME = 'nextjs-example-ai-chat-gpt3'

export interface InterfaceText {
  languageLabel: string
  typeMessageHint: string
  linkHint: string
  sayButton: string
  firstGreeting: string
  exportPdf: string
  exportPdfHeading: string
  exportPdfUser: string
  exportPdfAssistant: string
}

interface InputMessageProps {
  input: string
  setInput: (value: string) => void
  sendMessage: (message: string) => Promise<void>
  sayLabel: string
}

const InputMessage = ({
  input,
  setInput,
  sendMessage,
  sayLabel,
}: InputMessageProps) => (
  <div className="mt-6 flex">
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/20"
      value={input}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          sendMessage(input)
          setInput('')
        }
      }}
      onChange={(e) => {
        setInput(e.target.value)
      }}
    />
    <Button
      type="submit"
      className="ml-4 flex-none"
      onClick={() => {
        sendMessage(input)
        setInput('')
      }}
    >
      {sayLabel}
    </Button>
  </div>
)

interface ChatProps {
  /** BCP-47 / ISO 639-1 code, e.g. `en`, `es` */
  language: string
  setLanguage: (value: string) => void
  uiText: InterfaceText
}

const SCROLL_BOTTOM_THRESHOLD_PX = 72

/** Slower on-screen reveal: network buffers full text; UI advances a few chars per tick. */
const STREAM_REVEAL_INTERVAL_MS = 116
const STREAM_CHARS_PER_TICK = 1
const STREAM_CATCHUP_THRESHOLD_CHARS = 28
const STREAM_CATCHUP_EXTRA_CHARS = 2

export function Chat({ language, setLanguage, uiText }: ChatProps) {
  const [messages, setMessages] = useState<ChatGPTMessage[]>(() => [
    { role: 'assistant', content: uiText.firstGreeting },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cookie, setCookie] = useCookies([COOKIE_NAME])
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const stickToBottomRef = useRef(true)

  const syncStickToBottomFromScroll = () => {
    const el = scrollContainerRef.current
    if (!el) return
    const distanceFromBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight
    stickToBottomRef.current = distanceFromBottom < SCROLL_BOTTOM_THRESHOLD_PX
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el || !stickToBottomRef.current) return
    el.scrollTop = el.scrollHeight
  }, [messages, loading, error])

  useEffect(() => {
    const existing = cookie[COOKIE_NAME]
    if (existing && typeof existing === 'string') return
    const randomId = Math.random().toString(36).substring(7)
    setCookie(COOKIE_NAME, randomId, { path: '/' })
  }, [cookie, setCookie])

  useEffect(() => {
    setMessages((prev) => {
      if (
        prev.length === 1 &&
        prev[0]?.role === 'assistant' &&
        prev[0].content !== uiText.firstGreeting
      ) {
        return [{ role: 'assistant', content: uiText.firstGreeting }]
      }
      return prev
    })
  }, [uiText.firstGreeting])

  // send message to API /api/chat endpoint
  const sendMessage = async (message: string) => {
    if (!message.trim()) return

    stickToBottomRef.current = true
    setLoading(true)
    setError(null)
    const newMessages = [
      ...messages,
      { role: 'user', content: message } as ChatGPTMessage,
    ]
    setMessages(newMessages)
    const last10messages = newMessages.slice(-10) // remember last 10 messages

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: last10messages,
          user: cookie[COOKIE_NAME],
          language: englishLanguageName(language),
        }),
      })

      if (!response.ok) {
        let errorMessage = `Request failed with status ${response.status}`
        try {
          const errorPayload = await response.json()
          if (typeof errorPayload?.error === 'string' && errorPayload.error) {
            errorMessage = errorPayload.error
          }
        } catch {
          const fallbackText = await response.text()
          if (fallbackText) errorMessage = fallbackText
        }
        throw new Error(errorMessage)
      }

      const data = response.body
      if (!data) {
        setLoading(false)
        return
      }

      setMessages([...newMessages, { role: 'assistant', content: '' }])

      const buf = {
        incoming: '',
        revealed: 0,
        networkDone: false,
      }

      let revealIntervalId: ReturnType<typeof setInterval> | null = null

      const stopReveal = () => {
        if (revealIntervalId != null) {
          clearInterval(revealIntervalId)
          revealIntervalId = null
        }
      }

      revealIntervalId = setInterval(() => {
        const full = buf.incoming
        const behind = full.length - buf.revealed
        if (behind > 0) {
          const extra =
            behind > STREAM_CATCHUP_THRESHOLD_CHARS
              ? STREAM_CATCHUP_EXTRA_CHARS
              : 0
          const step = Math.min(STREAM_CHARS_PER_TICK + extra, behind)
          buf.revealed += step
          const shown = full.slice(0, buf.revealed)
          setMessages((prev) => {
            const copy = [...prev]
            const tail = copy[copy.length - 1]
            if (tail?.role === 'assistant') {
              copy[copy.length - 1] = { role: 'assistant', content: shown }
            }
            return copy
          })
        }
        if (buf.networkDone && buf.revealed >= buf.incoming.length) {
          stopReveal()
          setLoading(false)
        }
      }, STREAM_REVEAL_INTERVAL_MS)

      const reader = data.getReader()
      const decoder = new TextDecoder()
      let streamDone = false

      try {
        while (!streamDone) {
          const { value, done: doneReading } = await reader.read()
          streamDone = doneReading
          const chunkValue = decoder.decode(value ?? new Uint8Array(0), {
            stream: !streamDone,
          })
          if (chunkValue) {
            buf.incoming += chunkValue
          }
        }
        const tail = decoder.decode()
        if (tail) {
          buf.incoming += tail
        }
        buf.networkDone = true
      } catch (streamErr) {
        stopReveal()
        throw streamErr
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Unable to send message right now.'
      setError(message)
      setMessages((prev) => {
        const last = prev[prev.length - 1]
        if (last?.role === 'assistant' && last.content === '') {
          return prev.slice(0, -1)
        }
        return prev
      })
      setLoading(false)
    }
  }

  const hasExportableContent = messages.some((m) => m.content.trim().length > 0)

  const handleExportPdf = () => {
    if (!hasExportableContent || loading) return
    try {
      downloadChatAsPdf(messages, {
        title: uiText.exportPdfHeading,
        fileStem: 'chat',
        roleUser: uiText.exportPdfUser,
        roleAssistant: uiText.exportPdfAssistant,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="rounded-2xl border-zinc-100 lg:border lg:p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="mb-4 flex min-h-[34px] flex-wrap items-center justify-end gap-3">
        <LanguageSelect
          value={language}
          onChange={setLanguage}
          label={uiText.languageLabel}
        />
      </div>
      <div
        ref={scrollContainerRef}
        onScroll={syncStickToBottomFromScroll}
        className="h-[520px] overflow-y-auto overflow-x-hidden pr-1"
      >
        <div className="flex min-h-full flex-col gap-4">
          {messages.map(({ content, role }, index) => {
            const isLast = index === messages.length - 1
            return (
              <ChatLine
                key={index}
                role={role}
                content={content}
                isAwaitingFirstToken={
                  Boolean(
                    loading &&
                      isLast &&
                      role === 'assistant' &&
                      content === ''
                  )
                }
                isStreamingTail={Boolean(
                  loading && isLast && role === 'assistant' && content !== ''
                )}
                withEntryMotion={index > 0}
              />
            )
          })}
          {error && (
            <div className="shrink-0 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}

          {messages.length < 2 && (
            <div className="mx-auto flex max-w-md shrink-0 flex-col gap-1 text-center text-sm text-gray-600 dark:text-zinc-400">
              <span>{uiText.typeMessageHint}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                {uiText.linkHint}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          aria-label={uiText.exportPdf}
          disabled={loading || !hasExportableContent}
          className="border border-teal-200 bg-teal-50/90 font-medium text-teal-950 shadow-sm ring-1 ring-teal-500/10 hover:border-teal-400 hover:bg-teal-100 hover:text-teal-950 active:bg-teal-100/90 disabled:cursor-not-allowed disabled:border-zinc-200 disabled:bg-zinc-100 disabled:text-zinc-400 disabled:shadow-none disabled:ring-0 dark:border-teal-700 dark:bg-teal-950/55 dark:font-semibold dark:text-teal-50 dark:ring-teal-400/15 dark:hover:border-teal-500 dark:hover:bg-teal-900/65 dark:hover:text-white dark:active:bg-teal-950 dark:disabled:border-zinc-700 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500"
          onClick={handleExportPdf}
        >
          {uiText.exportPdf}
        </Button>
      </div>
      <InputMessage
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        sayLabel={uiText.sayButton}
      />
    </div>
  )
}
