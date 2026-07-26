import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Variables have block scope in Sass. A variable defined inside a selector, mixin, or function is local to that block and shadows outer definitions with the same name.',
    'The !global flag promotes a local assignment to the global scope, but use it sparingly—it makes data flow harder to trace.',
    'With the module system (@use), variables are scoped to the file that defines them unless explicitly forwarded or configured.',
  ],
  examples: [
    {
      title: 'Local scope inside a mixin',
      code: `$padding: 1rem;

@mixin card($padding: null) {
  $padding: if($padding, $padding, 1.5rem);
  padding: $padding;
  border-radius: 0.5rem;
}

.sidebar { @include card(0.75rem); }
.content { @include card; }

// $padding outside the mixin remains 1rem`,
    },
  ],
  demonstrations: [
    'Pass different padding values to the card mixin and verify the outer $padding variable is unchanged after compilation.',
  ],
  bestPractices: [
    'Prefer mixin arguments over !global for passing values into nested scopes.',
    'Limit variable shadowing—rename locals when the outer name must stay visible.',
  ],
  commonMistakes: [
    'Assuming a variable set inside .nav {} is available in .footer {} without defining it at a higher scope.',
    'Overusing !global to fix scope errors instead of restructuring partials.',
  ],
  references: [
    { title: 'Sass — Variable Scope', url: 'https://sass-lang.com/documentation/variables/#scope' },
  ],
  practicalUseCases: [
    'Loop variables inside @each that should not leak into sibling rules.',
    'Mixin-local temporary values for computed dimensions.',
  ],
}

export default content
