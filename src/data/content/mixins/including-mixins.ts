import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Include a mixin with @include mixin-name. Sass inlines the mixin body at the call site, producing real CSS declarations in the output.',
    'Unlike functions, mixins output CSS rules and declarations—they cannot be used as property values.',
    'Import mixins via @use and call them with a namespace: @include tools.focus-ring or @include focus-ring after @use with as *.',
  ],
  examples: [
    {
      title: 'Including a mixin in multiple selectors',
      code: `@mixin focus-ring($color: #c65309) {
  &:focus-visible {
    outline: 2px solid $color;
    outline-offset: 2px;
  }
}

.btn { @include focus-ring; }
.link { @include focus-ring(#2563eb); }`,
    },
  ],
  demonstrations: [
    'Inspect compiled CSS: both .btn and .link contain full focus-visible blocks generated from one mixin definition.',
  ],
  bestPractices: [
    'Pass overrides as arguments rather than duplicating mixin variants.',
    'Keep @include calls at the top or bottom of a rule block for readability.',
  ],
  commonMistakes: [
    'Calling @include inside another @include expecting inheritance—each inclusion is independent.',
    'Forgetting to @use the module that defines the mixin before calling it.',
  ],
  references: [
    { title: 'Sass — Including Mixins', url: 'https://sass-lang.com/documentation/at-rules/mixin/#including-mixins' },
  ],
  practicalUseCases: [
    'Applying responsive breakpoint wrappers across dozens of components.',
    'Including typography presets in headings, labels, and captions.',
  ],
}

export default content
