import clsx from 'clsx'

type ChatGPTAgent = 'user' | 'system' | 'assistant'

export interface ChatGPTMessage {
  role: ChatGPTAgent
  content: string
}

const convertNewLines = (text: string) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))

export function ChatLine({
  role = 'assistant',
  content,
  isAwaitingFirstToken = false,
  isStreamingTail = false,
  withEntryMotion = true,
}: ChatGPTMessage & {
  isAwaitingFirstToken?: boolean
  isStreamingTail?: boolean
  withEntryMotion?: boolean
}) {
  const isAssistant = role === 'assistant'
  const showEmptyShell = isAssistant && isAwaitingFirstToken && content === ''

  if (!content && !showEmptyShell) {
    return null
  }

  const formatteMessage = content ? convertNewLines(content) : null

  return (
    <div
      className={clsx(
        'flex w-full shrink-0',
        isAssistant ? 'justify-start' : 'justify-end',
        withEntryMotion && 'chat-message-enter'
      )}
    >
      <div className="max-w-[min(100%,42rem)] rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6 dark:bg-zinc-800 dark:ring-zinc-700">
        <div className="flex space-x-3">
          <div className="min-w-0 flex-1 gap-4">
            <p className="font-large text-xxl text-gray-900 dark:text-zinc-100">
              <span className="select-none hover:underline">
                {isAssistant ? 'AI' : 'You'}
              </span>
            </p>
            {showEmptyShell ? (
              <p className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1">
                  <span
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-500"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-500"
                    style={{ animationDelay: '200ms' }}
                  />
                  <span
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-500"
                    style={{ animationDelay: '400ms' }}
                  />
                </span>
                <span className="chat-stream-caret inline-block h-4 w-px bg-teal-600/80 dark:bg-teal-400/80" />
              </p>
            ) : (
              <p
                className={clsx(
                  'break-words text',
                  isAssistant
                    ? 'font-semibold text-zinc-900 dark:text-zinc-100'
                    : 'text-gray-400 dark:text-zinc-500'
                )}
              >
                {formatteMessage}
                {isAssistant && content && isStreamingTail ? (
                  <span className="chat-stream-caret ml-px inline-block h-[1em] w-px translate-y-px bg-teal-600/70 align-middle dark:bg-teal-400/70" />
                ) : null}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
