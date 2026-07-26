import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@extend lets one selector inherit the rules of another by grouping them in the compiled CSS. Sass merges selectors that share the same declaration block.',
    'Extend works on class selectors, placeholders, and compound selectors—but generates unpredictable output when overused.',
    'Compiled CSS may reorder selectors for efficiency, which can affect cascade in edge cases.',
  ],
  examples: [
    {
      title: 'Basic @extend usage',
      code: `.message {
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
}

.message-info {
  @extend .message;
  background: #eff6ff;
  border-color: #2563eb;
}

.message-error {
  @extend .message;
  background: #fef2f2;
  border-color: #dc2626;
}`,
    },
  ],
  demonstrations: [
    'Inspect compiled CSS: .message, .message-info, and .message-error may share the base padding rule in one comma-separated selector group.',
  ],
  bestPractices: [
    'Extend placeholder selectors (%message) rather than concrete classes to avoid unintended inheritance.',
    'Use mixins instead of extend when you need guaranteed output structure.',
  ],
  commonMistakes: [
    'Extending a class nested deep in DOM-specific selectors, pulling unrelated rules into the group.',
    'Using @extend across media queries, which produces invalid or bloated CSS in some cases.',
  ],
  references: [
    { title: 'Sass — @extend', url: 'https://sass-lang.com/documentation/at-rules/extend/' },
  ],
  practicalUseCases: [
    'Utility classes like .visually-hidden extended by component-specific screen-reader text.',
    'Shared %clearfix placeholder extended by float-based legacy layouts.',
  ],
}

export default content
