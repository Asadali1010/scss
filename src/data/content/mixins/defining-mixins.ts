import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Mixins are reusable blocks of declarations defined with @mixin and included with @include. They eliminate copy-pasted CSS across components.',
    'Define mixins in tools/ or mixins/ partials and keep them focused on one job—centering, visually-hidden text, or focus rings.',
    'Mixins can accept arguments, provide defaults, and accept content blocks for flexible wrapper patterns.',
  ],
  examples: [
    {
      title: 'Basic flex-center mixin',
      code: `@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-backdrop {
  @include flex-center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}`,
    },
  ],
  demonstrations: [
    'Apply flex-center to both .modal-backdrop and .empty-state—compiled CSS contains the three flex declarations in each rule without hand-copying.',
  ],
  bestPractices: [
    'Name mixins by behavior (flex-center) not appearance (blue-box).',
    'Document required vs optional arguments in a comment above the @mixin block.',
  ],
  commonMistakes: [
    'Creating a mixin for a single declaration that is clearer inline.',
    'Defining mixins inside component partials instead of shared tools files.',
  ],
  references: [
    { title: 'Sass — @mixin', url: 'https://sass-lang.com/documentation/at-rules/mixin/' },
  ],
  practicalUseCases: [
    'Shared focus-visible ring styles across buttons, links, and form controls.',
    'Truncation mixin (overflow, text-overflow, white-space) for card titles.',
  ],
}

export default content
