import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Search from '../Search'

interface TopNavProps {
  onMenuOpen: () => void
}

export default function TopNav({ onMenuOpen }: TopNavProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header
      className="sticky top-0 z-30 border-b"
      style={{
        backgroundColor: 'var(--color-surface-raised)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="mx-auto flex max-w-full flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-3 sm:px-6 sm:py-0 sm:min-h-14 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onMenuOpen}
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              color: 'var(--color-text)',
              outlineColor: 'var(--color-accent)',
            }}
            aria-label="Open navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link
            to="/"
            className="min-w-0 truncate text-base font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-lg"
            style={{ color: 'var(--color-text)', outlineColor: 'var(--color-accent)' }}
          >
            Master <span style={{ color: 'var(--color-accent)' }}>SCSS</span>
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-auto flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:ml-0"
            style={{
              backgroundColor: 'var(--color-surface-muted)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              outlineColor: 'var(--color-accent)',
            }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-8 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM14 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM6 10a1 1 0 011-1h1a1 1 0 110 2H7a1 1 0 01-1-1zM12 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        <div className="min-w-0 flex-1">
          <Search />
        </div>
      </div>
    </header>
  )
}
