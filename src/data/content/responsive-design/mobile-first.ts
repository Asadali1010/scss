import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Mobile-first means base styles target the smallest viewport; min-width media queries add enhancements for larger screens.',
    'In SCSS, write unprefixed rules for mobile, then wrap tablet and desktop overrides inside breakpoint mixins.',
    'This approach reduces override conflicts compared to desktop-first max-width queries that fight cascade order.',
  ],
  examples: [
    {
      title: 'Mobile-first with mixin',
      code: '.hero {\n  padding: 1rem;\n  font-size: 1.25rem;\n\n  @include respond-above(md) {\n    padding: 3rem;\n    font-size: 2rem;\n  }\n}',
    },
  ],
  demonstrations: [
    'On a 320px phone, only base .hero rules apply—no unused desktop grid declarations in the critical path.',
  ],
  bestPractices: [
    'Design and build the narrow layout first in Figma and code.',
    'Test touch targets at the base breakpoint before adding desktop hover states.',
  ],
  commonMistakes: [
    "Writing desktop styles first then trying to 'undo' them with max-width queries.",
    'Hiding mobile-only content with display:none on desktop without considering accessibility.',
  ],
  references: [
    { title: 'MDN — Mobile first', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile-first' },
  ],
  practicalUseCases: [
    'E-commerce product pages where 70% of traffic is mobile.',
    'Progressive enhancement of data tables into card layouts on small screens.',
  ],
}

export default content
