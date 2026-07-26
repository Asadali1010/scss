import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'The 7-1 pattern organizes SCSS into seven folders—abstracts, vendors, base, layout, components, pages, themes—plus one main.scss entry file.',
    'Abstracts hold variables, functions, and mixins with no CSS output. Vendors wrap third-party CSS. Base covers resets and element defaults.',
    'This pattern scales to large teams because everyone knows where new styles belong.',
  ],
  examples: [
    {
      title: '7-1 folder structure',
      code: 'scss/\n├── abstracts/   # variables, functions, mixins\n├── vendors/     # third-party\n├── base/        # reset, typography\n├── layout/      # header, grid, footer\n├── components/  # buttons, cards\n├── pages/       # page-specific\n├── themes/      # theme overrides\n└── main.scss',
    },
  ],
  demonstrations: [
    'Adding a new modal component means creating components/_modal.scss and @use-ing it from main.scss—no hunting through a monolith.',
  ],
  bestPractices: [
    'Keep abstracts free of CSS rules—only Sass members.',
    'Limit pages/ folder use; prefer components unless styles are truly page-unique.',
  ],
  commonMistakes: [
    'Duplicating variables in both abstracts and components because @use boundaries were unclear.',
    'Importing all seven folders into every component partial instead of only what it needs.',
  ],
  references: [
    { title: 'Sass — @use', url: 'https://sass-lang.com/documentation/at-rules/use/' },
  ],
  practicalUseCases: [
    'Agency projects handing off SCSS to client internal teams.',
    'Enterprise apps with separate layout and component squads.',
  ],
}

export default content
