import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Fluid typography scales font size smoothly between min and max viewport widths using clamp(), calc(), or SCSS-generated clamp expressions.',
    'Define type tokens with min-size, max-size, and viewport bounds; a mixin outputs clamp(min, preferred, max).',
    'Combine fluid type with fixed line-height tokens for readable rhythm across breakpoints.',
  ],
  examples: [
    {
      title: 'Fluid type mixin',
      code: '@mixin fluid-type($min, $max, $vmin: 320px, $vmax: 1200px) {\n  font-size: clamp(\n    #{$min},\n    calc(#{$min} + (#{$max} - #{$min}) * ((100vw - #{$vmin}) / (#{$vmax} - #{$vmin}))),\n    #{$max}\n  );\n}\n\nh1 { @include fluid-type(1.75rem, 3rem); }',
    },
  ],
  demonstrations: [
    'Headlines grow smoothly as the user resizes the browser—no jarring jumps at 768px.',
  ],
  bestPractices: [
    'Set minimum sizes for body text (≥16px) for readability and iOS zoom behavior.',
    'Pair fluid headings with stepped body text if full fluid scale feels inconsistent.',
  ],
  commonMistakes: [
    'Fluid formulas without clamp(), causing text to shrink below readable sizes on very small screens.',
    'Using vw alone for font-size, ignoring user font preferences.',
  ],
  references: [
    { title: 'MDN — clamp()', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clamp' },
  ],
  practicalUseCases: [
    'Editorial sites with dramatic display headings and long-form body copy.',
    'Landing pages that must look polished from 320px to 4K.',
  ],
}

export default content
