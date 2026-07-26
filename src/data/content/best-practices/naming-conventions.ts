import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Consistent naming reduces cognitive load: prefix partials with underscore (_button.scss), use kebab-case for files and classes, and BEM for component modifiers.',
    'Variables: $color-primary, $space-md, $font-size-base. Mixins: verb-noun like center-flex or respond-above. Functions: noun or get-* like color() or spacing().',
    'Avoid abbreviations only your team knows—prefer readable names over cryptic shorthand.',
  ],
  examples: [
    {
      title: 'BEM with SCSS nesting',
      code: '.card {\n  &__header { font-weight: 600; }\n  &__body { padding: 1rem; }\n  &--featured { border: 2px solid $accent; }\n}',
    },
  ],
  demonstrations: [
    'Searching for nav__link in the codebase returns only navigation link styles, not unrelated .link utility classes.',
  ],
  bestPractices: [
    'Document naming rules in a CONTRIBUTING.md or style guide.',
    'Lint class names with stylelint-selector-class-pattern if you enforce BEM.',
  ],
  commonMistakes: [
    'Mixing camelCase files with kebab-case files in the same project.',
    'Using .active, .selected, .open as global classes on unrelated components.',
  ],
  references: [
    { title: 'BEM — Naming convention', url: 'https://getbem.com/naming/' },
  ],
  practicalUseCases: [
    'Design system components with predictable block__element--modifier patterns.',
    'Code review checklists that reject overly generic class names.',
  ],
}

export default content
