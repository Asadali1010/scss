import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Maps associate keys with values using parentheses syntax: (key: value, key2: value2). Keys are usually unquoted identifiers or strings.',
    'Maps are the backbone of design tokens—colors, spacing, breakpoints, and typography scales stored as structured data.',
    'Use map.set, map.merge, and map.remove from sass:map for immutable updates.',
  ],
  examples: [
    {
      title: 'Breakpoint and color maps',
      code: `$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
);

$colors: (
  text: #1a1814,
  text-muted: #5c574f,
  accent: #c65309,
);`,
    },
  ],
  demonstrations: [
    'Add xl: 1280px to $breakpoints and every @each loop over the map picks up the new breakpoint on recompile.',
  ],
  bestPractices: [
    'Group related maps by category rather than one mega-map with mixed value types.',
    'Use string keys consistently; quote keys that contain special characters.',
  ],
  commonMistakes: [
    'Using commas where colons belong (sm, 640px instead of sm: 640px).',
    'Assuming map order is guaranteed for logic—treat maps as unordered unless using meta.inspect for debugging only.',
  ],
  references: [
    { title: 'Sass — Maps', url: 'https://sass-lang.com/documentation/values/maps/' },
    { title: 'Sass — sass:map', url: 'https://sass-lang.com/documentation/modules/map/' },
  ],
  practicalUseCases: [
    'Central breakpoint map consumed by responsive mixins.',
    'Semantic color token map feeding utility class generators.',
  ],
}

export default content
