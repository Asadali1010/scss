import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import DocContentView from '../components/docs/DocContentView'
import { navigation } from '../data/navigation'
import {
  getDocRedirectTarget,
  getDocumentTitle,
  navItemPath,
  pagePath,
  resolveDocRouteWithContent,
} from '../utils/routes'
import NotFoundPage from './NotFoundPage'

export default function DocsPage() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = getDocumentTitle(pathname)
  }, [pathname])

  if (pathname === '/docs' || pathname === '/docs/') {
    const firstSection = navigation[0]
    const firstChild = firstSection.children?.[0]
    const target = firstChild
      ? pagePath(firstSection.slug, firstChild.slug)
      : navItemPath(firstSection)
    return <Navigate to={target} replace />
  }

  const redirectTarget = getDocRedirectTarget(pathname)
  if (redirectTarget) {
    return <Navigate to={redirectTarget} replace />
  }

  const resolved = resolveDocRouteWithContent(pathname)
  if (!resolved?.page?.title || !resolved.content) {
    return <NotFoundPage embedded />
  }

  const { page, content } = resolved

  return (
    <article>
      <header className="mb-8 border-b pb-6" style={{ borderColor: 'var(--color-border)' }}>
        <h1 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
          {page.title}
        </h1>
      </header>

      <DocContentView content={content} />
    </article>
  )
}
