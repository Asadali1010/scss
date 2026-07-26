import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'The @import to @use migration is the most impactful Sass modernization: it fixes global namespace pollution and duplicate CSS output.',
    'Use the official sass-migrator module command for automated conversion, then fix edge cases manually.',
    'Key changes: add namespaces to variables and mixins, convert barrel files to @forward, and load sass:math/sass:color explicitly.',
  ],
  examples: [
    {
      title: 'Migrator command',
      language: 'bash',
      code: 'npx sass-migrator module --migrate-deps src/scss/**/*.scss\n# Review diff, run build, fix remaining errors',
    },
  ],
  demonstrations: [
    'After migration, two components that both need $primary must each @use the variables module—no accidental global override.',
  ],
  bestPractices: [
    'Commit before running the migrator so you can revert cleanly.',
    'Migrate shared utilities first since every file depends on them.',
  ],
  commonMistakes: [
    'Running migrator without --migrate-deps, leaving broken imports in dependency files.',
    'Assuming @use works like JavaScript ES modules with default exports—Sass uses namespaces instead.',
  ],
  references: [
    { title: 'Sass Migrator — module', url: 'https://sass-lang.com/documentation/cli/migrator/#module' },
  ],
  practicalUseCases: [
    'Preparing for Dart Sass 3.0 which removes @import entirely.',
    'Fixing duplicate Bootstrap CSS loaded by multiple @import statements.',
  ],
}

export default content
