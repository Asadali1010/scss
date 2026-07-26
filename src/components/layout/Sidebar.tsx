import { useEffect, useState, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { pagePath, sectionPath } from '../../utils/routes'

interface SidebarProps {
  onNavigate?: () => void
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const { pathname } = useLocation()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => new Set())

  useEffect(() => {
    const activeSection = navigation.find((section) => {
      const base = sectionPath(section.slug)
      return pathname === base || pathname.startsWith(`${base}/`)
    })

    if (activeSection) {
      setExpandedSections((current) => new Set(current).add(activeSection.slug))
    }
  }, [pathname])

  const toggleSection = (slug: string) => {
    setExpandedSections((current) => {
      const next = new Set(current)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }

  const linkClass = (isActive: boolean) =>
    [
      'block rounded-md px-3 py-2 text-sm transition-colors min-h-11 flex items-center',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    ].join(' ') +
    (isActive
      ? ' font-semibold'
      : ' hover:opacity-90')

  const linkStyle = (isActive: boolean): CSSProperties =>
    isActive
      ? {
          backgroundColor: 'var(--color-accent-subtle)',
          color: 'var(--color-accent)',
          outlineColor: 'var(--color-accent)',
        }
      : {
          color: 'var(--color-text)',
          outlineColor: 'var(--color-accent)',
        }

  return (
    <nav aria-label="Documentation">
      <ul className="space-y-1">
        {navigation.map((section) => {
          const basePath = sectionPath(section.slug)
          const hasChildren = Boolean(section.children?.length)
          const isSectionActive =
            pathname === basePath || pathname.startsWith(`${basePath}/`)
          const isExpanded = expandedSections.has(section.slug) || isSectionActive

          return (
            <li key={section.slug}>
              <div className="flex items-stretch gap-0.5">
                {hasChildren ? (
                  <button
                    type="button"
                    onClick={() => toggleSection(section.slug)}
                    aria-expanded={isExpanded}
                    aria-controls={`sidebar-section-${section.slug}`}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${section.title}`}
                    className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      color: 'var(--color-text-muted)',
                      outlineColor: 'var(--color-accent)',
                    }}
                  >
                    <ChevronIcon expanded={isExpanded} />
                  </button>
                ) : (
                  <span className="min-w-11 shrink-0" aria-hidden="true" />
                )}
                <Link
                  to={basePath}
                  onClick={onNavigate}
                  aria-current={pathname === basePath ? 'page' : undefined}
                  className={linkClass(pathname === basePath)}
                  style={linkStyle(pathname === basePath)}
                >
                  {section.title}
                </Link>
              </div>

              {hasChildren && isExpanded && (
                <ul
                  id={`sidebar-section-${section.slug}`}
                  className="ml-11 mt-0.5 space-y-0.5 border-l pl-2"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {section.children!.map((page) => {
                    const path = pagePath(section.slug, page.slug)
                    const isActive = pathname === path

                    return (
                      <li key={page.slug}>
                        <Link
                          to={path}
                          onClick={onNavigate}
                          aria-current={isActive ? 'page' : undefined}
                          className={linkClass(isActive)}
                          style={linkStyle(isActive)}
                        >
                          {page.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
