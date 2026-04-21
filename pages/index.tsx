import Head from 'next/head'
import { useMemo, useState } from 'react'
import { Chat, InterfaceText } from '../components/Chat'
import { ThemeToggle } from '../components/ThemeToggle'
import { getUiTextForLanguage } from '../lib/uiTranslations'

/** Example transcript (PDF) in /public — linked from project description */
const EXPLORER_CONVERSATION_PDF = '/can_you_help_me_chat-2026-04-21.pdf'

function Home() {
  const [language, setLanguage] = useState('en')
  const uiText = useMemo(() => getUiTextForLanguage(language), [language])

  const chatUiText: InterfaceText = {
    languageLabel: uiText.languageLabel,
    typeMessageHint: uiText.typeMessageHint,
    linkHint: uiText.linkHint,
    sayButton: uiText.sayButton,
    firstGreeting: uiText.firstGreeting,
    exportPdf: uiText.exportPdf,
    exportPdfHeading: uiText.exportPdfHeading,
    exportPdfUser: uiText.exportPdfUser,
    exportPdfAssistant: uiText.exportPdfAssistant,
  }

  return (
    <>
      <Head>
        <title>{uiText.title}</title>
      </Head>
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {uiText.title}
            </h1>
            <ThemeToggle
              labelLight={uiText.themeToLight}
              labelDark={uiText.themeToDark}
            />
          </div>
          <div className="grid w-full gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Chat language={language} setLanguage={setLanguage} uiText={chatUiText} />
            </div>
            <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm leading-6 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300 lg:col-span-2">
              <h2 className="mb-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {uiText.descriptionTitle}
              </h2>
              <p>
                {uiText.descriptionP1}
              </p>
              <p className="mt-3">{uiText.descriptionP2}</p>
              <p className="mt-3">
                {uiText.descriptionP4a}{' '}
                <a
                  href={EXPLORER_CONVERSATION_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline decoration-teal-700/40 underline-offset-2 hover:text-teal-800 hover:decoration-teal-800 dark:text-teal-400 dark:decoration-teal-400/40 dark:hover:text-teal-300"
                >
                  {uiText.descriptionP4Link}
                </a>
                {uiText.descriptionP4b}
              </p>
            </aside>
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          {uiText.footerPrefix}{' '}
          <a
            href="https://marlonbarrios.github.io/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-teal-700 underline hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
          >
            {uiText.portfolio}
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
