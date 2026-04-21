import { Head, Html, Main, NextScript } from 'next/document'

const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230d9488'/%3E%3C/svg%3E"
        />
      </Head>
      <body suppressHydrationWarning>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
