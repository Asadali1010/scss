import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Building a component library in SCSS means shipping tokens, mixins, and component skins as versioned packages with clear public API boundaries.',
    'Each component partial is self-contained: @use tokens and tools, emit BEM classes, avoid global element selectors.',
    'Document breaking changes to class names and token maps in CHANGELOG semver releases.',
  ],
  examples: [
    {
      title: 'Self-contained button partial',
      code: "@use '../tokens/colors' as c;\n@use '../tokens/spacing' as s;\n\n.btn {\n  padding: s.$sm s.$md;\n  background: c.$accent;\n  &--ghost {\n    background: transparent;\n    border: 1px solid c.$accent;\n  }\n}",
    },
  ],
  demonstrations: [
    'Storybook stories import one component partial each; unused components tree-shake from the consumer bundle when using modern bundlers.',
  ],
  bestPractices: [
    'Provide CSS custom properties on components for consumer theming without recompile.',
    'Test compiled output in isolation—each partial should compile without the full app.',
  ],
  commonMistakes: [
    'Leaking global styles (a { color: ... }) that break consumer app links.',
    'Tight coupling to a specific React/Vue structure in class names.',
  ],
  references: [
    { title: 'Sass — @forward', url: 'https://sass-lang.com/documentation/at-rules/forward/' },
  ],
  practicalUseCases: [
    'npm package @company/ui-scss consumed by three product teams.',
    'Internal Storybook with live SCSS source for each component story.',
  ],
}

export default content
