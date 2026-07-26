import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Design system migration moves a product from ad-hoc CSS or an old framework to token-driven SCSS components incrementally.',
    'Phase 1: introduce tokens and map existing values. Phase 2: refactor components one by one. Phase 3: remove legacy CSS and @import.',
    'Run old and new styles in parallel briefly using scoped wrappers or feature flags—never big-bang rewrites in production.',
  ],
  examples: [
    {
      title: 'Parallel legacy and token styles',
      code: '// Legacy\n.legacy-btn { background: #0066cc; }\n\n// New token-driven\n@use \'tokens\' as t;\n.btn { background: t.$accent; }\n\n// HTML transition period\n<button class="legacy-btn">Old</button>\n<button class="btn">New</button>',
    },
  ],
  demonstrations: [
    'After token mapping, 80% of hex values live in one file—visual diff tools catch unintended color shifts during component migration.',
  ],
  bestPractices: [
    'Track migration progress in a spreadsheet: component, status, owner, QA sign-off.',
    'Add visual regression tests (Chromatic, Percy) before refactoring each component.',
  ],
  commonMistakes: [
    'Deleting legacy CSS before all HTML templates switch class names.',
    'Migrating SCSS syntax but not updating design token naming to match Figma.',
  ],
  references: [
    { title: 'Sass Migrator', url: 'https://sass-lang.com/documentation/cli/migrator/' },
  ],
  practicalUseCases: [
    'Bootstrap to custom design system migration over six sprints.',
    "Post-acquisition unification of two products' styles under one token package.",
  ],
}

export default content
