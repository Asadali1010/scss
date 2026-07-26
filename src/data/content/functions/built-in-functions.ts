import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Sass ships dozens of built-in functions for colors, strings, numbers, lists, maps, and selector inspection. Many moved to namespaced modules in Dart Sass (sass:math, sass:color, sass:string).',
    'Built-in functions run at compile time—they compute values before CSS reaches the browser.',
    'Prefer module functions (color.adjust) over deprecated global aliases (darken) in new code.',
  ],
  examples: [
    {
      title: 'Common built-in and module functions',
      code: `@use 'sass:color';
@use 'sass:math';

$base: #c65309;
$hover: color.adjust($base, $lightness: -8%);
$width: math.div(960px, 3);
$slug: 'btn-primary';
$selector: selector-append('.#{$slug}', ':hover');`,
    },
  ],
  demonstrations: [
    'Compile and confirm $hover resolves to a darker hex and math.div produces 320px—functions never appear in output CSS.',
  ],
  bestPractices: [
    '@use sass:math, sass:color, sass:string explicitly instead of relying on global functions.',
    'Check the Sass changelog when upgrading—function signatures and module locations change.',
  ],
  commonMistakes: [
    'Using deprecated global darken()/lighten() instead of color.adjust with explicit parameters.',
    'Calling list/map functions on the wrong data type, causing compile errors.',
  ],
  references: [
    { title: 'Sass — Built-in Modules', url: 'https://sass-lang.com/documentation/modules/' },
    { title: 'Sass — String Functions', url: 'https://sass-lang.com/documentation/modules/string/' },
  ],
  practicalUseCases: [
    'Generating hover states from a single brand color token.',
    'Building dynamic class names from map keys with string.unquote.',
  ],
}

export default content
