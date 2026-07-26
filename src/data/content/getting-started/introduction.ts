import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'SCSS (Sassy CSS) is a CSS preprocessor that extends standard CSS with variables, nesting, mixins, functions, and a module system. Your SCSS is compiled to plain CSS before browsers ever see it.',
    'Teams adopt SCSS to reduce repetition, encode design decisions in one place, and keep large stylesheets organized as products grow.',
    'SCSS uses the same syntax as CSS for rules and properties, so any valid CSS is valid SCSS. The extra features compile away, leaving standard CSS with zero runtime cost.',
  ],
  examples: [
    {
      title: 'Variables and nesting',
      code: `$primary: #c65309;

.button {
  background: $primary;
  padding: 0.75rem 1.25rem;

  &:hover {
    background: darken($primary, 8%);
  }
}`,
    },
  ],
  demonstrations: [
    'Save the file as styles.scss, compile with `sass styles.scss styles.css`, and link the output CSS in your HTML—the browser receives standard CSS with no runtime overhead.',
  ],
  bestPractices: [
    'Treat SCSS as a compile-time layer: keep runtime styling in CSS custom properties when you need theme switching in the browser.',
    'Start with one partial per concern (tokens, layout, components) rather than a single monolithic file.',
  ],
  commonMistakes: [
    'Nesting more than three levels deep, which mirrors HTML too literally and produces over-specific selectors.',
    'Using SCSS variables for values that must change at runtime without also exposing CSS custom properties.',
  ],
  references: [
    { title: 'Sass Documentation — Syntax', url: 'https://sass-lang.com/documentation/' },
    { title: 'MDN — Sass basics', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting' },
  ],
  practicalUseCases: [
    'Centralizing brand colors and spacing scales across a multi-page marketing site.',
    'Generating responsive grid utilities from a single breakpoint map.',
    'Sharing mixins for focus rings and typography across a component library.',
  ],
}

export default content
