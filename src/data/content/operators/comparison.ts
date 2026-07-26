import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Comparison operators ==, !=, <, <=, >, >= return true or false for use in @if, @while, and other control directives.',
    'They work on numbers, strings, colors, booleans, lists, and maps—with special rules for unit compatibility on numbers.',
    'Use comparison operators to branch mixin logic based on arguments or token values.',
  ],
  examples: [
    {
      title: 'Comparisons in @if branches',
      code: `@mixin spacing($size) {
  @if $size == small {
    padding: 0.5rem;
  } @else if $size == large {
    padding: 1.5rem;
  } @else {
    padding: 1rem;
  }
}

.badge { @include spacing(small); }
.card { @include spacing(large); }`,
    },
  ],
  demonstrations: [
    'Pass an unrecognized $size and confirm the @else branch applies the default 1rem padding in compiled CSS.',
  ],
  bestPractices: [
    'Compare unitless numbers when testing magnitude; use explicit unit conversion before comparing px to rem.',
    'Prefer map lookups over long @if chains when comparing many named values.',
  ],
  commonMistakes: [
    'Using = instead of == for equality (single = is not valid in Sass).',
    'Comparing colors with == when slight channel differences fail unexpectedly.',
  ],
  references: [
    { title: 'Sass — Comparison Operators', url: 'https://sass-lang.com/documentation/operators/relational/' },
  ],
  practicalUseCases: [
    'Breakpoint mixin that validates the requested key exists in a map before emitting media queries.',
    'Theme mixin that switches token sets when $mode == dark.',
  ],
}

export default content
