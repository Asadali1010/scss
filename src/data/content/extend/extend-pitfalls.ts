import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@extend pitfalls include bloated selector lists, unintended inheritance, and broken cascade when selectors are grouped across contexts.',
    'Extending a selector inside a media query can duplicate or misplace rules. Extending nested selectors pulls parent context into the grouped output.',
    'Large extend graphs slow compilation and produce CSS that is hard to debug in DevTools.',
  ],
  examples: [
    {
      title: 'Problematic extend across contexts',
      code: `// Risky — extends nested selector
.sidebar .nav-link {
  color: #5c574f;
}

.footer-link {
  @extend .nav-link; // May produce unexpected selector groupings
}

// Safer — use a placeholder at root level
%text-link {
  color: #5c574f;
  text-decoration: underline;
}`,
    },
  ],
  demonstrations: [
    'Extend a nested class from an unrelated component and inspect the compiled selector list—the grouping often surprises teams during code review.',
  ],
  bestPractices: [
    'Limit extend to placeholders defined at root scope in the same partial.',
    'Run periodic audits on compiled CSS size when extend is used.',
  ],
  commonMistakes: [
    'Chaining extends (%a extended by %b extended by .c), creating exponential selector growth.',
    'Using extend in component libraries consumed by unknown third-party selectors.',
  ],
  references: [
    { title: 'Sass Guidelines — Extend', url: 'https://sass-guidelin.es/#extend' },
    { title: 'Sass — @extend', url: 'https://sass-lang.com/documentation/at-rules/extend/' },
  ],
  practicalUseCases: [
    'Replacing risky extends with mixins during a Sass architecture audit.',
    'Lint rules that ban @extend except for approved placeholder files.',
  ],
}

export default content
