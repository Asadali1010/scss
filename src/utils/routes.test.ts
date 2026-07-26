import { describe, expect, it } from 'vitest'
import { navigation } from '../data/navigation'
import {
  filterSearchResults,
  flattenNavigationForSearch,
  formatDocumentTitle,
  getBreadcrumbs,
  getDocRedirectTarget,
  getDocumentTitle,
  navItemPath,
  pagePath,
  quizPath,
  resolveDocRoute,
  resolveDocRouteWithContent,
  sectionPath,
} from './routes'

describe('path helpers', () => {
  it('sectionPath builds /docs/{slug}', () => {
    expect(sectionPath('variables')).toBe('/docs/variables')
  })

  it('pagePath builds nested doc URLs', () => {
    expect(pagePath('variables', 'scope')).toBe('/docs/variables/scope')
  })

  it('quizPath returns /quiz', () => {
    expect(quizPath()).toBe('/quiz')
  })

  it('navItemPath prefers explicit path for practice routes', () => {
    const quiz = navigation.find((item) => item.slug === 'quiz')!
    expect(navItemPath(quiz)).toBe('/quiz')
  })

  it('navItemPath builds page paths when section slug is provided', () => {
    const section = navigation.find((item) => item.slug === 'variables')!
    const page = section.children![0]
    expect(navItemPath(page, section.slug)).toBe('/docs/variables/defining-variables')
  })

  it('navItemPath falls back to section path for top-level items', () => {
    const section = navigation.find((item) => item.slug === 'variables')!
    expect(navItemPath(section)).toBe('/docs/variables')
  })
})

describe('getBreadcrumbs', () => {
  it('returns Home for non-doc paths', () => {
    expect(getBreadcrumbs('/')).toEqual([{ label: 'Home', path: '/' }])
  })

  it('returns Home for bare /docs', () => {
    expect(getBreadcrumbs('/docs')).toEqual([{ label: 'Home', path: '/' }])
  })

  it('adds section title for section-only routes', () => {
    expect(getBreadcrumbs('/docs/variables')).toEqual([
      { label: 'Home', path: '/' },
      { label: 'Variables' },
    ])
  })

  it('adds section link and page title for page routes', () => {
    expect(getBreadcrumbs('/docs/variables/scope')).toEqual([
      { label: 'Home', path: '/' },
      { label: 'Variables', path: '/docs/variables' },
      { label: 'Variable Scope' },
    ])
  })

  it('stops at Home for unknown sections', () => {
    expect(getBreadcrumbs('/docs/not-a-section/page')).toEqual([
      { label: 'Home', path: '/' },
    ])
  })

  it('adds Quiz title for /quiz', () => {
    expect(getBreadcrumbs('/quiz')).toEqual([
      { label: 'Home', path: '/' },
      { label: 'Quiz' },
    ])
  })
})

describe('search helpers', () => {
  it('flattenNavigationForSearch includes sections and child pages', () => {
    const flat = flattenNavigationForSearch()
    expect(flat.some((item) => item.title === 'Variables' && item.context === 'Section')).toBe(
      true,
    )
    expect(flat.some((item) => item.path === '/docs/variables/scope')).toBe(true)
  })

  it('filterSearchResults matches titles case-insensitively', () => {
    const results = filterSearchResults('variable scope')
    expect(results.some((item) => item.title === 'Variable Scope')).toBe(true)
  })

  it('filterSearchResults matches section context', () => {
    const results = filterSearchResults('mixins')
    expect(results.some((item) => item.context === 'Mixins')).toBe(true)
  })

  it('filterSearchResults returns empty array for blank query', () => {
    expect(filterSearchResults('   ')).toEqual([])
  })

  it('filterSearchResults matches doc explanation keywords', () => {
    const results = filterSearchResults('pseudo-classes')
    expect(results.some((item) => item.path === '/docs/nesting/basic-nesting')).toBe(true)
  })
})

describe('document title helpers', () => {
  it('formatDocumentTitle returns site default without a page title', () => {
    expect(formatDocumentTitle()).toBe('Master SCSS — Documentation')
  })

  it('formatDocumentTitle includes the page title when provided', () => {
    expect(formatDocumentTitle('Variable Scope')).toBe('Variable Scope — Master SCSS')
  })

  it('getDocumentTitle resolves home, quiz, and doc routes', () => {
    expect(getDocumentTitle('/')).toBe('Master SCSS — Documentation')
    expect(getDocumentTitle('/quiz')).toBe('Quiz — Master SCSS')
    expect(getDocumentTitle('/docs/variables/scope')).toBe('Variable Scope — Master SCSS')
  })
})

describe('resolveDocRoute', () => {
  it('returns null for empty doc path', () => {
    expect(resolveDocRoute('/docs')).toBeNull()
  })

  it('returns null for unknown section', () => {
    expect(resolveDocRoute('/docs/unknown-section')).toBeNull()
  })

  it('returns null for unknown page slug', () => {
    expect(resolveDocRoute('/docs/variables/not-a-page')).toBeNull()
  })

  it('resolves section-only routes', () => {
    const resolved = resolveDocRoute('/docs/nesting')
    expect(resolved?.section.slug).toBe('nesting')
    expect(resolved?.page).toBeUndefined()
  })

  it('resolves section and page routes', () => {
    const resolved = resolveDocRoute('/docs/nesting/basic-nesting')
    expect(resolved?.section.slug).toBe('nesting')
    expect(resolved?.page?.slug).toBe('basic-nesting')
  })

  it('strips trailing slashes and extra segments safely', () => {
    const resolved = resolveDocRoute('/docs/nesting/basic-nesting/')
    expect(resolved?.page?.slug).toBe('basic-nesting')
  })
})

describe('getDocRedirectTarget', () => {
  it('returns null for page routes', () => {
    expect(getDocRedirectTarget('/docs/variables/scope')).toBeNull()
  })

  it('returns null for bare /docs', () => {
    expect(getDocRedirectTarget('/docs')).toBeNull()
  })

  it('redirects section-only routes to the first child page', () => {
    expect(getDocRedirectTarget('/docs/variables')).toBe('/docs/variables/defining-variables')
  })

  it('redirects /docs/quiz to /quiz', () => {
    expect(getDocRedirectTarget('/docs/quiz')).toBe('/quiz')
  })
})

describe('resolveDocRouteWithContent', () => {
  it('returns section-only resolution without content', () => {
    const resolved = resolveDocRouteWithContent('/docs/nesting')
    expect(resolved?.section.slug).toBe('nesting')
    expect(resolved?.content).toBeUndefined()
  })

  it('attaches doc content for valid page routes', () => {
    const resolved = resolveDocRouteWithContent('/docs/nesting/basic-nesting')
    expect(resolved?.content?.explanation.length).toBeGreaterThan(0)
    expect(resolved?.content?.examples.length).toBeGreaterThan(0)
  })
})
