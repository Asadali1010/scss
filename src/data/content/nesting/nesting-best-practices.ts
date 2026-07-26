import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Nesting is powerful but easy to abuse. The best SCSS reads like intentional CSS architecture, not a mirror of your HTML DOM tree.',
    'Apply the "inception rule": never nest more than three levels deep. Beyond that, extract a new class or partial.',
    'Prefer mixins for repeated declaration blocks and classes for repeated selector patterns—nesting alone does not reduce duplication.',
  ],
  examples: [
    {
      title: 'Refactor deep nesting to flat BEM',
      code: `// Avoid — mirrors DOM too literally
.page {
  .sidebar {
    .nav {
      .item a { color: #5c574f; }
    }
  }
}

// Prefer — flat, reusable classes
.nav__link {
  color: #5c574f;

  &:hover {
    color: #c65309;
  }
}`,
    },
  ],
  demonstrations: [
    'Compare compiled selector specificity: .page .sidebar .nav .item a scores 0-0-5 while .nav__link scores 0-1-0—overrides become trivial with the flat version.',
  ],
  bestPractices: [
    'Nest pseudo-states and direct child elements; flatten cross-component relationships.',
    'Run stylelint with max-nesting-depth in CI to enforce team limits.',
  ],
  commonMistakes: [
    'Nesting because SCSS allows it, not because the CSS model requires it.',
    'Creating "selector inception" that breaks when HTML structure changes slightly.',
  ],
  references: [
    { title: 'Sass Guidelines — Nesting', url: 'https://sass-guidelin.es/#nesting' },
    { title: 'CSS Guidelines — Specificity', url: 'https://cssguidelin.es/#specificity' },
  ],
  practicalUseCases: [
    'Code review checklist item: flag selectors longer than three compounds.',
    'Refactoring legacy SCSS before a design-system migration.',
  ],
}

export default content
