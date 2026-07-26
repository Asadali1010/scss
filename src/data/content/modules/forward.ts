import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    "@forward makes a module's members available to downstream consumers without loading them into the current file's namespace.",
    'Use @forward to build a public API barrel file—consumers @use one entry point and get variables, mixins, and functions from multiple internal partials.',
    'You can control visibility with show and hide, and add a prefix to forwarded members to avoid collisions.',
  ],
  examples: [
    {
      title: 'Barrel file with @forward',
      code: "// _index.scss\n@forward 'tokens/colors';\n@forward 'tokens/spacing';\n@forward 'tools/mixins';\n\n// consumer.scss\n@use 'index' as ds;\n\n.card {\n  padding: ds.$space-md;\n}",
    },
  ],
  demonstrations: [
    'A design-system package exposes _index.scss with @forward rules; app teams @use the package once instead of knowing internal folder structure.',
  ],
  bestPractices: [
    'Forward only the public API—keep implementation partials private.',
    'Use @forward ... show $token, mixin-name when you want a minimal surface area.',
  ],
  commonMistakes: [
    '@forwarding everything including internal helper functions that consumers should not call.',
    'Confusing @forward with @use: @forward does not make members available in the forwarding file unless you also @use them.',
  ],
  references: [
    { title: 'Sass — @forward', url: 'https://sass-lang.com/documentation/at-rules/forward/' },
  ],
  practicalUseCases: [
    'Publishing an npm package of SCSS tokens with a single entry partial.',
    'Re-exporting vendor mixins through your tools layer so apps never import vendors directly.',
  ],
}

export default content
