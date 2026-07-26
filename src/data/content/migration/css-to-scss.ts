import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Migrating CSS to SCSS is low-risk: rename .css to .scss, introduce variables for repeated values, and extract partials incrementally.',
    'Valid CSS is valid SCSS, so you can migrate file-by-file without a big-bang rewrite.',
    'Start by identifying repeated colors, spacing, and breakpoints—replace literals with variables first, then add mixins and nesting where they clarify intent.',
  ],
  examples: [
    {
      title: 'Incremental CSS to SCSS',
      code: '// Was: styles.css\n// body { color: #1a1814; background: #f8f7f4; }\n\n$text: #1a1814;\n$bg: #f8f7f4;\n\nbody {\n  color: $text;\n  background: $bg;\n}',
    },
  ],
  demonstrations: [
    'Renaming main.css to main.scss and updating the build entry point is often enough for day-one adoption; refactor partials in follow-up PRs.',
  ],
  bestPractices: [
    'Enable source maps so browser DevTools map compiled CSS back to SCSS lines.',
    'Add variables only for values that appear more than once or represent design tokens.',
  ],
  commonMistakes: [
    'Renesting entire flat CSS files deeply on day one, increasing specificity accidentally.',
    'Changing compiled class names during migration instead of keeping HTML stable.',
  ],
  references: [
    { title: 'Sass — Getting Started', url: 'https://sass-lang.com/install/' },
  ],
  practicalUseCases: [
    'WordPress theme migration from plain CSS to SCSS partials.',
    'Converting Create React App CSS files to SCSS modules.',
  ],
}

export default content
