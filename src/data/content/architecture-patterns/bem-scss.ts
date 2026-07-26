import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'BEM (Block Element Modifier) names components as block__element--modifier. SCSS nesting with & maps cleanly onto BEM selectors without repeating the block name.',
    'Each block is independent—styles for .card do not depend on .page .sidebar .card, keeping specificity low and reuse high.',
    'Use @extend sparingly with BEM; prefer mixins for shared declaration blocks across blocks.',
  ],
  examples: [
    {
      title: 'BEM block with modifiers',
      code: '.nav {\n  display: flex;\n\n  &__item {\n    padding: 0.5rem;\n  }\n\n  &__link {\n    text-decoration: none;\n    &--active { font-weight: 700; }\n  }\n}',
    },
  ],
  demonstrations: [
    ".nav__link--active compiles to a single class selector, easy to toggle in JavaScript with classList.add('nav__link--active').",
  ],
  bestPractices: [
    'One block per partial file: _nav.scss, _card.scss.',
    'Avoid nesting elements inside elements (.nav__item__link)—flatten to .nav__link.',
  ],
  commonMistakes: [
    'Using BEM class names but nesting five levels deep, defeating the low-specificity goal.',
    'Creating modifier classes that change unrelated properties (a --large modifier that also changes color).',
  ],
  references: [
    { title: 'BEM — Methodology', url: 'https://getbem.com/' },
  ],
  practicalUseCases: [
    'Marketing sites where HTML class names must match design system documentation.',
    'CMS templates where editors apply modifier classes via dropdown.',
  ],
}

export default content
