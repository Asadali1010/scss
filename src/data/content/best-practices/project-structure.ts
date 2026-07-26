import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'A scalable SCSS project separates concerns into layers: settings, tools, generic, elements, objects, components, utilities, and vendors.',
    "The 7-1 pattern (seven partial folders + one main entry) is a common starting point; adapt folder names to your team's vocabulary.",
    'Each partial should have a single responsibility—one file for buttons, one for form controls, one for grid tools.',
  ],
  examples: [
    {
      title: 'Main entry composing layers',
      code: "// main.scss\n@use 'settings/colors';\n@use 'settings/typography';\n@use 'tools/breakpoints';\n@use 'generic/reset';\n@use 'elements/headings';\n@use 'components/button';\n@use 'utilities/spacing';",
    },
  ],
  demonstrations: [
    'A new developer finds button styles in components/_button.scss within seconds because the folder structure matches the architecture docs.',
  ],
  bestPractices: [
    'Co-locate component SCSS with component source when using CSS modules or scoped frameworks.',
    'Keep vendor overrides in a dedicated vendors/ folder, not scattered in components.',
  ],
  commonMistakes: [
    "One styles.scss file with 3000 lines because 'we'll split it later'.",
    'Mirroring the React folder tree exactly in SCSS, creating duplicate token files per feature.',
  ],
  references: [
    { title: 'Sass Guidelines — Architecture', url: 'https://sass-guidelin.es/#architecture' },
  ],
  practicalUseCases: [
    'Monorepo with shared tokens package and app-specific component partials.',
    'Legacy CSS migration where you add one SCSS layer per sprint.',
  ],
}

export default content
