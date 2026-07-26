import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Typography tokens capture font families, sizes, weights, line heights, and letter spacing as named values.',
    'Define a type scale (text-sm through display-xl) and reference tokens in heading and body mixins.',
    'Load web fonts in a dedicated partial; tokens reference stack fallbacks for FOUT/FOIT resilience.',
  ],
  examples: [
    {
      title: 'Type scale map',
      code: '$font-sizes: (\n  sm: 0.875rem,\n  base: 1rem,\n  lg: 1.25rem,\n  xl: 1.5rem,\n  2xl: 2rem,\n);\n\n@mixin text($size) {\n  font-size: map-get($font-sizes, $size);\n  line-height: 1.5;\n}',
    },
  ],
  demonstrations: [
    'Updating base from 1rem to 1.0625rem shifts all relative sizing if components use the scale, not hard-coded rem values.',
  ],
  bestPractices: [
    'Limit font families to two stacks (display + body) in most products.',
    'Set line-height tokens per size—display headings often need tighter leading.',
  ],
  commonMistakes: [
    'Hard-coding font-size in px on every heading instead of using the scale.',
    'Forgetting font-weight tokens, leading to arbitrary 600 vs 700 choices per component.',
  ],
  references: [
    { title: 'Modular Scale', url: 'https://www.modularscale.com/' },
  ],
  practicalUseCases: [
    'Documentation sites pairing Source Serif display with sans body via token stacks.',
    'Fluid typography tokens that output clamp() values from min/max map entries.',
  ],
}

export default content
