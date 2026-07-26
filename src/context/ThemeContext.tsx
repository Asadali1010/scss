import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const STORAGE_KEY = 'scss-docs-theme'

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return null
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const initial = resolveInitialTheme()
    applyTheme(initial)
    return initial
  })

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event: MediaQueryListEvent) => {
      if (getStoredTheme() === null) {
        setThemeState(event.matches ? 'dark' : 'light')
      }
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
