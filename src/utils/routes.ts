import { navigation, type NavItem } from '../data/navigation'
import { getDocContent } from '../data/content'
import type { DocContent } from '../types/docContent'

export function sectionPath(slug: string): string {
  return `/docs/${slug}`
}

export function pagePath(sectionSlug: string, pageSlug: string): string {
  return `/docs/${sectionSlug}/${pageSlug}`
}

export function quizPath(): string {
  return '/quiz'
}

export const SITE_TITLE = 'Master SCSS'

export function formatDocumentTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return `${SITE_TITLE} — Documentation`
  }
  return `${pageTitle} — ${SITE_TITLE}`
}

export function getDocumentTitle(pathname: string): string {
  if (pathname === '/') {
    return formatDocumentTitle()
  }

  if (pathname === quizPath()) {
    const quiz = navigation.find((item) => item.slug === 'quiz')
    return formatDocumentTitle(quiz?.title ?? 'Quiz')
  }

  const resolved = resolveDocRoute(pathname)
  if (resolved?.page) {
    return formatDocumentTitle(resolved.page.title)
  }

  if (resolved?.section) {
    return formatDocumentTitle(resolved.section.title)
  }

  return formatDocumentTitle('Page not found')
}

export function navItemPath(item: NavItem, sectionSlug?: string): string {
  if (item.path) return item.path
  if (sectionSlug) return pagePath(sectionSlug, item.slug)
  return sectionPath(item.slug)
}

export interface BreadcrumbItem {
  label: string
  path?: string
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Home', path: '/' }]

  if (pathname === quizPath()) {
    const quiz = navigation.find((item) => item.slug === 'quiz')
    if (quiz) {
      items.push({ label: quiz.title })
    }
    return items
  }

  const segments = pathname.replace(/^\/docs\/?/, '').split('/').filter(Boolean)
  const sectionSlug = segments[0]
  const pageSlug = segments[1]

  if (!sectionSlug) return items

  const section = navigation.find((item) => item.slug === sectionSlug)
  if (!section) return items

  if (pageSlug) {
    items.push({ label: section.title, path: sectionPath(section.slug) })
    const page = section.children?.find((child) => child.slug === pageSlug)
    if (page) {
      items.push({ label: page.title })
    }
  } else {
    items.push({ label: section.title })
  }

  return items
}

export interface SearchResult {
  title: string
  path: string
  context: string
  /** Lowercased explanation text used for content-aware search matching. */
  keywords: string
}

export function flattenNavigationForSearch(items: NavItem[] = navigation): SearchResult[] {
  const results: SearchResult[] = []

  for (const section of items) {
    results.push({
      title: section.title,
      path: navItemPath(section),
      context: section.path ? 'Practice' : 'Section',
      keywords: '',
    })

    for (const page of section.children ?? []) {
      const content = getDocContent(section.slug, page.slug)
      const keywords = content?.explanation.join(' ').toLowerCase() ?? ''

      results.push({
        title: page.title,
        path: pagePath(section.slug, page.slug),
        context: section.title,
        keywords,
      })
    }
  }

  return results
}

export function filterSearchResults(query: string): SearchResult[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []

  return flattenNavigationForSearch().filter(
    (result) =>
      result.title.toLowerCase().includes(normalized) ||
      result.context.toLowerCase().includes(normalized) ||
      result.keywords.includes(normalized),
  )
}

export interface ResolvedDocRoute {
  section: NavItem
  page?: NavItem
}

export interface ResolvedDocRouteWithContent extends ResolvedDocRoute {
  content?: DocContent
}

export function resolveDocRoute(pathname: string): ResolvedDocRoute | null {
  const segments = pathname.replace(/^\/docs\/?/, '').split('/').filter(Boolean)
  const sectionSlug = segments[0]
  const pageSlug = segments[1]

  if (!sectionSlug) return null

  const section = navigation.find((item) => item.slug === sectionSlug)
  if (!section) return null

  if (pageSlug) {
    const page = section.children?.find((child) => child.slug === pageSlug)
    if (!page) return null
    return { section, page }
  }

  return { section }
}

export function resolveDocRouteWithContent(
  pathname: string,
): ResolvedDocRouteWithContent | null {
  const resolved = resolveDocRoute(pathname)
  if (!resolved?.page) return resolved

  return {
    ...resolved,
    content: getDocContent(resolved.section.slug, resolved.page.slug),
  }
}

/** Redirect target for section-only doc URLs (first child or external path like /quiz). */
export function getDocRedirectTarget(pathname: string): string | null {
  const segments = pathname.replace(/^\/docs\/?/, '').split('/').filter(Boolean)
  const sectionSlug = segments[0]
  const pageSlug = segments[1]

  if (!sectionSlug || pageSlug) return null

  const section = navigation.find((item) => item.slug === sectionSlug)
  if (!section) return null

  if (section.path) {
    return section.path
  }

  const firstChild = section.children?.[0]
  if (firstChild) {
    return pagePath(section.slug, firstChild.slug)
  }

  return null
}
