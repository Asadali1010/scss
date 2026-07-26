import { navigation, type NavItem } from '../data/navigation'

export function sectionPath(slug: string): string {
  return `/docs/${slug}`
}

export function pagePath(sectionSlug: string, pageSlug: string): string {
  return `/docs/${sectionSlug}/${pageSlug}`
}

export interface BreadcrumbItem {
  label: string
  path?: string
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Home', path: '/' }]

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
}

export function flattenNavigationForSearch(items: NavItem[] = navigation): SearchResult[] {
  const results: SearchResult[] = []

  for (const section of items) {
    results.push({
      title: section.title,
      path: sectionPath(section.slug),
      context: 'Section',
    })

    for (const page of section.children ?? []) {
      results.push({
        title: page.title,
        path: pagePath(section.slug, page.slug),
        context: section.title,
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
      result.context.toLowerCase().includes(normalized),
  )
}

export interface ResolvedDocRoute {
  section: NavItem
  page?: NavItem
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
