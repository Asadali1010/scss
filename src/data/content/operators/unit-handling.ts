import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Sass preserves units through arithmetic when operations are valid. Invalid unit combinations produce compile-time errors rather than silent bugs.',
    'Use unit(), unitless(), and compatible() from sass:math to inspect and normalize values before math.',
    'Convert between px and rem with explicit functions; do not assume the browser will fix unit mismatches—Sass runs at compile time.',
  ],
  examples: [
    {
      title: 'Unit inspection and conversion',
      code: `@use 'sass:math';

@function strip-unit($value) {
  @return math.div($value, $value * 0 + 1);
}

@function rem($px, $base: 16px) {
  @return math.div(strip-unit($px), strip-unit($base)) * 1rem;
}

.text {
  font-size: rem(18px);
  line-height: rem(28px);
}`,
    },
  ],
  demonstrations: [
    'Try adding 16px + 1rem without conversion—Sass throws an error. After rem(), both values share compatible units in output.',
  ],
  bestPractices: [
    'Standardize on rem or px at the token layer; convert once, not in every component.',
    'Use math.compatible() to assert two values can be combined before arithmetic.',
  ],
  commonMistakes: [
    'Multiplying two lengths (px * px), which Sass rejects.',
    'Dividing without math.div and getting CSS shorthand instead of a number.',
  ],
  references: [
    { title: 'Sass — Units', url: 'https://sass-lang.com/documentation/values/numbers/#units' },
    { title: 'Sass — sass:math', url: 'https://sass-lang.com/documentation/modules/math/' },
  ],
  practicalUseCases: [
    'Design handoff in px converted to rem for accessible scaling.',
    'Validating that spacing tokens share a unit before generating utility classes.',
  ],
}

export default content
