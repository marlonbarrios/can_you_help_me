import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
} | null>(null)

function applyThemeClass(t: Theme) {
  const root = document.documentElement
  if (t === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    let initial: Theme = 'light'
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
      if (stored === 'dark' || stored === 'light') {
        initial = stored
      } else {
        initial = document.documentElement.classList.contains('dark')
          ? 'dark'
          : 'light'
      }
    } catch {
      initial = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'
    }
    setThemeState(initial)
    applyThemeClass(initial)
  }, [])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {
      /* ignore */
    }
    applyThemeClass(t)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
