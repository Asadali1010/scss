import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'File organization determines how quickly developers find styles and how safely they can change them. Common patterns include 7-1, ITCSS layers, and feature folders.',
    'A typical structure: abstracts/ (tokens, mixins), base/ (reset, typography), components/, layout/, pages/, and a single main.scss entry.',
    'Keep import order explicit: settings before tools before components before utilities.',
  ],
  examples: [
    {
      title: '7-1 inspired folder layout',
      code: `// main.scss
@use 'abstracts/variables';
@use 'abstracts/mixins';
@use 'base/reset';
@use 'base/typography';
@use 'components/button';
@use 'components/card';
@use 'layout/header';
@use 'layout/grid';
@use 'pages/home';
@use 'utilities/spacing';`,
    },
  ],
  demonstrations: [
    'Add a new component by creating components/_alert.scss and one @use line in main.scss—no other files need reordering if layers stay consistent.',
  ],
  bestPractices: [
    'Co-locate component SCSS with React/Vue components only when the team commits to that pattern everywhere.',
    'Prefix partial folders with numbers (01-abstracts) if load order is critical and tooling allows.',
  ],
  commonMistakes: [
    'Dumping all styles in components/ without separating tokens and tools.',
    'Creating pages/ partials that import half the component library, bloating page-specific bundles.',
  ],
  references: [
    { title: 'Sass Guidelines — Architecture', url: 'https://sass-guidelin.es/#architecture' },
    { title: 'ITCSS — Inverted Triangle CSS', url: 'https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/' },
  ],
  practicalUseCases: [
    'Onboarding docs that map each folder to a layer in your architecture.',
    'Splitting a monolith SCSS repo into publishable packages (tokens, components).',
  ],
}

export default content
