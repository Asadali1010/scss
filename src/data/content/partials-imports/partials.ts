import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Partials are SCSS files prefixed with an underscore (_variables.scss) that are not compiled to standalone CSS. They are meant to be imported into entry files.',
    'The underscore tells Sass this file is a fragment; @use or @import pulls its contents into the compiling file.',
    'Organize partials by concern: _tokens.scss, _mixins.scss, _buttons.scss—each with a single responsibility.',
  ],
  examples: [
    {
      title: 'Partial file structure',
      code: `// _variables.scss
$primary: #c65309;
$space-md: 1rem;

// _buttons.scss
@use 'variables' as vars;

.btn {
  background: vars.$primary;
  padding: vars.$space-md;
}

// main.scss (entry)
@use 'buttons';`,
    },
  ],
  demonstrations: [
    'Only main.scss produces main.css—_variables.scss and _buttons.scss compile as part of the entry, not as separate CSS files.',
  ],
  bestPractices: [
    'One partial per component or layer; avoid mega-files exceeding a few hundred lines.',
    'Never link partials directly in HTML—always compile through an entry file.',
  ],
  commonMistakes: [
    'Forgetting the underscore and compiling every file separately, producing duplicate CSS.',
    'Circular @use dependencies between partials (A uses B, B uses A).',
  ],
  references: [
    { title: 'Sass — Partial Files', url: 'https://sass-lang.com/documentation/at-rules/use/#partials' },
  ],
  practicalUseCases: [
    'Splitting a 2000-line stylesheet into tokens, layout, and component partials.',
    'Sharing variables across button, form, and navigation partials via a tokens module.',
  ],
}

export default content
