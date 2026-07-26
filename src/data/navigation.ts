export interface NavItem {
  title: string
  slug: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    slug: 'getting-started',
    children: [
      { title: 'Introduction to SCSS', slug: 'introduction' },
      { title: 'Installation', slug: 'installation' },
      { title: 'Your First SCSS File', slug: 'first-file' },
      { title: 'Compilation & Output', slug: 'compilation' },
    ],
  },
  {
    title: 'Variables',
    slug: 'variables',
    children: [
      { title: 'Defining Variables', slug: 'defining-variables' },
      { title: 'Default Values', slug: 'default-values' },
      { title: 'Variable Scope', slug: 'scope' },
      { title: 'Global vs Local', slug: 'global-vs-local' },
    ],
  },
  {
    title: 'Nesting',
    slug: 'nesting',
    children: [
      { title: 'Basic Nesting', slug: 'basic-nesting' },
      { title: 'Parent Selector (&)', slug: 'parent-selector' },
      { title: 'Property Nesting', slug: 'property-nesting' },
      { title: 'Nesting Best Practices', slug: 'nesting-best-practices' },
    ],
  },
  {
    title: 'Mixins',
    slug: 'mixins',
    children: [
      { title: 'Defining Mixins', slug: 'defining-mixins' },
      { title: 'Including Mixins', slug: 'including-mixins' },
      { title: 'Arguments & Defaults', slug: 'arguments-defaults' },
      { title: 'Content Blocks', slug: 'content-blocks' },
    ],
  },
  {
    title: 'Functions',
    slug: 'functions',
    children: [
      { title: 'Built-in Functions', slug: 'built-in-functions' },
      { title: 'Custom Functions', slug: 'custom-functions' },
      { title: 'Color Functions', slug: 'color-functions' },
      { title: 'Math Functions', slug: 'math-functions' },
    ],
  },
  {
    title: 'Partials & Imports',
    slug: 'partials-imports',
    children: [
      { title: 'Partials', slug: 'partials' },
      { title: '@import Rules', slug: 'import-rules' },
      { title: 'File Organization', slug: 'file-organization' },
      { title: 'Load Paths', slug: 'load-paths' },
    ],
  },
  {
    title: 'Extend',
    slug: 'extend',
    children: [
      { title: '@extend Basics', slug: 'extend-basics' },
      { title: 'Placeholder Selectors', slug: 'placeholder-selectors' },
      { title: 'Extend vs Mixins', slug: 'extend-vs-mixins' },
      { title: 'Avoiding Extend Pitfalls', slug: 'extend-pitfalls' },
    ],
  },
  {
    title: 'Operators',
    slug: 'operators',
    children: [
      { title: 'Arithmetic Operators', slug: 'arithmetic' },
      { title: 'Comparison Operators', slug: 'comparison' },
      { title: 'Logical Operators', slug: 'logical' },
      { title: 'Unit Handling', slug: 'unit-handling' },
    ],
  },
  {
    title: 'Control Directives',
    slug: 'control-directives',
    children: [
      { title: '@if and @else', slug: 'if-else' },
      { title: '@for Loops', slug: 'for-loops' },
      { title: '@each Loops', slug: 'each-loops' },
      { title: '@while Loops', slug: 'while-loops' },
    ],
  },
  {
    title: 'Maps & Lists',
    slug: 'maps-lists',
    children: [
      { title: 'Lists', slug: 'lists' },
      { title: 'Maps', slug: 'maps' },
      { title: 'Accessing Map Values', slug: 'map-access' },
      { title: 'Iterating Maps & Lists', slug: 'iterating' },
    ],
  },
  {
    title: 'Modules @use/@forward',
    slug: 'modules',
    children: [
      { title: '@use Basics', slug: 'use-basics' },
      { title: '@forward', slug: 'forward' },
      { title: 'Namespacing', slug: 'namespacing' },
      { title: 'Migrating from @import', slug: 'migrating-from-import' },
    ],
  },
  {
    title: 'Best Practices',
    slug: 'best-practices',
    children: [
      { title: 'Project Structure', slug: 'project-structure' },
      { title: 'Naming Conventions', slug: 'naming-conventions' },
      { title: 'Performance Tips', slug: 'performance' },
      { title: 'Maintainability', slug: 'maintainability' },
    ],
  },
  {
    title: 'Migration',
    slug: 'migration',
    children: [
      { title: 'CSS to SCSS', slug: 'css-to-scss' },
      { title: '@import to @use', slug: 'import-to-use' },
      { title: 'Legacy Syntax (Sass)', slug: 'legacy-syntax' },
      { title: 'Tooling Updates', slug: 'tooling-updates' },
    ],
  },
]
