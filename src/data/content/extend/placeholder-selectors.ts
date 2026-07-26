import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Placeholder selectors start with % and are never compiled to CSS on their own—they exist only to be @extend-ed.',
    'Because placeholders never appear in output unless extended, they avoid polluting the CSS with unused base classes.',
    'Define placeholders in tools/ partials alongside related mixins for shared silent patterns.',
  ],
  examples: [
    {
      title: 'Placeholder selector pattern',
      code: `%focus-outline {
  outline: 2px solid #c65309;
  outline-offset: 2px;
}

.btn {
  &:focus-visible {
    @extend %focus-outline;
  }
}

.link {
  &:focus-visible {
    @extend %focus-outline;
  }
}`,
    },
  ],
  demonstrations: [
    'Search compiled CSS for %focus-outline—it will not appear. Instead, .btn:focus-visible and .link:focus-visible share the outline declarations.',
  ],
  bestPractices: [
    'Name placeholders with a % prefix and descriptive silent names (%visually-hidden).',
    'Keep placeholders in the same module as components that extend them to limit cross-file extend chains.',
  ],
  commonMistakes: [
    'Using a regular class (.focus-outline) as an extend target, forcing an unused class into production CSS.',
    'Creating one mega-placeholder extended everywhere, making refactors ripple unpredictably.',
  ],
  references: [
    { title: 'Sass — Placeholder Selectors', url: 'https://sass-lang.com/documentation/style-rules/placeholder-selectors/' },
  ],
  practicalUseCases: [
    'Silent clearfix, visually-hidden, and truncation patterns shared across components.',
    'Form control focus styles extended by inputs, selects, and textareas.',
  ],
}

export default content
