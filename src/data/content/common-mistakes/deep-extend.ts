import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@extend merges selectors, so chaining extends creates long grouped selectors that bloat CSS and increase matching cost.',
    'Extending across unrelated components (.btn extends .table-row) couples them—changing one affects compiled output for both.',
    'Prefer mixins for shared declarations; reserve @extend for placeholder selectors (%visually-hidden) with a single clear purpose.',
  ],
  examples: [
    {
      title: 'Risky extend chain',
      code: '%message-base {\n  padding: 1rem;\n  border-radius: 4px;\n}\n.error { @extend %message-base; }\n.warning { @extend %message-base; }\n// Compiled: .error, .warning { padding: 1rem; ... }',
    },
  ],
  demonstrations: [
    'A refactor adding .success { @extend %message-base } suddenly groups four unrelated classes in DevTools—unexpected specificity interactions.',
  ],
  bestPractices: [
    'Use %placeholders only for invisible utility patterns (clearfix, sr-only).',
    'If extend groups more than three selectors, consider a mixin instead.',
  ],
  commonMistakes: [
    '@extend .some-class from another component file, creating cross-file selector dependencies.',
    'Extending inside media queries, producing invalid or duplicated rule sets.',
  ],
  references: [
    { title: 'Sass Guidelines — Extend', url: 'https://sass-guidelin.es/#extend' },
  ],
  practicalUseCases: [
    'Auditing compiled CSS for comma-separated selector lists longer than five entries.',
    'Lint rules banning @extend except from placeholders.',
  ],
}

export default content
