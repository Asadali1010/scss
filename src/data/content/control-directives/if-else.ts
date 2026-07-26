import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@if and @else evaluate expressions at compile time and emit CSS only from the matching branch. They power conditional mixins, variant generators, and feature flags.',
    'Combine @if with @else if for multiple branches. The first true condition wins; an optional @else catches remaining cases.',
    'Conditions can use comparisons, logical operators, and built-in functions like unitless() or map-has-key().',
  ],
  examples: [
    {
      title: 'Conditional theme variant mixin',
      code: `@mixin theme-surface($mode) {
  @if $mode == light {
    background: #f8f7f4;
    color: #1a1814;
  } @else if $mode == dark {
    background: #1a1814;
    color: #f8f7f4;
  } @else {
    @error 'Unknown theme mode: #{$mode}';
  }
}

.panel-light { @include theme-surface(light); }
.panel-dark { @include theme-surface(dark); }`,
    },
  ],
  demonstrations: [
    'Pass an invalid $mode and Sass fails at compile time with your @error message—bugs surface before deploy, not in the browser.',
  ],
  bestPractices: [
    'Use @error for invalid mixin arguments instead of silently falling through.',
    'Keep @if branches small; extract repeated blocks into mixins.',
  ],
  commonMistakes: [
    'Expecting @if to work like runtime JavaScript—only compile-time values are available.',
    'Deeply nesting @if inside @if, making mixin logic hard to follow.',
  ],
  references: [
    { title: 'Sass — @if', url: 'https://sass-lang.com/documentation/at-rules/control/if/' },
  ],
  practicalUseCases: [
    'Directional mixins that emit margin-left or margin-right based on $rtl flag.',
    'Density variants (compact vs comfortable) selected at build time.',
  ],
}

export default content
