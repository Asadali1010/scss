import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Container queries style elements based on their parent container size, not the viewport—ideal for reusable components in unpredictable layouts.',
    'SCSS can generate @container rules via mixins, pairing named containers with min-width conditions.',
    'Use container-type: inline-size on the parent; child components respond with @container (min-width: ...).',
  ],
  examples: [
    {
      title: 'Container query mixin',
      code: '@mixin container-above($width) {\n  @container (min-width: #{$width}) {\n    @content;\n  }\n}\n\n.card-grid {\n  container-type: inline-size;\n}\n\n.card {\n  @include container-above(400px) {\n    display: grid;\n    grid-template-columns: 120px 1fr;\n  }\n}',
    },
  ],
  demonstrations: [
    'A card component switches from stacked to horizontal layout when its sidebar slot is wide enough—even if the viewport is mobile-sized.',
  ],
  bestPractices: [
    'Name containers in complex layouts for debugging: container-name: sidebar.',
    'Combine viewport breakpoints for page layout with container queries for component internals.',
  ],
  commonMistakes: [
    'Expecting container queries to replace all media queries—they solve component-level responsiveness, not page-level grids.',
    'Forgetting container-type on the parent, so queries never fire.',
  ],
  references: [
    { title: 'MDN — CSS container queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries' },
  ],
  practicalUseCases: [
    'Dashboard widgets rendered in narrow side panels and full-width main areas.',
    'Design system cards used in marketing grids and related-articles rails.',
  ],
}

export default content
