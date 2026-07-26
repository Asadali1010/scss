import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Modern SCSS tooling centers on dart-sass (sass npm package), integrated via Vite, Webpack sass-loader, or the standalone CLI.',
    'Replace node-sass and LibSass with sass (dart-sass). Update gulp-sass, grunt-sass, and create-react-app overrides accordingly.',
    "Configure load paths so @use resolves packages from node_modules: loadPaths: ['node_modules'] in Vite or includePaths in Webpack.",
  ],
  examples: [
    {
      title: 'Vite SCSS configuration',
      code: "// vite.config.ts\nexport default defineConfig({\n  css: {\n    preprocessorOptions: {\n      scss: {\n        loadPaths: ['src/scss', 'node_modules'],\n      },\n    },\n  },\n});",
    },
  ],
  demonstrations: [
    'After switching from node-sass to sass, division outside calc() requires sass:math—update math.div() calls flagged by deprecation warnings.',
  ],
  bestPractices: [
    'Pin sass version in package.json and read release notes before major upgrades.',
    'Use sass-embedded in CI for faster compilation on large codebases.',
  ],
  commonMistakes: [
    'Keeping node-sass in devDependencies alongside sass, causing unpredictable resolver behavior.',
    'Ignoring deprecation warnings until they become breaking errors on upgrade.',
  ],
  references: [
    { title: 'Sass — JavaScript API', url: 'https://sass-lang.com/documentation/js-api/' },
    { title: 'Vite — CSS Pre-processors', url: 'https://vite.dev/guide/features.html#css-pre-processors' },
  ],
  practicalUseCases: [
    'Migrating Gulp 3 pipelines to Vite with SCSS partials intact.',
    'Setting up GitHub Actions to compile and lint SCSS on every pull request.',
  ],
}

export default content
