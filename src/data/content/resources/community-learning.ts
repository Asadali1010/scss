import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'The Sass community maintains official docs, GitHub discussions, and Stack Overflow tags. Follow @SassCSS for release announcements.',
    'Sass Guidelines (sass-guidelin.es) is a community style guide widely referenced in code reviews.',
    'Frontend Slack/Discord communities often have #css or #sass channels for troubleshooting migration issues.',
  ],
  examples: [
    {
      title: 'Useful community links',
      code: '// Official\nhttps://sass-lang.com/\nhttps://github.com/sass/dart-sass\n\n// Style guide\nhttps://sass-guidelin.es/\n\n// Playground\nhttps://sass-lang.com/playground/',
    },
  ],
  demonstrations: [
    'The Sass playground compiles snippets instantly—paste mixin experiments before adding to your repo.',
  ],
  bestPractices: [
    'Verify blog post dates; pre-2020 articles often teach deprecated @import patterns.',
    'Contribute fixes to docs via GitHub PRs when you find errors.',
  ],
  commonMistakes: [
    'Following Bootstrap 3-era Sass advice for Bootstrap 5+ which uses @use internally.',
    'Trusting codepen examples that use LibSass-specific behavior.',
  ],
  references: [
    { title: 'Sass GitHub', url: 'https://github.com/sass/dart-sass' },
    { title: 'Sass Guidelines', url: 'https://sass-guidelin.es/' },
  ],
  practicalUseCases: [
    'Finding answers to sass:math migration errors on Stack Overflow.',
    'Reporting compiler bugs with minimal reproduction repos.',
  ],
}

export default content
