import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Sass supports arithmetic operators +, -, *, /, and % on numbers with compatible units. Calculations happen at compile time.',
    'Use sass:math.div() instead of / for division to avoid conflicts with CSS slash-separated values.',
    'Addition and subtraction require compatible units; multiplication and division have specific unit rules.',
  ],
  examples: [
    {
      title: 'Arithmetic with units',
      code: `@use 'sass:math';

$base: 16px;
$gutter: $base * 1.5;
$column: math.div(960px - $gutter * 11, 12);

.container {
  max-width: 960px;
  padding: $gutter;
  column-width: $column;
}`,
    },
  ],
  demonstrations: [
    'Change $base from 16px to 18px and recompile—$gutter and $column recalculate automatically in the output CSS.',
  ],
  bestPractices: [
    'Wrap division in math.div(); use calc() in output CSS when runtime flexibility is needed.',
    'Keep arithmetic in variables or functions, not scattered inside property values.',
  ],
  commonMistakes: [
    'Using / for division and getting a CSS list separator instead of a computed number.',
    'Adding px to rem without normalizing units first.',
  ],
  references: [
    { title: 'Sass — Operators', url: 'https://sass-lang.com/documentation/operators/' },
    { title: 'Sass — sass:math', url: 'https://sass-lang.com/documentation/modules/math/' },
  ],
  practicalUseCases: [
    'Grid column width calculations from container and gutter tokens.',
    'Deriving half-step spacing values from a base spacing unit.',
  ],
}

export default content
