import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@import is deprecated and will be removed from Dart Sass. Migrate to @use and @forward for scoped modules and predictable load behavior.',
    'The sass migrator tool automates many conversions: npx sass-migrator module --migrate-deps src/scss/**/*.scss.',
    'Migration steps: replace @import with @use, add namespaces to member references, convert shared partials to @forward barrels, and remove duplicate imports.',
  ],
  examples: [
    {
      title: 'Before and after migration',
      code: "// Before\n@import 'variables';\n@import 'mixins';\n.button { color: $primary; }\n\n// After\n@use 'variables' as vars;\n@use 'mixins';\n.button { color: vars.$primary; }",
    },
  ],
  demonstrations: [
    'Running the migrator on a 40-file project updates import statements and inserts namespaces; manual review catches edge cases like CSS-only imports.',
  ],
  bestPractices: [
    'Migrate one layer at a time: settings and tools first, then components.',
    'Run the full build after each batch to catch namespace errors early.',
  ],
  commonMistakes: [
    'Leaving @import for plain CSS files that should use @use ... with or native CSS @import in output.',
    'Migrating without updating test snapshots or Storybook styles that reference old global variables.',
  ],
  references: [
    { title: 'Sass — Migrator', url: 'https://sass-lang.com/documentation/cli/migrator/' },
    { title: 'Sass — Import is Deprecated', url: 'https://sass-lang.com/documentation/breaking-changes/import/' },
  ],
  practicalUseCases: [
    'Upgrading a Webpack project from node-sass to dart-sass while adopting modules.',
    'Preparing a component library for Sass 3.0 removal of @import.',
  ],
}

export default content
