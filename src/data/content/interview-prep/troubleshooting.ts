import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Troubleshooting scenarios test your ability to diagnose undefined variable errors, circular imports, specificity overrides, and bloated compiled CSS.',
    "Common issues: 'Undefined variable' after @use migration (missing namespace), duplicate CSS from @import, mixin not found (forgot @use).",
    'Walk through a systematic debug process: read the error line, trace @use chain, inspect compiled CSS in DevTools, check load order.',
  ],
  examples: [
    {
      title: 'Fixing undefined variable after @use',
      code: "// Error: Undefined variable $primary\n// Fix: add namespace\n@use 'variables' as vars;\n.button { color: vars.$primary; }",
    },
  ],
  demonstrations: [
    "Given 'Selector specificity too high', propose flattening nested selectors or replacing @extend with mixins—explain the compiled output difference.",
  ],
  bestPractices: [
    'Enable source maps in development for line-accurate debugging.',
    'Use sass --verbose or build logs to identify duplicate module loads.',
  ],
  commonMistakes: [
    'Fixing symptoms with !important instead of tracing root cause in load order or nesting.',
    'Reverting entire @use migration instead of fixing namespace references file by file.',
  ],
  references: [
    { title: 'Sass — Breaking Changes', url: 'https://sass-lang.com/documentation/breaking-changes/' },
  ],
  practicalUseCases: [
    'On-call frontend fixes when a deploy breaks styles after a Sass upgrade.',
    'Mentoring juniors through their first @use migration compile errors.',
  ],
}

export default content
