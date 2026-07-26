import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Mixins duplicate declarations at each @include site. @extend groups selectors to share one declaration block—smaller output but less predictable.',
    'Choose mixins for parameterized patterns, variant-heavy components, and media-query wrappers. Choose extend for identical static blocks extended in controlled ways.',
    'Most design systems default to mixins because they are easier to reason about and do not create selector coupling.',
  ],
  examples: [
    {
      title: 'Same pattern — mixin vs extend output',
      code: `// Mixin — duplicates CSS
@mixin card-base {
  padding: 1rem;
  border-radius: 0.5rem;
}
.card-a { @include card-base; }
.card-b { @include card-base; }

// Extend — groups selectors
%card-base {
  padding: 1rem;
  border-radius: 0.5rem;
}
.card-c { @extend %card-base; }
.card-d { @extend %card-base; }`,
    },
  ],
  demonstrations: [
    'Compare compiled file sizes: extend often produces less CSS for identical static blocks; mixins produce duplicated declarations but clearer cascade.',
  ],
  bestPractices: [
    'Default to mixins; reach for extend only with placeholders and a documented reason.',
    'Never extend across unrelated components just to shave bytes—maintainability wins.',
  ],
  commonMistakes: [
    'Using @extend for responsive variants that need different media query contexts.',
    'Expecting extend to accept arguments like mixins—it cannot.',
  ],
  references: [
    { title: 'Sass Guidelines — Extend', url: 'https://sass-guidelin.es/#extend' },
    { title: 'Sass — @extend', url: 'https://sass-lang.com/documentation/at-rules/extend/' },
  ],
  practicalUseCases: [
    'Utility generator mixins for spacing scales (always mixins).',
    'Single silent %visually-hidden extended by accessibility helpers (extend candidate).',
  ],
}

export default content
