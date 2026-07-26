import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    "Module system quick reference: @use loads into namespace; @forward re-exports; 'as *' removes namespace; 'with' configures variables.",
    'One file loaded once per compilation; @use must come before other rules except @forward.',
    'Built-in modules: sass:math, sass:color, sass:string, sass:list, sass:map, sass:selector, sass:meta.',
  ],
  examples: [
    {
      title: 'Module syntax summary',
      code: "@use 'tokens';\n@use 'tokens' as t;\n@use 'tokens' as *;\n@forward 'tokens';\n@use 'config' with ($theme: dark);",
    },
  ],
  demonstrations: [
    'During @import migration, compare each old @import line to the equivalent @use + namespace access pattern on this page.',
  ],
  bestPractices: [
    "Default to namespaced @use; document any file using 'as *'.",
    'Create one _index.scss per folder with @forward for clean imports.',
  ],
  commonMistakes: [
    '@forward without @use when the forwarding file also needs the members locally.',
    'Expecting @use to deduplicate CSS rules—only @import duplication is fixed; CSS output depends on what rules each file emits.',
  ],
  references: [
    { title: 'Sass — @use', url: 'https://sass-lang.com/documentation/at-rules/use/' },
    { title: 'Sass — @forward', url: 'https://sass-lang.com/documentation/at-rules/forward/' },
  ],
  practicalUseCases: [
    'Printed onboarding handout for teams migrating from @import.',
    "PR checklist item: 'uses @use, no new @import statements'.",
  ],
}

export default content
