import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'The parent selector & references the outer selector being nested. It is essential for pseudo-classes, modifier classes, and compound selectors.',
    'Place & where the parent selector should appear in the compiled output—before a pseudo-class (&:hover), after a prefix (.is-active&), or combined with suffixes (&-large).',
    'BEM-style naming often uses & to append element and modifier suffixes: .block { &__element { } &--modifier { } }.',
  ],
  examples: [
    {
      title: 'Parent selector for states and BEM modifiers',
      code: `.btn {
  background: #c65309;
  color: #fff;

  &:hover {
    background: darken(#c65309, 8%);
  }

  &:focus-visible {
    outline: 2px solid #c65309;
    outline-offset: 2px;
  }

  &--secondary {
    background: transparent;
    color: #c65309;
    border: 1px solid #c65309;
  }
}`,
    },
  ],
  demonstrations: [
    'Compile the example and confirm &:hover becomes .btn:hover and &--secondary becomes .btn--secondary in the output CSS.',
  ],
  bestPractices: [
    'Use & for pseudo-classes and modifiers; avoid chaining & more than twice in one rule.',
    'Prefer explicit BEM suffixes over deep contextual nesting.',
  ],
  commonMistakes: [
    'Writing .btn:hover inside .btn instead of &:hover—works but misses the DRY benefit of &.',
    'Using & at the root without a parent, which produces invalid selectors.',
  ],
  references: [
    { title: 'Sass — Parent Selector', url: 'https://sass-lang.com/documentation/style-rules/parent-selector/' },
  ],
  practicalUseCases: [
    'Generating .nav__link and .nav__link--active from a single .nav block.',
    'Appending responsive suffix classes like .card@md without repeating .card.',
  ],
}

export default content
