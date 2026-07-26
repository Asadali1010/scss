import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@each loops iterate over lists and maps, binding each item (and optionally key/value pairs) to variables inside the loop body.',
    'Syntax: @each $item in $list { } for lists; @each $key, $value in $map { } for maps.',
    '@each is the workhorse for theme tokens, breakpoint maps, and color palette generation.',
  ],
  examples: [
    {
      title: 'Generate classes from a color map',
      code: `$colors: (
  primary: #c65309,
  secondary: #1a1814,
  muted: #5c574f,
);

@each $name, $value in $colors {
  .text-#{$name} {
    color: $value;
  }

  .bg-#{$name} {
    background-color: $value;
  }
}`,
    },
  ],
  demonstrations: [
    'Add accent: #2563eb to the map, recompile, and .text-accent and .bg-accent appear automatically without new hand-written rules.',
  ],
  bestPractices: [
    'Store iteration data in maps at the top of partials; keep loop bodies focused on CSS output.',
    'Use meta.type-of() checks when a mixin accepts either a list or map.',
  ],
  commonMistakes: [
    'Forgetting to interpolate map keys in selectors (#{$name}), producing invalid class names.',
    'Mutating loop variables expecting the source map to change—it does not.',
  ],
  references: [
    { title: 'Sass — @each', url: 'https://sass-lang.com/documentation/at-rules/control/each/' },
  ],
  practicalUseCases: [
    'Exporting CSS custom properties from a theme map with @each.',
    'Generating icon size utilities from a list of dimensions.',
  ],
}

export default content
