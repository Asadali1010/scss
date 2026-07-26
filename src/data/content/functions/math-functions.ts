import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Math functions in Sass operate on numbers with units. Use sass:math for division, rounding, min, max, and trigonometry in modern Sass.',
    'The / operator for division is deprecated in favor of math.div() to avoid ambiguity with CSS slash syntax.',
    'Unit-aware math preserves px, rem, em, and % where valid; incompatible units throw compile errors.',
  ],
  examples: [
    {
      title: 'Division, rounding, and clamp helper',
      code: `@use 'sass:math';

@function fluid-size($min, $max, $vw) {
  $range: $max - $min;
  @return clamp(#{$min}, #{$min} + #{$range} * #{$vw}, #{$max});
}

$column: math.div(1170px, 12);

.grid-col {
  width: $column;
  font-size: math.round(15.6px);
}`,
    },
  ],
  demonstrations: [
    'Replace 960px / 3 with math.div(960px, 3) and confirm Sass compiles without slash-division warnings.',
  ],
  bestPractices: [
    '@use sass:math in any partial performing division or advanced numeric operations.',
    'Use math.percentage and math.unit for explicit unit conversions instead of manual hacks.',
  ],
  commonMistakes: [
    'Using / for division in new SCSS—Dart Sass treats it as a CSS separator unless wrapped in math.div.',
    'Adding px and rem without converting to a common unit first.',
  ],
  references: [
    { title: 'Sass — sass:math', url: 'https://sass-lang.com/documentation/modules/math/' },
    { title: 'Sass — Breaking Changes: Slash Division', url: 'https://sass-lang.com/documentation/breaking-changes/slash-div/' },
  ],
  practicalUseCases: [
    'Calculating column widths in a 12-column grid system.',
    'Converting design px values to rem in a shared function.',
  ],
}

export default content
