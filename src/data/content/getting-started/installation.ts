import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Dart Sass is the primary implementation of Sass today. Install it globally via npm, use it as a dev dependency in your project, or rely on build-tool integrations like Vite and Webpack.',
    'Choose between the standalone Dart Sass CLI for simple projects and sass-embedded for faster builds in Node-based toolchains.',
    'Verify your installation with `sass --version` before writing your first partial.',
  ],
  examples: [
    {
      title: 'Install Dart Sass as a dev dependency',
      language: 'bash',
      code: `npm install --save-dev sass

# Compile once
npx sass src/scss/main.scss dist/css/main.css

# Watch for changes
npx sass --watch src/scss:dist/css`,
    },
  ],
  demonstrations: [
    'After installing, create src/scss/main.scss with a single rule, run the watch command, and confirm dist/css/main.css updates on every save.',
  ],
  bestPractices: [
    'Pin the sass package version in package.json so CI and local builds use the same compiler.',
    'Prefer build-tool integration (Vite, Webpack) over manual CLI steps for application projects.',
  ],
  commonMistakes: [
    'Installing deprecated node-sass or LibSass-based packages that lack module-system support.',
    'Committing compiled CSS without documenting which command regenerates it.',
  ],
  references: [
    { title: 'Sass — Dart Sass', url: 'https://sass-lang.com/dart-sass/' },
    { title: 'Sass — Command Line', url: 'https://sass-lang.com/documentation/cli/dart-sass/' },
  ],
  practicalUseCases: [
    'Adding Sass compilation to a static HTML site with a single npm script.',
    'Enabling SCSS in a Vite React project by installing sass and renaming .css imports to .scss.',
  ],
}

export default content
