import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Built-in Sass functions live in modules: sass:color (scale, mix), sass:math (div, percentage), sass:string, sass:list, sass:map, sass:meta.',
    "Load with @use 'sass:color' as color; then call color.scale($base, $lightness: 10%).",
    'Legacy global functions still work with deprecation warnings—migrate to namespaced module functions.',
  ],
  examples: [
    {
      title: 'Common function imports',
      code: "@use 'sass:color';\n@use 'sass:math';\n\n$lighter: color.scale($brand, $lightness: 15%);\n$half: math.div(24px, 2);",
    },
  ],
  demonstrations: [
    'Pin this page when upgrading Sass—search for deprecated un-namespaced darken() and replace with color.adjust().',
  ],
  bestPractices: [
    'Import only the modules you need per file.',
    'Wrap frequent function combos in project-specific helper functions.',
  ],
  commonMistakes: [
    'Using / for division outside calc()—use math.div() in Dart Sass.',
    'Calling map-get on a list or vice versa without type checking.',
  ],
  references: [
    { title: 'Sass — Built-in Modules', url: 'https://sass-lang.com/documentation/modules/' },
  ],
  practicalUseCases: [
    'Quick lookup during code review when a teammate uses adjust-hue vs scale.',
    'Writing stylelint rules that flag deprecated global functions.',
  ],
}

export default content
