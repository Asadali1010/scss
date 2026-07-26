import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'With @import, load order determined variable values and which mixins were available—reordering imports changed behavior silently.',
    'Settings must load before components that consume them; utilities must load last to override. Violating order causes undefined variables or wrong cascade.',
    '@use makes dependencies explicit per file, but your main entry still controls CSS output order—components before utilities.',
  ],
  examples: [
    {
      title: 'Correct load order in main.scss',
      code: "@use 'settings';\n@use 'tools';\n@use 'generic';\n@use 'elements';\n@use 'components';\n@use 'utilities'; // last for overrides",
    },
  ],
  demonstrations: [
    'Moving utilities before components causes margin utilities to lose against component padding rules with equal specificity.',
  ],
  bestPractices: [
    'Number partial folders (01-settings) to encode order in file explorers.',
    'Document required @use order in main entry comments.',
  ],
  commonMistakes: [
    'Circular @import chains (A imports B, B imports A) causing stack overflow or missing members.',
    'Importing the same partial in component files and main, duplicating CSS output.',
  ],
  references: [
    { title: 'Sass — @use', url: 'https://sass-lang.com/documentation/at-rules/use/' },
  ],
  practicalUseCases: [
    'Fixing Bootstrap override issues by loading custom utilities after Bootstrap imports.',
    'CI checks that verify main.scss @use order matches architecture docs.',
  ],
}

export default content
