import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Marketing sites emphasize typography, hero sections, animation, and responsive imagery—SCSS organizes page-specific styles separately from reusable components.',
    'The Fjord Labs example at `examples/marketing-site/` uses intentional brand tokens (deep teal + warm amber on stone cream) in `scss/abstracts/_tokens.scss`—not generic placeholder colors.',
    'Mobile-first sections live in `scss/layout/_sections.scss`; the hero partial in `scss/components/_hero.scss` uses fluid type from the token scale.',
  ],
  examples: [
    {
      title: 'Brand tokens (examples/marketing-site/scss/abstracts/_tokens.scss)',
      code: `$brand: (
  teal-900: #0a3d3d,
  teal-800: #0d4f4f,
  amber-500: #d97706,
  stone-50: #faf8f5,
);

$type-scale: (
  display: clamp(2.25rem, 5vw + 1rem, 4rem),
  h1: clamp(1.75rem, 3vw + 1rem, 2.75rem),
  lead: clamp(1.0625rem, 1vw + 0.875rem, 1.25rem),
);`,
    },
    {
      title: 'Hero section (examples/marketing-site/scss/components/_hero.scss)',
      code: `@use '../abstracts/tokens' as *;
@use '../abstracts/mixins' as *;

.hero__title {
  font-family: $font-display;
  font-size: map.get($type-scale, display);
  line-height: map.get($line-heights, tight);
}

.hero__inner {
  @include container;
  @include section-padding;

  @include breakpoint-up(lg) {
    grid-template-columns: 1fr 1fr;
  }
}`,
    },
  ],
  demonstrations: [
    'Compile `examples/marketing-site/scss/main.scss` and open `examples/marketing-site/index.html` — the hero, feature grid, and CTA banner each use mobile-first breakpoints from the abstracts layer.',
    'Typography scale tokens in `examples/marketing-site/scss/themes/_brand.scss` export CSS custom properties for runtime font-family switching.',
  ],
  bestPractices: [
    'Co-locate animation keyframes with the component that uses them.',
    'Use picture/srcset in HTML; SCSS handles layout containers, not image bytes.',
    'Keep brand primitives in abstracts; reference semantic roles in components and pages.',
  ],
  commonMistakes: [
    'One giant _marketing.scss with every landing page variant instead of page partials in `examples/marketing-site/scss/pages/`.',
    'Hard-coding campaign colors instead of temporary theme token overrides.',
    'Using generic purple/indigo gradients instead of product-specific brand tokens.',
  ],
  references: [
    { title: 'Sass Guidelines — Architecture', url: 'https://sass-guidelin.es/#architecture' },
    { title: 'Fjord Labs example — examples/marketing-site/', url: 'https://sass-lang.com/documentation/at-rules/use/' },
  ],
  practicalUseCases: [
    'Product launch pages with time-limited theme overrides — add a partial under `examples/marketing-site/scss/themes/`.',
    'Multi-locale marketing sites sharing components with RTL layout partials.',
    'Field-research or vertical-specific brands where typography and color tokens must feel intentional.',
  ],
}

export default content
