import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Architecture questions probe how you structure large SCSS codebases: ITCSS vs atomic CSS, module boundaries, token layers, and team workflows.',
    'Be ready to compare @extend vs mixins, explain when to use CSS custom properties alongside SCSS, and describe migration from @import.',
    'Discuss code review practices, linting (stylelint), and how you prevent specificity wars across teams.',
  ],
  examples: [
    {
      title: 'Explaining module public API',
      code: "// tokens/_index.scss — public\n@forward 'colors';\n@forward 'spacing';\n// _helpers.scss — private, not forwarded",
    },
  ],
  demonstrations: [
    "When asked 'how would you share tokens across micro-frontends?', describe an npm package with @forward entry and semver.",
  ],
  bestPractices: [
    'Answer with real project examples and trade-offs, not textbook definitions only.',
    'Mention tooling: Vite, sass-migrator, stylelint-scss.',
  ],
  commonMistakes: [
    'Claiming atomic CSS makes SCSS unnecessary without acknowledging maintainability trade-offs.',
    'Unable to explain specificity implications of nesting and BEM together.',
  ],
  references: [
    { title: 'Sass Guidelines', url: 'https://sass-guidelin.es/' },
  ],
  practicalUseCases: [
    'Senior frontend interviews at companies with mature design systems.',
    'Architecture review panels for stylesheet refactoring proposals.',
  ],
}

export default content
