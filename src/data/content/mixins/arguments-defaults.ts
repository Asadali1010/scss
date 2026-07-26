import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Mixin arguments make mixins configurable. Provide positional arguments at call time or use named arguments for clarity.',
    'Default values after a colon let callers omit arguments: @mixin pad($size: 1rem) { padding: $size; }.',
    'Required arguments must come before optional ones. Use null defaults when "no value" is a valid choice.',
  ],
  examples: [
    {
      title: 'Arguments with defaults and named overrides',
      code: `@mixin button-variant(
  $bg: #c65309,
  $text: #fff,
  $radius: 0.375rem
) {
  background: $bg;
  color: $text;
  border-radius: $radius;
  padding: 0.75rem 1.25rem;
}

.btn-primary { @include button-variant; }
.btn-ghost {
  @include button-variant($bg: transparent, $text: #c65309);
}`,
    },
  ],
  demonstrations: [
    'Call button-variant with no arguments for the primary style, then pass named $bg and $text for the ghost variant—one mixin, two outputs.',
  ],
  bestPractices: [
    'Use named arguments when a mixin has more than two parameters.',
    'Keep default values aligned with your design token map.',
  ],
  commonMistakes: [
    'Passing arguments in the wrong order when positional—use names to avoid bugs.',
    'Giving every argument a default when some combinations are invalid—validate with @if instead.',
  ],
  references: [
    { title: 'Sass — Mixin Arguments', url: 'https://sass-lang.com/documentation/at-rules/mixin/#arguments' },
  ],
  practicalUseCases: [
    'Button and badge variants generated from one parameterized mixin.',
    'Spacing utility mixin with optional horizontal and vertical overrides.',
  ],
}

export default content
