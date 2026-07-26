import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    '@use loads a Sass module once per compilation unit and makes its members available through a namespace, replacing the global pollution of @import.',
    'Every stylesheet that needs shared variables, mixins, or functions should @use the module at the top. Members are accessed as namespace.$variable or @include namespace.mixin().',
    'Built-in Sass modules like sass:math and sass:color must also be loaded with @use before their functions are available.',
  ],
  examples: [
    {
      title: 'Basic @use with namespace',
      code: "// _colors.scss\n$primary: #c65309;\n\n// main.scss\n@use 'colors';\n\n.button {\n  background: colors.$primary;\n}",
    },
  ],
  demonstrations: [
    "If two partials both @use 'colors', Sass loads the module only once—unlike @import which could duplicate CSS output.",
  ],
  bestPractices: [
    'Place @use rules before any other rules (except @forward) at the top of each file.',
    "Use 'as *' only when you intentionally want un-namespaced access and the module is small.",
  ],
  commonMistakes: [
    'Using @import and @use in the same project without understanding load-order differences.',
    'Forgetting that variables from @use are not global—other files must @use the module too.',
  ],
  references: [
    { title: 'Sass — @use', url: 'https://sass-lang.com/documentation/at-rules/use/' },
  ],
  practicalUseCases: [
    'Bootstrapping a new project with a tokens module consumed by every component partial.',
    'Sharing a breakpoints module across layout and component files without name collisions.',
  ],
}

export default content
