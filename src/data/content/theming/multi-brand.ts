import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Multi-brand theming serves different visual identities from one codebase—white-label products, franchise sites, or partner portals.',
    'Compile separate CSS bundles per brand from brand-specific entry files that @use different token maps, or emit one bundle with [data-brand] attribute selectors.',
    'Shared components reference semantic tokens only; brand partials override token values.',
  ],
  examples: [
    {
      title: 'Brand-specific entry files',
      code: "// brand-a.scss\n@use 'tokens/brand-a' as tokens;\n@use 'core/components' with (\n  $brand: tokens.$palette\n);\n\n// brand-b.scss\n@use 'tokens/brand-b' as tokens;\n@use 'core/components' with (\n  $brand: tokens.$palette\n);",
    },
  ],
  demonstrations: [
    'Brand A and Brand B share button component logic but compile with different $primary values from separate token modules.',
  ],
  bestPractices: [
    'Document which tokens each brand must define (minimum viable brand kit).',
    'Use CI to compile all brand entry files and catch missing tokens.',
  ],
  commonMistakes: [
    'Brand-specific hacks scattered in component files instead of centralized token overrides.',
    'Assuming one SCSS variable file can switch brands at runtime without CSS custom properties.',
  ],
  references: [
    { title: 'Sass — @use with configuration', url: 'https://sass-lang.com/documentation/at-rules/use/#configuration' },
  ],
  practicalUseCases: [
    'White-label SaaS where each customer uploads logo and primary color.',
    'Media groups running regional sites with shared CMS templates.',
  ],
}

export default content
