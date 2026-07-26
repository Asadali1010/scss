import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    "By default, @use assigns a namespace equal to the module's filename (without underscore or extension). Access members as namespace.$var or @include namespace.mixin().",
    "Use 'as alias' for shorter names or 'as *' to load without a namespace—use sparingly to avoid collisions.",
    'When the same name exists in two modules, namespaces disambiguate: colors.$primary vs theme.$primary.',
  ],
  examples: [
    {
      title: 'Custom namespace alias',
      code: "@use 'design-tokens/colors' as c;\n@use 'design-tokens/spacing' as s;\n\n.panel {\n  color: c.$text;\n  padding: s.$lg;\n}",
    },
  ],
  demonstrations: [
    'Renaming a module file from _helpers.scss to _utils.scss changes the default namespace from helpers to utils—update references or set an explicit as alias.',
  ],
  bestPractices: [
    "Prefer explicit namespaces over 'as *' in large codebases.",
    'Choose short but meaningful aliases (tokens, bp, type) when default names are long.',
  ],
  commonMistakes: [
    "Using 'as *' in multiple modules that define the same $primary variable, causing compile errors.",
    'Assuming @import-style global access still works after switching to @use.',
  ],
  references: [
    { title: 'Sass — @use configuration', url: 'https://sass-lang.com/documentation/at-rules/use/#configuration' },
  ],
  practicalUseCases: [
    'Importing both sass:color and a local colors module without function name clashes.',
    'Team style guides that mandate namespace prefixes for third-party modules.',
  ],
}

export default content
