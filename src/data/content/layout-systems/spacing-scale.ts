import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'A spacing scale defines consistent step sizes—often 4px or 8px base—used for margin, padding, and gap across all components.',
    'Store the scale in a Sass map ($space-xs through $space-xl) and reference it everywhere instead of magic numbers.',
    'Generate utility classes .mt-md, .p-lg from the map with @each for rapid layout adjustments in HTML.',
  ],
  examples: [
    {
      title: 'Spacing scale map',
      code: '$space: (\n  xs: 0.25rem,\n  sm: 0.5rem,\n  md: 1rem,\n  lg: 1.5rem,\n  xl: 2rem,\n);\n\n@function space($key) {\n  @return map-get($space, $key);\n}\n\n.card { padding: space(md); gap: space(sm); }',
    },
  ],
  demonstrations: [
    'Changing md from 1rem to 1.25rem updates cards, modals, and form groups simultaneously.',
  ],
  bestPractices: [
    'Align the scale with design tokens in Figma.',
    'Limit the number of steps (5–8) to avoid decision fatigue.',
  ],
  commonMistakes: [
    'Adding one-off values like 13px outside the scale for a single component.',
    'Using margin for spacing between siblings when gap on flex/grid parent is cleaner.',
  ],
  references: [
    { title: 'Every Layout — Stack', url: 'https://every-layout.dev/layouts/stack/' },
  ],
  practicalUseCases: [
    'Design system documentation mapping space tokens to pixel values.',
    'Responsive spacing that increases at larger breakpoints via map overrides.',
  ],
}

export default content
