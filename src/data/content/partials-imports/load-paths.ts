import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Load paths tell the Sass compiler where to resolve @use and @import URLs. Configure them in the CLI (--load-path), in build tools (includePaths), or via package importers.',
    'Without load paths, you must use relative paths (../abstracts/variables). Load paths let you write @use "variables" from any file.',
    'Node package imports (npm:package) resolve styles from node_modules when using modern Sass module importers.',
  ],
  examples: [
    {
      title: 'CLI and Vite load path configuration',
      language: 'bash',
      code: `# Dart Sass CLI
sass src/scss/main.scss dist/css/main.css \\
  --load-path=src/scss \\
  --load-path=node_modules

# vite.config.ts (conceptual)
css: {
  preprocessorOptions: {
    scss: {
      loadPaths: ['src/scss', 'node_modules'],
    },
  },
}`,
    },
    {
      title: 'Clean @use with load paths',
      code: `@use 'abstracts/variables' as vars;
@use 'components/button';`,
    },
  ],
  demonstrations: [
    'Add src/scss to load paths, move @use statements to drop ../ segments, and confirm compilation still resolves all partials.',
  ],
  bestPractices: [
    'Mirror load paths in CLI, Vite, and CI so local and pipeline builds behave identically.',
    'Document load path roots in README so new contributors know where to add partials.',
  ],
  commonMistakes: [
    'Hard-coding fragile relative paths (../../../../) instead of configuring load paths once.',
    'Assuming node_modules resolution works without enabling the Node package importer in Dart Sass 1.x.',
  ],
  references: [
    { title: 'Sass CLI — Load Path', url: 'https://sass-lang.com/documentation/cli/dart-sass/#load-path' },
    { title: 'Sass — Node Package Importer', url: 'https://sass-lang.com/documentation/at-rules/use/#node-package-importer' },
  ],
  practicalUseCases: [
    'Consuming a design-system package from node_modules with @use "npm:@org/tokens".',
    'Monorepo packages sharing a common abstracts/ load path root.',
  ],
}

export default content
