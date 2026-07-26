import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Logical operators and, or, and not combine boolean expressions in @if, @while, and @each guards.',
    'Sass supports short-circuit evaluation: and stops at the first false value; or stops at the first true value.',
    'Use parentheses to clarify precedence when mixing comparisons and logical operators.',
  ],
  examples: [
    {
      title: 'Logical operators in conditional mixins',
      code: `@mixin responsive-grid($columns, $min-width: null) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);

  @if $min-width != null and $min-width > 0 {
    @media (min-width: $min-width) {
      grid-template-columns: repeat($columns * 2, 1fr);
    }
  }
}

.gallery {
  @include responsive-grid(2, 768px);
}`,
    },
  ],
  demonstrations: [
    'Call responsive-grid(3, null) and verify no media query is emitted—the and guard short-circuits on null.',
  ],
  bestPractices: [
    'Extract complex conditions into a boolean variable before the @if for readability.',
    'Use not sparingly; positive conditions (if $enabled) read clearer than double negatives.',
  ],
  commonMistakes: [
    'Using && or || (JavaScript syntax) instead of and / or.',
    'Forgetting that Sass treats non-null, non-false values as truthy—including empty strings and zero.',
  ],
  references: [
    { title: 'Sass — Logical Operators', url: 'https://sass-lang.com/documentation/operators/boolean/' },
  ],
  practicalUseCases: [
    'Feature-flag mixins that emit styles only when $enable-rtl and $locale == ar.',
    'Validation guards before map-get to prevent compile errors.',
  ],
}

export default content
