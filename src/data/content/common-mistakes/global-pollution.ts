import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    "Global pollution happens when @import loads variables and mixins into every file's scope, allowing accidental overrides and load-order bugs.",
    'Two files defining $primary with @import means the last import wins—silent, hard-to-debug breakage.',
    "The module system (@use/@forward) isolates each file's namespace and loads each module once, eliminating most pollution.",
  ],
  examples: [
    {
      title: 'Import pollution vs modules',
      code: "// With @import — global, order-dependent\n@import 'theme-a';\n@import 'theme-b'; // overwrites theme-a variables\n\n// With @use — namespaced, explicit\n@use 'theme-a' as a;\n@use 'theme-b' as b;",
    },
  ],
  demonstrations: [
    'Removing @import and switching to @use surfaces hidden dependencies: files that used variables without importing them fail fast at compile time.',
  ],
  bestPractices: [
    'Migrate to @use module-by-module starting with shared settings.',
    'Never use !global unless you understand the cross-file impact.',
  ],
  commonMistakes: [
    "Using @use 'file' as * everywhere, recreating global pollution intentionally.",
    "Assuming CSS Modules or scoped styles prevent Sass variable collisions—they don't.",
  ],
  references: [
    { title: 'Sass — Import is Deprecated', url: 'https://sass-lang.com/documentation/breaking-changes/import/' },
  ],
  practicalUseCases: [
    'Debugging mysterious color changes after reordering @import statements.',
    'Onboarding guides explaining why new files must @use tokens explicitly.',
  ],
}

export default content
