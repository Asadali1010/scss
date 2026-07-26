import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Your first SCSS file can be as simple as a CSS file with a .scss extension. Add features incrementally—start with variables, then nesting, then partials.',
    'Name your entry file main.scss or styles.scss and keep it thin: import partials rather than writing every rule inline.',
    'Link the compiled CSS output in your HTML; browsers never load .scss files directly.',
  ],
  examples: [
    {
      title: 'Minimal first SCSS file',
      code: `$font-stack: 'DM Sans', system-ui, sans-serif;
$text-color: #1a1814;

body {
  font-family: $font-stack;
  color: $text-color;
  line-height: 1.5;
}

h1 {
  font-weight: 700;
}`,
    },
  ],
  demonstrations: [
    'Create styles.scss, compile to styles.css, add `<link rel="stylesheet" href="styles.css">` to index.html, and reload—the page picks up the font and color tokens immediately.',
  ],
  bestPractices: [
    'Separate tokens (variables at the top or in _variables.scss) from component rules from day one.',
    'Use UTF-8 encoding and consistent indentation (two spaces is the Sass community default).',
  ],
  commonMistakes: [
    'Linking the .scss file in HTML instead of the compiled .css output.',
    'Putting every rule in one file before learning how partials scale.',
  ],
  references: [
    { title: 'Sass — Syntax', url: 'https://sass-lang.com/documentation/syntax/' },
    { title: 'Sass Guidelines — SCSS Style Guide', url: 'https://sass-guidelin.es/' },
  ],
  practicalUseCases: [
    'Converting an existing styles.css to styles.scss by renaming and introducing a color variable.',
    'Bootstrapping a documentation site with a tokens partial and a layout partial.',
  ],
}

export default content
