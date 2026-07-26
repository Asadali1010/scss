import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Flexbox utility mixins generate common flex patterns—center, space-between, column stack—without repeating five declarations per component.',
    'Parameterize direction, wrap, gap, and alignment; optionally emit utility classes from a config map with @each.',
    'Flex utilities complement grid: use flex for one-dimensional toolbars and nav bars; grid for two-dimensional page layouts.',
  ],
  examples: [
    {
      title: 'Flex center mixin',
      code: '@mixin flex-center($gap: 0) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @if $gap != 0 { gap: $gap; }\n}\n\n.modal-actions {\n  @include flex-center(0.75rem);\n}',
    },
  ],
  demonstrations: [
    'Toolbar, empty state, and loading spinner share flex-center with different gap values—consistent alignment across the app.',
  ],
  bestPractices: [
    'Prefer gap over margin hacks on flex children for spacing.',
    'Use flex-shrink: 0 on icons and avatars in flex rows to prevent squashing.',
  ],
  commonMistakes: [
    'Using flex for entire page layout when CSS grid would simplify two-dimensional placement.',
    'Over-generating utility classes for every flex combination, bloating CSS output.',
  ],
  references: [
    { title: 'MDN — Flexbox', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout' },
  ],
  practicalUseCases: [
    'Form field rows with label + input + error icon aligned.',
    'Card footers with actions pushed to the end via margin-inline-start: auto.',
  ],
}

export default content
