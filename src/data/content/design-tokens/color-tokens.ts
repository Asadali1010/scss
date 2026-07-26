import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Color tokens separate raw palette values (orange-600) from semantic roles (accent, text-muted, surface-raised).',
    'Store primitives in one map and semantic aliases in another; components reference semantic names only.',
    'Export colors as SCSS variables for compile-time use and CSS custom properties for runtime theme switching.',
  ],
  examples: [
    {
      title: 'Primitive and semantic color tokens',
      code: '$palette: (\n  orange-600: #c65309,\n  gray-700: #5c574f,\n);\n\n$semantic: (\n  accent: map-get($palette, orange-600),\n  text-muted: map-get($palette, gray-700),\n);',
    },
  ],
  demonstrations: [
    'Rebrand updates orange-600 once; accent tokens in buttons, links, and badges all shift on next compile.',
  ],
  bestPractices: [
    'Name tokens by purpose, not appearance (danger, not red).',
    'Document contrast pairs (text on surface) in token comments.',
  ],
  commonMistakes: [
    'Using hex literals in component files instead of token references.',
    'Too many gray steps with no semantic mapping—designers and devs pick different grays.',
  ],
  references: [
    { title: 'Sass — Color module', url: 'https://sass-lang.com/documentation/modules/color/' },
  ],
  practicalUseCases: [
    'Syncing Figma color styles to SCSS maps via design-token plugins.',
    'Generating dark mode variants with color.scale() from the same primitives.',
  ],
}

export default content
