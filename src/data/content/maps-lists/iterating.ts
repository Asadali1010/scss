import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Combine @each with maps and lists to generate CSS rules, custom properties, or utility classes from a single data source.',
    'For maps: @each $key, $value in $map { }. For lists: @each $item in $list { } or @each $item in $list { } with index via counter.',
    'Nested @each loops walk multi-dimensional token structures—keep nesting shallow and extract mixins when logic grows.',
  ],
  examples: [
    {
      title: 'Iterate map to CSS custom properties',
      code: `$theme: (
  bg: #f8f7f4,
  text: #1a1814,
  accent: #c65309,
  border: #e8e4dc,
);

:root {
  @each $name, $value in $theme {
    --color-#{$name}: #{$value};
  }
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}`,
    },
  ],
  demonstrations: [
    'Toggle a .dark class that defines a second map iteration—components using var(--color-*) swap themes without SCSS changes in each file.',
  ],
  bestPractices: [
    'Single source of truth: iterate tokens once at :root, reference var() in components.',
    'Use @each at the tools layer; keep component partials free of raw map structures.',
  ],
  commonMistakes: [
    'Duplicating @each loops for the same map in multiple partials, drifting out of sync.',
    'Generating utility classes for every map entry when only a subset is used in the design.',
  ],
  references: [
    { title: 'Sass — @each', url: 'https://sass-lang.com/documentation/at-rules/control/each/' },
    { title: 'Sass — Maps', url: 'https://sass-lang.com/documentation/values/maps/' },
  ],
  practicalUseCases: [
    'Bootstrap-style spacing utilities from a spacing list.',
    'Multi-brand themes where each brand map is iterated at build time.',
  ],
}

export default content
