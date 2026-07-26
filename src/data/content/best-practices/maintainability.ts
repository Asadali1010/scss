import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Maintainable SCSS reads like documentation: clear module boundaries, token-driven values, and minimal magic numbers.',
    'Document non-obvious mixins with comments explaining parameters and expected usage—not what the code literally does.',
    'Refactor incrementally: extract repeated declaration blocks into mixins when you see the third copy, not the first.',
  ],
  examples: [
    {
      title: 'Token-driven component',
      code: "@use '../tokens' as t;\n\n.alert {\n  padding: t.$space-sm t.$space-md;\n  border-radius: t.$radius-md;\n  &--error {\n    background: t.color(error-bg);\n    color: t.color(error-text);\n  }\n}",
    },
  ],
  demonstrations: [
    'When brand spacing changes, updating one token map propagates through alerts, cards, and modals without touching each component file.',
  ],
  bestPractices: [
    'Review SCSS in pull requests with the same rigor as JavaScript.',
    'Keep functions pure—same inputs should always return the same CSS values.',
  ],
  commonMistakes: [
    'Copy-pasting a mixin into three files instead of extracting to a shared module.',
    'Leaving dead partials in the tree after component deletion.',
  ],
  references: [
    { title: 'Sass Guidelines — Maintainability', url: 'https://sass-guidelin.es/' },
  ],
  practicalUseCases: [
    'Long-lived products where original authors leave and new teams must extend styles safely.',
    'Open-source component libraries with external contributors.',
  ],
}

export default content
