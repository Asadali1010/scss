import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Property nesting groups related CSS properties under a shared prefix—most commonly font-, margin-, padding-, or border- shorthand families.',
    'Sass expands nested properties into full property names: font { size: 1rem; weight: 600; } becomes font-size and font-weight.',
    'Use the & suffix to attach modifiers: margin { top: 1rem; &--large: 2rem; } is invalid—instead nest under a parent or use standard properties.',
  ],
  examples: [
    {
      title: 'Font and border property nesting',
      code: `.heading {
  font: {
    family: 'Source Serif 4', serif;
    size: 2rem;
    weight: 700;
  }

  border: {
    style: solid;
    width: 1px;
    color: #e8e4dc;
  }
}`,
    },
  ],
  demonstrations: [
    'Compile the heading rule and verify the output lists font-family, font-size, font-weight, border-style, border-width, and border-color as separate declarations.',
  ],
  bestPractices: [
    'Use property nesting for three or more related prefixed properties; otherwise plain CSS may be clearer.',
    'Keep the nested property name identical to the CSS prefix (font, not fonts).',
  ],
  commonMistakes: [
    'Nesting properties that do not share a prefix, expecting Sass to infer relationships.',
    'Over-nesting margin/padding sides when logical properties (margin-block) are simpler in modern CSS.',
  ],
  references: [
    { title: 'Sass — Property Nesting', url: 'https://sass-lang.com/documentation/style-rules/declarations/#property-nesting' },
  ],
  practicalUseCases: [
    'Typography blocks with multiple font-* declarations in component partials.',
    'Complex border and outline groups in focus-ring mixins.',
  ],
}

export default content
