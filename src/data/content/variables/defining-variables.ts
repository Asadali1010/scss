import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'SCSS variables store reusable values—colors, font sizes, spacing, z-index layers—prefixed with $. They are resolved at compile time and replaced with literal values in the output CSS.',
    'Define variables before use, group related tokens together, and name them by purpose (brand-primary) rather than appearance (blue).',
    'Variables support the same data types as Sass values: numbers, strings, colors, booleans, lists, maps, and null.',
  ],
  examples: [
    {
      title: 'Defining color and spacing variables',
      code: `$brand-primary: #c65309;
$brand-secondary: #1a1814;
$space-md: 1rem;
$space-lg: 1.5rem;

.card {
  padding: $space-md;
  border: 1px solid $brand-secondary;
  color: $brand-primary;
}`,
    },
  ],
  demonstrations: [
    'Change $brand-primary once and recompile—every rule referencing it updates without touching individual selectors.',
  ],
  bestPractices: [
    'Centralize tokens in a dedicated _variables.scss or settings partial.',
    'Use semantic names ($text-muted) over raw value names ($gray-500).',
  ],
  commonMistakes: [
    'Scattering the same hex value across files instead of referencing one variable.',
    'Using $variable names that describe the current value ($blue) instead of the role ($link-color).',
  ],
  references: [
    { title: 'Sass — Variables', url: 'https://sass-lang.com/documentation/variables/' },
  ],
  practicalUseCases: [
    'Maintaining a brand color palette referenced by buttons, links, and borders.',
    'Defining a spacing scale consumed by margin and padding utilities.',
  ],
}

export default content
