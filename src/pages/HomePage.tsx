import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { navigation } from '../data/navigation'
import { formatDocumentTitle, quizPath, sectionPath } from '../utils/routes'

export default function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const firstSection = navigation[0]

  useEffect(() => {
    document.title = formatDocumentTitle()
  }, [])

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text)',
      }}
    >
      <div className="fixed top-6 right-6 z-50">
        <button
          type="button"
          onClick={toggleTheme}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: 'var(--color-surface-raised)',
            borderColor: 'var(--color-border)',
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

      <header className="relative overflow-hidden border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div
          className="absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, var(--color-accent-subtle) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, var(--color-accent-subtle) 0%, transparent 40%),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 24px,
                var(--color-border) 24px,
                var(--color-border) 25px
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
          >
            SCSS Learning Hub
          </p>
          <h1
            className="mb-6 text-5xl leading-tight tracking-tight lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Write stylesheets that{' '}
            <span style={{ color: 'var(--color-accent)' }}>scale</span>
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed lg:text-xl"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
          >
            Structured guides for variables, nesting, mixins, modules, and the patterns teams
            rely on in production SCSS.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={sectionPath(firstSection.slug)}
              className="inline-flex min-h-11 items-center rounded-lg px-8 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-surface-raised)',
                outlineColor: 'var(--color-accent)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Browse documentation
            </Link>
            <Link
              to={quizPath()}
              className="inline-flex min-h-11 items-center rounded-lg border px-8 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: 'var(--color-surface-raised)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
                outlineColor: 'var(--color-accent)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Take the quiz
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
