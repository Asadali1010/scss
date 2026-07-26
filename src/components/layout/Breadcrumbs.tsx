import { Link, useLocation } from 'react-router-dom'
import { getBreadcrumbs } from '../../utils/routes'

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const crumbs = getBreadcrumbs(pathname)

  if (crumbs.length <= 1) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6 min-w-0">
      <ol className="flex flex-wrap items-center gap-1 text-sm min-w-0">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1

          return (
            <li key={`${crumb.label}-${index}`} className="flex min-w-0 items-center gap-1">
              {index > 0 && (
                <span
                  className="shrink-0 select-none"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-hidden="true"
                >
                  /
                </span>
              )}
              {crumb.path && !isLast ? (
                <Link
                  to={crumb.path}
                  className="truncate rounded px-1 py-0.5 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: 'var(--color-accent)', outlineColor: 'var(--color-accent)' }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className="truncate font-medium"
                  style={{ color: isLast ? 'var(--color-text)' : 'var(--color-text-muted)' }}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {crumb.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
