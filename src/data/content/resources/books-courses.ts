import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    "Books like 'Sass for Web Designers' (Dan Cederholm) cover fundamentals; look for editions updated for the module system.",
    'Frontend Masters and egghead.io offer video courses on Sass architecture and design systems.',
    'Official Sass documentation remains the best reference for at-rule syntax and breaking changes—books supplement, not replace it.',
  ],
  examples: [
    {
      title: 'Learning path suggestion',
      code: '1. Sass official docs — @use and @forward\n2. Sass Guidelines — architecture chapter\n3. Every Layout — layout patterns\n4. Refactor one personal project from CSS to SCSS modules',
    },
  ],
  demonstrations: [
    'After a fundamentals course, migrate a portfolio site stylesheet to SCSS modules as a capstone project.',
  ],
  bestPractices: [
    "Pair reading with hands-on compilation—type snippets locally, don't just highlight PDFs.",
    'Focus courses on dart-sass and modern module syntax.',
  ],
  commonMistakes: [
    'Buying LibSass-era books without checking for a revised edition.',
    'Skipping fundamentals and jumping to design-system architecture.',
  ],
  references: [
    { title: 'Sass Documentation', url: 'https://sass-lang.com/documentation/' },
    { title: 'Every Layout', url: 'https://every-layout.dev/' },
  ],
  practicalUseCases: [
    'Team lunch-and-learn series using official docs + internal codebase walkthrough.',
    'Self-study plan before a frontend role requiring SCSS proficiency.',
  ],
}

export default content
