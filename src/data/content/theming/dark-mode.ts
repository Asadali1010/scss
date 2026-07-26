import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    "Dark mode swaps semantic color tokens when a .dark class or [data-theme='dark'] attribute is present on html or body.",
    'Generate both light and dark token maps in SCSS, output as CSS custom properties, and toggle by reassigning variables on the root element.',
    'Respect prefers-color-scheme for system default, with optional user override stored in localStorage.',
  ],
  examples: [
    {
      title: 'Dark mode token override',
      code: ':root {\n  --bg: #f8f7f4;\n  --text: #1a1814;\n}\n\n.dark {\n  --bg: #121110;\n  --text: #e8e4dc;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}',
    },
  ],
  demonstrations: [
    'Toggling .dark on document.documentElement instantly recolors all components using var(--bg) without recompiling SCSS.',
  ],
  bestPractices: [
    'Test contrast ratios in both themes against WCAG AA.',
    'Avoid pure #000 backgrounds—use dark grays to reduce halation on OLED screens.',
  ],
  commonMistakes: [
    'Hard-coding light colors in SCSS variables with no dark counterpart.',
    'Forgetting to theme images, shadows, and borders—not just text and backgrounds.',
  ],
  references: [
    { title: 'MDN — prefers-color-scheme', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme' },
  ],
  practicalUseCases: [
    'Documentation sites like this one with user-controlled light/dark toggle.',
    'Developer tools and IDEs where users expect theme persistence.',
  ],
}

export default content
