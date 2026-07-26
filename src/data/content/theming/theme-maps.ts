import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Theme maps store all token values for a theme as nested Sass maps—colors, spacing, typography—in one data structure.',
    'Loop with @each to emit CSS custom properties or generate utility classes from a single theme definition.',
    'Switch themes by applying a different map to the same semantic token names.',
  ],
  examples: [
    {
      title: 'Theme map to custom properties',
      code: '$light: (\n  bg: #fff,\n  text: #111,\n  accent: #c65309,\n);\n\n@mixin emit-theme($theme) {\n  @each $key, $val in $theme {\n    --#{$key}: #{$val};\n  }\n}\n\n:root { @include emit-theme($light); }',
    },
  ],
  demonstrations: [
    'Adding a high-contrast theme means defining a new map and a .high-contrast selector—components unchanged.',
  ],
  bestPractices: [
    'Keep semantic keys identical across theme maps (bg, text, accent).',
    'Validate map keys with a shared list to catch typos at compile time.',
  ],
  commonMistakes: [
    'Different key names per theme (.dark uses --background while light uses --bg).',
    'Storing non-color tokens in color theme maps, mixing concerns.',
  ],
  references: [
    { title: 'Sass — Maps', url: 'https://sass-lang.com/documentation/values/maps/' },
  ],
  practicalUseCases: [
    'SaaS products with admin-configurable brand colors mapped to theme maps.',
    'Seasonal marketing themes (holiday, sale) swapped via a single class.',
  ],
}

export default content
