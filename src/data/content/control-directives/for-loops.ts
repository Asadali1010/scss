import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@for loops iterate a counter between bounds, generating repetitive CSS rules at compile time. Use through for inclusive ranges and to for exclusive end values.',
    'The syntax is @for $i from start through end { }. Loop variables are scoped to the loop block.',
    '@for is ideal for numbered utility classes, grid columns, and staggered animation delays.',
  ],
  examples: [
    {
      title: 'Generate spacing utility classes',
      code: `@for $i from 1 through 5 {
  .mt-#{$i} {
    margin-top: #{$i * 0.25}rem;
  }
}

// Compiles to .mt-1 through .mt-5 with 0.25rem increments`,
    },
  ],
  demonstrations: [
    'Inspect compiled CSS: five .mt-* classes appear with margin-top values 0.25rem, 0.5rem, 0.75rem, 1rem, and 1.25rem—no hand-written duplication.',
  ],
  bestPractices: [
    'Use through when the final index should be included; use to when it should not.',
    'Interpolate #{$i} in selectors and property values to inject loop counter values.',
  ],
  commonMistakes: [
    'Confusing through (inclusive) with to (exclusive), off-by-one in generated classes.',
    'Generating hundreds of loop iterations that bloat CSS—cap ranges to what the design system needs.',
  ],
  references: [
    { title: 'Sass — @for', url: 'https://sass-lang.com/documentation/at-rules/control/for/' },
  ],
  practicalUseCases: [
    'Grid column width classes .col-1 through .col-12.',
    'Z-index layer utilities generated from a fixed scale.',
  ],
}

export default content
