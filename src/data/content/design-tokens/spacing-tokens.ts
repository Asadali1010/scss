import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Spacing tokens define a consistent rhythm for margin, padding, and gap—typically multiples of a 4px or 8px base unit.',
    'Group spacing tokens separately from color and typography for clear @forward boundaries in token modules.',
    'Use the same token names in SCSS, CSS custom properties, and design tools for single-source-of-truth alignment.',
  ],
  examples: [
    {
      title: 'Spacing token module',
      code: '$space: (\n  1: 0.25rem,\n  2: 0.5rem,\n  3: 1rem,\n  4: 1.5rem,\n  5: 2rem,\n);\n\n@function space($step) {\n  @return map-get($space, $step);\n}',
    },
  ],
  demonstrations: [
    'Designers specify spacing-3 in specs; developers use space(3) in SCSS—no translation errors.',
  ],
  bestPractices: [
    'Avoid odd fractional steps unless the design system explicitly includes them.',
    'Pair spacing tokens with layout patterns (stack gap, grid gap) not just padding.',
  ],
  commonMistakes: [
    'Mixing rem and px spacing tokens without a documented conversion strategy.',
    'Creating component-specific spacing outside the global scale.',
  ],
  references: [
    { title: 'W3C Design Tokens — Dimension', url: 'https://design-tokens.github.io/community-group/format/' },
  ],
  practicalUseCases: [
    'Responsive spacing scales that increase at lg breakpoint via a second map.',
    'Utility class generation: .p-3 { padding: space(3); }',
  ],
}

export default content
