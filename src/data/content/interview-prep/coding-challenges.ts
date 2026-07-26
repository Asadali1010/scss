import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'SCSS coding challenges often ask you to write a mixin (breakpoint, truncate text), a function (px-to-rem), or generate utilities from a map.',
    'Interviewers evaluate naming, edge cases (zero values, null maps), and whether you know module system syntax.',
    'Practice implementing respond-above, linear-gradient helper, and a z-index scale function without looking up docs.',
  ],
  examples: [
    {
      title: 'px-to-rem function challenge',
      code: "@use 'sass:math';\n\n@function rem($px, $base: 16) {\n  @return math.div($px, $base) * 1rem;\n}\n\nbody { font-size: rem(18); } // 1.125rem",
    },
  ],
  demonstrations: [
    'When asked to generate .col-1 through .col-12, use @for $i from 1 through 12 with percentage width—mention mobile-first override if needed.',
  ],
  bestPractices: [
    'Talk through compile-time vs runtime behavior while coding.',
    'Mention sass:math for division instead of deprecated / operator.',
  ],
  commonMistakes: [
    'Using @import in a challenge answer when @use is expected.',
    'Forgetting @content in a mixin that wraps media queries.',
  ],
  references: [
    { title: 'Sass — @mixin', url: 'https://sass-lang.com/documentation/at-rules/mixin/' },
  ],
  practicalUseCases: [
    'Live coding rounds at frontend agencies.',
    'Take-home assignments building a mini utility framework from a token map.',
  ],
}

export default content
