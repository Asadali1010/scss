import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'The !default flag marks a variable assignment as a default value. If the variable is already defined before this line runs, the assignment is skipped.',
    'Library and framework authors use !default so consuming projects can override tokens before importing the library partial.',
    'Combine !default with @use load configuration to build themeable component packages.',
  ],
  examples: [
    {
      title: 'Overridable defaults in a library partial',
      code: `// _button-settings.scss (library)
$btn-padding: 0.75rem 1.25rem !default;
$btn-radius: 0.375rem !default;
$btn-bg: #c65309 !default;

// main.scss (consumer — define BEFORE @use)
$btn-bg: #2563eb;
@use 'button-settings';

.button {
  padding: button-settings.$btn-padding;
  background: button-settings.$btn-bg;
}`,
    },
  ],
  demonstrations: [
    'Set $btn-bg to a custom color before @use, recompile, and confirm buttons use your brand blue instead of the library orange default.',
  ],
  bestPractices: [
    'Mark every overridable token in shared libraries with !default.',
    'Document which variables consumers should set before importing your module.',
  ],
  commonMistakes: [
    'Assigning !default after the variable was already set, expecting it to reset the value.',
    'Using !default on variables that should never be overridden, hiding intentional configuration.',
  ],
  references: [
    { title: 'Sass — Default Values', url: 'https://sass-lang.com/documentation/variables/#default-values' },
    { title: 'Sass — Configuring Modules', url: 'https://sass-lang.com/documentation/at-rules/use/#configuration' },
  ],
  practicalUseCases: [
    'Publishing a button component partial that ships sensible defaults but accepts brand overrides.',
    'Building a design-system package where each product sets token maps before @use.',
  ],
}

export default content
