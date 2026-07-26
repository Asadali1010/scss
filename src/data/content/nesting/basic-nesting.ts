import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Nesting lets you write CSS selectors inside other selectors, mirroring HTML hierarchy. Sass flattens nested rules into compound selectors at compile time.',
    'Basic nesting is ideal for pseudo-classes, pseudo-elements, and child elements that always belong to a parent component.',
    'Keep nesting shallow—each level adds specificity and ties selectors to HTML structure.',
  ],
  examples: [
    {
      title: 'Component with nested states and children',
      code: `.card {
  padding: 1rem;
  border-radius: 0.5rem;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #5c574f;
  }
}`,
    },
  ],
  demonstrations: [
    'The nested rules compile to .card h2 and .card p—inspect the CSS output to see how Sass flattened the hierarchy.',
  ],
  bestPractices: [
    'Nest only when the child selector is meaningless outside the parent context.',
    'Limit nesting to three levels; flatten deeper structures with BEM-style class names.',
  ],
  commonMistakes: [
    'Nesting .sidebar inside .page inside .layout when a flat .sidebar class would suffice.',
    'Duplicating the parent selector manually instead of using & for pseudo-states.',
  ],
  references: [
    { title: 'Sass — Nesting', url: 'https://sass-lang.com/documentation/style-rules/declarations/' },
    { title: 'Sass Guidelines — Nesting', url: 'https://sass-guidelin.es/#nesting' },
  ],
  practicalUseCases: [
    'Grouping hover and focus styles under a .button block.',
    'Scoping typography rules to article content without affecting global headings.',
  ],
}

export default content
