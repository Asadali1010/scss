import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Sass compiles SCSS source files into plain CSS. The compiler resolves variables, expands mixins, evaluates functions, and flattens nesting into valid selectors.',
    'Output styles include expanded (readable), compressed (minified), and nested. Source maps map compiled CSS back to SCSS for debugging.',
    'Compilation is a build step—unlike CSS custom properties, SCSS features do not exist in the browser at runtime.',
  ],
  examples: [
    {
      title: 'Compile with style and source maps',
      language: 'bash',
      code: `# Expanded output with source map
sass src/scss/main.scss dist/css/main.css --style=expanded --source-map

# Production build — compressed, no map
sass src/scss/main.scss dist/css/main.min.css --style=compressed --no-source-map`,
    },
    {
      title: 'What the compiler produces',
      code: `// Input (SCSS)
$gap: 1rem;
.grid { display: grid; gap: $gap; }

// Output (CSS)
.grid { display: grid; gap: 1rem; }`,
    },
  ],
  demonstrations: [
    'Run `sass styles.scss styles.css --source-map`, open DevTools, and confirm the Styles panel links back to your .scss line numbers.',
  ],
  bestPractices: [
    'Use --watch during development and compressed output for production deploys.',
    'Keep source maps enabled in dev builds so breakpoints land in SCSS, not compiled CSS.',
  ],
  commonMistakes: [
    'Editing the compiled CSS file directly—changes are overwritten on the next compile.',
    'Deploying expanded CSS to production when compressed output would cut payload size significantly.',
  ],
  references: [
    { title: 'Sass CLI — Output Style', url: 'https://sass-lang.com/documentation/cli/dart-sass/#style' },
    { title: 'Sass — Source Maps', url: 'https://sass-lang.com/documentation/source-maps/' },
  ],
  practicalUseCases: [
    'CI pipeline step that compiles SCSS to dist/ before static hosting upload.',
    'Debugging a mixin expansion issue by inspecting expanded CSS output locally.',
  ],
}

export default content
