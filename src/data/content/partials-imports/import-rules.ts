import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'The legacy @import rule merges files into a global scope. Sass deprecates @import in favor of @use, which provides namespacing and loads each file once.',
    '@import still appears in older codebases: @import "variables"; @import "components/button"; Order matters—later imports can override earlier variables.',
    'For new projects, use @use and @forward exclusively. Migrate with the official sass-migrator tool.',
  ],
  examples: [
    {
      title: 'Legacy @import vs modern @use',
      code: `// Legacy (deprecated)
@import 'variables';
@import 'mixins';
@import 'components/button';

// Modern (recommended)
@use 'variables' as vars;
@use 'mixins';
@use 'components/button';`,
    },
  ],
  demonstrations: [
    'Import the same partial twice with @import and observe duplicated CSS in output; @use loads it only once.',
  ],
  bestPractices: [
    'Plan migration from @import to @use module-by-module, starting with settings and tools.',
    'Never mix @import after @use in the same file—it causes confusing scope behavior.',
  ],
  commonMistakes: [
    'Copying @import examples from pre-2019 tutorials for greenfield projects.',
    'Relying on import order hacks to override variables instead of explicit configuration.',
  ],
  references: [
    { title: 'Sass — @import', url: 'https://sass-lang.com/documentation/at-rules/import/' },
    { title: 'Sass Migrator', url: 'https://sass-lang.com/documentation/cli/migrator/' },
  ],
  practicalUseCases: [
    'Maintaining a legacy Rails asset pipeline while incrementally adopting @use.',
    'Auditing third-party SCSS libraries that still ship @import entry points.',
  ],
}

export default content
