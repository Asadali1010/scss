import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Component library SCSS ships tokens, mixins, and optional base styles that consumers compose—never force global resets on host apps.',
    'Publish a single entry partial via @forward that exposes design tokens and component skins separately.',
    'Document which classes are stable public API vs internal implementation details prefixed with a library namespace.',
  ],
  examples: [
    {
      title: 'Library entry point',
      code: "// @my-ds/scss/index.scss\n@forward 'tokens';\n@forward 'components/button';\n@forward 'components/input';\n\n// Consumer\n@use '@my-ds/scss' as ds;\n@include ds.button-base;",
    },
  ],
  demonstrations: [
    'Consumers import only button and input partials; card styles stay out of their bundle until they @use cards explicitly.',
  ],
  bestPractices: [
    'Version token packages independently from component styles.',
    'Provide CSS custom property fallbacks so consumers can theme without recompiling SCSS.',
  ],
  commonMistakes: [
    'Global element selectors (button { }) in a library that breaks host app typography.',
    'Breaking semver by renaming BEM classes without a migration guide.',
  ],
  references: [
    { title: 'Sass Guidelines — Components', url: 'https://sass-guidelin.es/#components' },
  ],
  practicalUseCases: [
    'Internal design systems consumed by five React micro-frontends.',
    'npm-published UI kit with SCSS source for advanced customization.',
  ],
}

export default content
