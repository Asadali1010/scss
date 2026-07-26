import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Legacy Sass treated top-level variables as global—any file could read or overwrite them. The modern @use module system isolates variables per file.',
    'Global variables (pre-@use style) caused naming collisions when multiple partials defined $primary or $spacing independently.',
    'Migrate to @use and namespace imports: vars.$primary instead of relying on a shared global scope.',
  ],
  examples: [
    {
      title: 'Module-scoped vs legacy global',
      code: `// _tokens.scss
$primary: #c65309;

// _buttons.scss — modern approach
@use 'tokens';

.btn {
  background: tokens.$primary;
}

// Legacy @import (avoid) made $primary global everywhere`,
    },
  ],
  demonstrations: [
    'Define $primary in two different partials with @use—each consumer references the correct namespace without collision.',
  ],
  bestPractices: [
    'Treat @use as the default; reserve global variables only for legacy migration periods.',
    'Forward tokens from a single index module so consumers import one entry point.',
  ],
  commonMistakes: [
    'Mixing @import and @use in the same project, creating duplicate CSS and unpredictable variable scope.',
    'Expecting variables from one @use file to be visible in another without @forward or explicit @use.',
  ],
  references: [
    { title: 'Sass — @use', url: 'https://sass-lang.com/documentation/at-rules/use/' },
    { title: 'Sass — Breaking Changes: @import', url: 'https://sass-lang.com/documentation/breaking-changes/import/' },
  ],
  practicalUseCases: [
    'Splitting tokens, mixins, and components into modules without global namespace pollution.',
    'Running sass-migrator module to convert legacy global variables to @use.',
  ],
}

export default content
