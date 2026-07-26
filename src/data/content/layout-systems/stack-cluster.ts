import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Stack and Cluster are layout patterns from Every Layout: Stack adds vertical spacing between children; Cluster wraps items horizontally with consistent gap.',
    'Implement as mixins or utility classes that set display:flex, flex-direction, and gap without affecting unrelated margins.',
    'Stack replaces margin-bottom on every child; Cluster replaces float-based horizontal groups.',
  ],
  examples: [
    {
      title: 'Stack and Cluster mixins',
      code: '@mixin stack($gap: 1rem) {\n  display: flex;\n  flex-direction: column;\n  gap: $gap;\n}\n\n@mixin cluster($gap: 1rem) {\n  display: flex;\n  flex-wrap: wrap;\n  gap: $gap;\n  align-items: center;\n}',
    },
  ],
  demonstrations: [
    'A form uses stack for field groups and cluster for checkbox + label rows—no margin collapse surprises.',
  ],
  bestPractices: [
    'Use stack for vertical rhythm in articles and settings panels.',
    'Combine cluster with flex-wrap for tag lists and button groups.',
  ],
  commonMistakes: [
    'Nesting stacks deeply instead of adjusting gap on one parent.',
    'Using cluster without flex-wrap, causing horizontal overflow on narrow screens.',
  ],
  references: [
    { title: 'Every Layout — Cluster', url: 'https://every-layout.dev/layouts/cluster/' },
  ],
  practicalUseCases: [
    'Blog post typography with consistent paragraph and heading spacing.',
    'Filter toolbars with wrapping chip buttons.',
  ],
}

export default content
