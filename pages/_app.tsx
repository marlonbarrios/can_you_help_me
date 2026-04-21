import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'

import { ThemeProvider } from '../contexts/ThemeContext'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 text-zinc-900 dark:text-zinc-100">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CookiesProvider>
  )
}

export default App
