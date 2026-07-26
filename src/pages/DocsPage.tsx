import { Navigate, useLocation } from 'react-router-dom'
import DocContentView from '../components/docs/DocContentView'
import { navigation } from '../data/navigation'
import { resolveDocRouteWithContent, sectionPath } from '../utils/routes'
import NotFoundPage from './NotFoundPage'

const sectionPlaceholders: Record<string, string> = {
  'getting-started':
    'Start here to understand what SCSS adds on top of CSS, how to install a compiler, and how to structure your first stylesheet.',
  variables:
    'Variables store reusable values—colors, spacing, breakpoints—so a single change propagates across your entire stylesheet.',
  nesting:
    'Nesting mirrors HTML structure in your selectors. Learn when nesting clarifies intent and when it creates brittle, over-specific CSS.',
  mixins:
    'Mixins encapsulate reusable declaration blocks. Pass arguments, set defaults, and inject content blocks where patterns repeat.',
  functions:
    'SCSS functions compute values at compile time—especially powerful for color manipulation, unit math, and dynamic design tokens.',
  'partials-imports':
    'Split large stylesheets into partials and compose them with import rules. Keep files focused and load order predictable.',
  extend:
    'The @extend directive shares selector groups between rules. Understand placeholders, inheritance chains, and when mixins are safer.',
  operators:
    'Arithmetic, comparison, and logical operators let you compute sizes, evaluate conditions, and build responsive logic in Sass.',
  'control-directives':
    'Control directives—@if, @for, @each, @while—generate CSS from loops and conditions instead of hand-copying repetitive rules.',
  'maps-lists':
    'Lists and maps hold structured data in Sass. Iterate over theme tokens, breakpoint maps, and component variants from a single source.',
  modules:
    'The modern module system with @use and @forward replaces global @import. Namespace APIs, re-export modules, and avoid symbol collisions.',
  'best-practices':
    'Production SCSS needs clear structure, naming, and performance habits. These guides cover how experienced teams keep stylesheets maintainable.',
  migration:
    'Move legacy CSS and @import-based projects onto SCSS and the module system without breaking builds or bloating output.',
  'architecture-patterns':
    'Organize stylesheets with ITCSS, BEM, the 7-1 pattern, and component-library architectures that scale across teams.',
  'responsive-design':
    'Build mobile-first layouts with breakpoint mixins, fluid type, and container queries generated from shared Sass tools.',
  theming:
    'Combine SCSS token maps with CSS custom properties for runtime theme switching, dark mode, and multi-brand products.',
  'layout-systems':
    'Encode grid, flex, spacing, and stack/cluster layout patterns as reusable mixins and utility generators.',
  'design-tokens':
    'Structure primitive and semantic tokens in SCSS maps and modules for consistent design-system delivery.',
  'common-mistakes':
    'Recognize over-nesting, global pollution, risky @extend chains, and import-order bugs before they reach production.',
  'real-world-projects':
    'Apply SCSS architecture to dashboards, marketing sites, component libraries, and design-system migrations.',
  'interview-prep':
    'Review core concepts, coding challenges, architecture questions, and troubleshooting scenarios for SCSS interviews.',
  cheatsheets:
    'Quick-reference syntax, functions, mixin recipes, and module-system directives for day-to-day development.',
  resources:
    'Official documentation, compilers, community links, and curated books and courses for continued learning.',
}

function getSectionPlaceholder(slug: string, title: string): string {
  return (
    sectionPlaceholders[slug] ??
    `Overview of ${title}. Full content for this section is coming in a later step.`
  )
}

function getPagePlaceholder(sectionTitle: string, pageTitle: string): string {
  return `This page will walk through ${pageTitle} within ${sectionTitle}. Examples, syntax notes, and common pitfalls will be added here.`
}

export default function DocsPage() {
  const { pathname } = useLocation()

  if (pathname === '/docs' || pathname === '/docs/') {
    return <Navigate to={sectionPath(navigation[0].slug)} replace />
  }

  const resolved = resolveDocRouteWithContent(pathname)
  if (!resolved) {
    return <NotFoundPage embedded />
  }

  const { section, page, content } = resolved
  const title = page?.title ?? section.title

  return (
    <article>
      <header className="mb-8 border-b pb-6" style={{ borderColor: 'var(--color-border)' }}>
        <h1 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h1>
        {!page && section.children && section.children.length > 0 && (
          <p className="mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            {section.children.length} topics in this section
          </p>
        )}
      </header>

      {content ? (
        <DocContentView content={content} />
      ) : (
        <div
          className="max-w-prose space-y-4 text-base leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <p>
            {page
              ? getPagePlaceholder(section.title, page.title)
              : getSectionPlaceholder(section.slug, section.title)}
          </p>
          <p
            className="rounded-lg border px-4 py-3 text-sm"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-surface-muted)',
              color: 'var(--color-text)',
            }}
          >
            Content for this page is a placeholder. Select another topic from the sidebar or search
            to explore the full table of contents.
          </p>
        </div>
      )}
    </article>
  )
}
