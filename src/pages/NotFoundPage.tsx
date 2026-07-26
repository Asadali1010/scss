import { Link } from 'react-router-dom'
import { navigation } from '../data/navigation'
import { sectionPath } from '../utils/routes'

interface NotFoundPageProps {
  embedded?: boolean
}

export default function NotFoundPage({ embedded = false }: NotFoundPageProps) {
  const docsPath = sectionPath(navigation[0].slug)

  const content = (
    <div className={embedded ? 'py-12 text-center' : 'px-6 text-center'}>
      <p
        className="mb-2 text-sm font-semibold uppercase tracking-widest"
        style={{ color: 'var(--color-accent)' }}
      >
        404
      </p>
      <h1
        className="mb-3 text-2xl font-bold sm:text-3xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Page not found
      </h1>
      <p className="mb-8 text-base" style={{ color: 'var(--color-text-muted)' }}>
        This URL does not match any documentation page. Head back to the docs to keep learning.
      </p>
      <Link
        to={docsPath}
        className="inline-flex min-h-11 items-center rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-surface-raised)',
          outlineColor: 'var(--color-accent)',
        }}
      >
        Back to documentation
      </Link>
    </div>
  )

  if (embedded) {
    return content
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text)',
      }}
    >
      {content}
    </div>
  )
}
