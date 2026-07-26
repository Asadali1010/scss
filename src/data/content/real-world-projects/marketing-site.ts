import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Marketing sites emphasize typography, hero sections, animation, and responsive imagery—SCSS organizes page-specific styles separately from reusable components.',
    'Use token-driven spacing and fluid type for editorial layouts; keep page partials thin by composing components.',
    'Optimize for performance: split critical CSS, lazy-load below-fold partials if your bundler supports it.',
  ],
  examples: [
    {
      title: 'Hero section partial',
      code: "@use '../tokens/typography' as type;\n@use '../tools/breakpoints' as bp;\n\n.hero {\n  @include type.display-xl;\n  padding: 3rem 1rem;\n\n  @include bp.respond-above(lg) {\n    padding: 6rem 2rem;\n  }\n}",
    },
  ],
  demonstrations: [
    'Landing page, pricing, and about pages each have a pages/ partial but share the same button and grid components.',
  ],
  bestPractices: [
    'Co-locate animation keyframes with the component that uses them.',
    'Use picture/srcset in HTML; SCSS handles layout containers, not image bytes.',
  ],
  commonMistakes: [
    'One giant _marketing.scss with every landing page variant instead of page partials.',
    'Hard-coding campaign colors instead of temporary theme token overrides.',
  ],
  references: [
    { title: 'Sass Guidelines — Architecture', url: 'https://sass-guidelin.es/#architecture' },
  ],
  practicalUseCases: [
    'Product launch pages with time-limited theme overrides.',
    'Multi-locale marketing sites sharing components with RTL layout partials.',
  ],
}

export default content
