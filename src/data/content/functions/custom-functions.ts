import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Custom functions are defined with @function and return a single Sass value with @return. Use them for calculations that produce values, not CSS blocks.',
    'Functions can accept arguments, call other functions, and use @if/@each for logic. They must not emit CSS declarations—that is a mixin job.',
    'Name functions for what they return: rem(), spacing(), color-token().',
  ],
  examples: [
    {
      title: 'Custom rem converter function',
      code: `@use 'sass:math';

$base-font-size: 16px;

@function rem($px) {
  @return math.div($px, $base-font-size) * 1rem;
}

.body-text {
  font-size: rem(18);
  margin-bottom: rem(24);
}`,
    },
  ],
  demonstrations: [
    'Call rem(32) and verify compiled CSS shows 2rem— the function ran once at compile time.',
  ],
  bestPractices: [
    'Keep functions pure: same inputs should always return the same output.',
    'Return null or a sentinel when a map lookup fails, and handle it with @if at the call site.',
  ],
  commonMistakes: [
    'Using @function where @mixin is needed—functions cannot output property declarations.',
    'Forgetting @return, causing the function to return null implicitly.',
  ],
  references: [
    { title: 'Sass — @function', url: 'https://sass-lang.com/documentation/at-rules/function/' },
  ],
  practicalUseCases: [
    'Token lookup: color($name) wrapping map-get on a design token map.',
    'Strip-unit helper for unitless math before re-applying rem.',
  ],
}

export default content
