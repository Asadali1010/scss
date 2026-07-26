import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Color functions manipulate colors at compile time—adjusting hue, saturation, lightness, alpha, or mixing two colors together.',
    'The sass:color module provides color.adjust, color.scale, color.mix, color.change, and color.channel replacements for legacy global functions.',
    'Always specify which channel you are changing—explicit adjustments age better than magic darken/lighten percentages.',
  ],
  examples: [
    {
      title: 'Modern color module usage',
      code: `@use 'sass:color';

$brand: #c65309;

.palette {
  --brand: #{$brand};
  --brand-hover: #{color.adjust($brand, $lightness: -8%)};
  --brand-muted: #{color.mix(white, $brand, 85%)};
  --brand-alpha: #{color.change($brand, $alpha: 0.12)};
}`,
    },
  ],
  demonstrations: [
    'Inspect :root custom properties in DevTools—the compiled output contains resolved hex/rgba values generated from one $brand source.',
  ],
  bestPractices: [
    'Use color.adjust for predictable shifts; color.scale for proportional changes relative to the color space.',
    'Store base colors as variables; derive states (hover, disabled) with functions.',
  ],
  commonMistakes: [
    'Chaining darken() repeatedly until contrast fails WCAG checks.',
    'Mixing HSL adjustments on colors defined in hex without verifying perceptual contrast.',
  ],
  references: [
    { title: 'Sass — sass:color', url: 'https://sass-lang.com/documentation/modules/color/' },
  ],
  practicalUseCases: [
    'Generating hover, active, and disabled states from one primary token.',
    'Building semantic surface colors by mixing brand hues with neutrals.',
  ],
}

export default content
