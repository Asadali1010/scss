import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Common mixin recipes: clearfix, visually-hidden, truncate, aspect-ratio, focus-ring, and responsive breakpoint wrappers.',
    'Copy recipes into a tools/_mixins.scss partial and @forward from your tools barrel—avoid duplicating snippets from blog posts.',
    'Parameterize with sensible defaults so call sites stay one line.',
  ],
  examples: [
    {
      title: 'Truncate text mixin',
      code: '@mixin truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.table-cell {\n  max-width: 200px;\n  @include truncate;\n}',
    },
  ],
  demonstrations: [
    'Visually-hidden mixin uses clip pattern for screen reader text; focus-ring mixin standardizes outline-offset across buttons and links.',
  ],
  bestPractices: [
    'Test mixins in isolation with a minimal HTML fixture.',
    'Document browser support for unusual properties (line-clamp).',
  ],
  commonMistakes: [
    'Copying mixins that use deprecated syntax or un-namespaced functions.',
    'Over-parameterizing mixins with ten arguments nobody uses.',
  ],
  references: [
    { title: 'Sass — @mixin', url: 'https://sass-lang.com/documentation/at-rules/mixin/' },
  ],
  practicalUseCases: [
    'Bootstrapping tools/_mixins.scss in a new project day one.',
    'Standardizing focus styles for accessibility compliance.',
  ],
}

export default content
