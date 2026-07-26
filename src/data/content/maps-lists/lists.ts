import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Sass lists are comma- or space-separated series of values enclosed in parentheses. They hold fonts, shadows, breakpoints, or any homogeneous collection.',
    'Lists are indexed from 1 (not 0). Access items with nth($list, $index) and get length with length($list).',
    'Use list.append() and list.join() from sass:list for immutable list transformations.',
  ],
  examples: [
    {
      title: 'Font stack and shadow lists',
      code: `@use 'sass:list';

$font-stack: 'DM Sans', system-ui, sans-serif;
$shadows: (
  0 1px 2px rgba(0, 0, 0, 0.06),
  0 4px 12px rgba(0, 0, 0, 0.08),
);

body {
  font-family: $font-stack;
  box-shadow: list.nth($shadows, 2);
}`,
    },
  ],
  demonstrations: [
    'Call list.nth($font-stack, 1) and confirm it returns DM Sans—the first index in Sass lists is 1.',
  ],
  bestPractices: [
    '@use sass:list for append, nth, and join instead of deprecated global functions.',
    'Keep list items homogeneous (all lengths, all colors) for predictable iteration.',
  ],
  commonMistakes: [
    'Using zero-based indexing from JavaScript habit—nth($list, 0) is invalid.',
    'Mixing comma and space separators inconsistently, creating nested lists accidentally.',
  ],
  references: [
    { title: 'Sass — Lists', url: 'https://sass-lang.com/documentation/values/lists/' },
    { title: 'Sass — sass:list', url: 'https://sass-lang.com/documentation/modules/list/' },
  ],
  practicalUseCases: [
    'Font family fallback stacks as a single list variable.',
    'Animation delay sequences iterated with @each.',
  ],
}

export default content
