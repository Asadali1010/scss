import type { QuizQuestion } from '../types/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'scss-variables',
    title: 'Define and use a variable',
    prompt:
      'Create a SCSS variable `$brand-color` set to `#c65309`, then use it for the `color` property on `.cta`.',
    starterCode: `.cta {
  // Define $brand-color and apply it here
}
`,
    solutionPatterns: [
      '\\$brand-color\\s*:\\s*#c65309',
      'color:\\s*\\$brand-color',
    ],
    hint: 'Declare `$brand-color: #c65309;` before the rule, then reference it with `color: $brand-color;`.',
  },
  {
    id: 'scss-nesting',
    title: 'Nest a hover state',
    prompt:
      'Inside `.nav-link`, nest an `&:hover` rule that sets `color` to `#a34407`.',
    starterCode: `.nav-link {
  color: #c65309;
  text-decoration: none;
  // Add a nested hover state
}
`,
    solutionPatterns: [
      '&\\s*:hover\\s*\\{',
      'color:\\s*#a34407',
    ],
    hint: 'Use the parent selector `&` to target the same element on hover: `&:hover { color: #a34407; }`.',
  },
  {
    id: 'scss-mixin',
    title: 'Create a flex-center mixin',
    prompt:
      'Define a `@mixin flex-center` with `display: flex`, `align-items: center`, and `justify-content: center`. Include it inside `.toolbar`.',
    starterCode: `// Define the flex-center mixin

.toolbar {
  // Include flex-center here
}
`,
    solutionPatterns: [
      '@mixin\\s+flex-center',
      'display:\\s*flex',
      'align-items:\\s*center',
      'justify-content:\\s*center',
      '@include\\s+flex-center',
    ],
    hint: 'Use `@mixin flex-center { ... }` and call it with `@include flex-center;` inside `.toolbar`.',
  },
  {
    id: 'scss-map',
    title: 'Read a value from a map',
    prompt:
      'Given the `$colors` map below, set `.badge` background to the `accent` entry using `map-get`.',
    starterCode: `$colors: (
  accent: #c65309,
  surface: #f8f7f4,
);

.badge {
  // Use map-get to read the accent color
}
`,
    solutionPatterns: [
      'background(-color)?:\\s*map-get\\(\\s*\\$colors\\s*,\\s*accent\\s*\\)',
    ],
    hint: 'Call `map-get($colors, accent)` for the background color.',
  },
]
