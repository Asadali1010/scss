import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Content blocks let mixins accept a @content block from the caller, injected where @content appears inside the mixin body.',
    'This pattern powers responsive wrappers, icon slots, and theme scopes—callers pass custom rules that the mixin wraps with shared logic.',
    'Declare a mixin with no required body by making @content optional, or require it by placing @content without a fallback.',
  ],
  examples: [
    {
      title: 'Responsive wrapper with @content',
      code: `@mixin respond-above($width) {
  @media (min-width: $width) {
    @content;
  }
}

.card-grid {
  display: grid;
  gap: 1rem;

  @include respond-above(768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    },
  ],
  demonstrations: [
    'Add a second @include respond-above block inside .sidebar—each injects its own rules inside the same media query pattern.',
  ],
  bestPractices: [
    'Use @content for wrapper patterns (media queries, themes); use arguments for simple value substitution.',
    'Name mixins that require @content clearly (with-breakpoint, inside-theme).',
  ],
  commonMistakes: [
    'Including @content multiple times unintentionally, duplicating caller styles.',
    'Using @content when a simple mixin argument would be clearer and easier to test.',
  ],
  references: [
    { title: 'Sass — Content Blocks', url: 'https://sass-lang.com/documentation/at-rules/mixin/#content-blocks' },
  ],
  practicalUseCases: [
    'Breakpoint mixins that wrap arbitrary component rules.',
    'Print stylesheet mixin that applies display:none overrides via @content.',
  ],
}

export default content
