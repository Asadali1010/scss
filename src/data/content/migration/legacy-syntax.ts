import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Legacy indented Sass syntax (.sass files) uses indentation instead of braces and semicolons. Modern teams standardize on SCSS (.scss).',
    'The sass-convert tool or sass-migrator can transform .sass to .scss: sass-convert -F sass -T scss file.sass file.scss.',
    'LibSass (deprecated) supported both syntaxes; Dart Sass is the only supported implementation today—verify your build uses dart-sass.',
  ],
  examples: [
    {
      title: 'Indented vs SCSS syntax',
      code: '// Legacy .sass\n.button\n  color: $primary\n  &:hover\n    color: darken($primary, 10%)\n\n// Equivalent .scss\n.button {\n  color: $primary;\n  &:hover { color: darken($primary, 10%); }\n}',
    },
  ],
  demonstrations: [
    'Converting a handful of remaining .sass partials to .scss lets you delete dual-syntax tooling and simplify CI.',
  ],
  bestPractices: [
    'Standardize on SCSS for new files even if legacy .sass remains temporarily.',
    'Update editor settings to use SCSS syntax highlighting for all style files.',
  ],
  commonMistakes: [
    'Mixing .sass and .scss in the same folder without documenting which syntax each file uses.',
    'Relying on LibSass-specific behavior that Dart Sass changed.',
  ],
  references: [
    { title: 'Sass — Syntax', url: 'https://sass-lang.com/documentation/syntax/' },
    { title: 'LibSass is Deprecated', url: 'https://sass-lang.com/blog/libsass-is-deprecated/' },
  ],
  practicalUseCases: [
    'Acquiring a codebase with 2015-era .sass files and consolidating to SCSS.',
    'Updating Ruby Compass projects to modern Vite + dart-sass pipelines.',
  ],
}

export default content
