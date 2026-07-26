import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'SCSS performance is mostly about output CSS size and selector efficiency, not compile speed—though excessive @extend and deep nesting inflate both.',
    'Prefer mixins over @extend for variant-heavy components to avoid selector explosion in compiled CSS.',
    'Use @use to prevent duplicate CSS from repeated imports; split critical above-the-fold CSS when page load matters.',
  ],
  examples: [
    {
      title: 'Mixin vs extend output size',
      code: '// Mixin: repeats declarations but isolated selectors\n@mixin btn-base {\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n}\n.primary { @include btn-base; background: blue; }\n.secondary { @include btn-base; background: gray; }',
    },
  ],
  demonstrations: [
    'Inspecting compiled CSS after replacing a deep @extend chain with mixins often reduces file size by 20–40% in component-heavy apps.',
  ],
  bestPractices: [
    'Limit nesting depth to three levels; use classes for state instead of long descendant chains.',
    'Audit compiled CSS periodically with coverage tools to remove unused rules.',
  ],
  commonMistakes: [
    'Generating hundreds of utility classes with nested @each loops that never get used in HTML.',
    'Using @import in every partial, duplicating the same CSS rules in output.',
  ],
  references: [
    { title: 'Sass — @extend', url: 'https://sass-lang.com/documentation/at-rules/extend/' },
  ],
  practicalUseCases: [
    'Performance budgets for marketing pages with strict CSS kilobyte limits.',
    'Trimming admin dashboard CSS by scoping vendor imports to required components only.',
  ],
}

export default content
