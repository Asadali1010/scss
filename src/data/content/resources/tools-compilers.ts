import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Dart Sass is the reference implementation, available as the sass npm package, standalone CLI, and embedded in build tools.',
    'Vite uses sass (dart-sass) via preprocessors; Webpack uses sass-loader. Both support loadPaths and modern @use.',
    'sass-migrator automates @import to @use conversion; stylelint with stylelint-scss enforces conventions in CI.',
  ],
  examples: [
    {
      title: 'CLI watch and compile',
      language: 'bash',
      code: 'npm install -D sass\nnpx sass src/scss:dist/css --watch --style=compressed\nnpx sass-migrator module --migrate-deps src/scss/**/*.scss',
    },
  ],
  demonstrations: [
    'Running sass --verbose shows which files are loaded and helps debug circular dependency errors.',
  ],
  bestPractices: [
    'Use sass-embedded in large monorepos for faster parallel compiles.',
    'Pin sass version and upgrade deliberately after reading breaking changes.',
  ],
  commonMistakes: [
    'Installing node-sass (deprecated) instead of sass.',
    'Using outdated gulp-sass versions incompatible with dart-sass 2.x APIs.',
  ],
  references: [
    { title: 'Sass — Install', url: 'https://sass-lang.com/install/' },
    { title: 'sass-loader', url: 'https://webpack.js.org/loaders/sass-loader/' },
  ],
  practicalUseCases: [
    'Setting up SCSS in a new Vite + React project.',
    'CI pipeline compiling and minifying SCSS for static site deploy.',
  ],
}

export default content
