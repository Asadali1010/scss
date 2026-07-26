import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@while repeats a block as long as a condition remains true. The condition is evaluated before each iteration.',
    'Unlike @for, @while suits loops where the end condition depends on computed values rather than a fixed range.',
    'Always ensure the loop condition eventually becomes false— infinite loops hang the compiler.',
  ],
  examples: [
    {
      title: 'Generate halving spacing scale',
      code: `$size: 32px;
$min: 4px;
$step: 0;

@while $size >= $min {
  .space-#{$step} {
    padding: $size;
  }
  $size: $size * 0.5;
  $step: $step + 1;
}`,
    },
  ],
  demonstrations: [
    'Trace the loop: 32px, 16px, 8px, 4px produce .space-0 through .space-3—each iteration halves $size until it drops below $min.',
  ],
  bestPractices: [
    'Prefer @for when the iteration count is known upfront; use @while for dynamic termination.',
    'Increment loop control variables inside the body to guarantee exit.',
  ],
  commonMistakes: [
    'Forgetting to update the condition variable, causing the Sass compiler to hang.',
    'Using @while for simple fixed-count loops where @for is clearer and safer.',
  ],
  references: [
    { title: 'Sass — @while', url: 'https://sass-lang.com/documentation/at-rules/control/while/' },
  ],
  practicalUseCases: [
    'Generating exponential spacing or type scales until a minimum threshold.',
    'Building grid fractions by doubling columns until reaching a max.',
  ],
}

export default content
