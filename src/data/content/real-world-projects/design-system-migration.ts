import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Design system migration moves a product from ad-hoc CSS or an old framework to token-driven SCSS components incrementally.',
    'The demo at `examples/design-system-migration/` renders legacy and modern styles side by side — legacy global variables in `scss/legacy/_legacy.scss` vs modular `@use` output in `scss/modern/_modern.scss`.',
    'Run old and new styles in parallel briefly using scoped wrappers or feature flags—never big-bang rewrites in production.',
  ],
  examples: [
    {
      title: 'Legacy global styles (examples/design-system-migration/scss/legacy/_legacy.scss)',
      code: `$legacy-primary: #0066cc;
$legacy-spacing: 12px 24px;

.legacy-btn {
  padding: $legacy-spacing;
  background-color: $legacy-primary;
  font-family: Arial, Helvetica, sans-serif;
}`,
    },
    {
      title: 'Modern token module (examples/design-system-migration/scss/modern/_tokens.scss)',
      code: `@use 'sass:map';

$colors: (
  accent: #0066cc,
  accent-hover: #0052a3,
  text: #1a1814,
);

@function color($name) {
  @return map.get($colors, $name);
}`,
    },
    {
      title: 'Modern component (examples/design-system-migration/scss/modern/_modern.scss)',
      code: `@use 'tokens' as t;

.btn {
  padding: t.space(md) t.space(xl);
  background-color: t.color(accent);

  &:hover {
    background-color: t.color(accent-hover);
  }
}`,
    },
  ],
  demonstrations: [
    'Open `examples/design-system-migration/index.html` after compiling `scss/main.scss` — the left column shows legacy `.legacy-btn` / `.legacy-card` classes; the right column shows token-driven `.btn` / `.card` output.',
    'Both columns share the same visual intent (blue accent, card layout) but the modern side centralizes hex values in `examples/design-system-migration/scss/modern/_tokens.scss`.',
  ],
  bestPractices: [
    'Track migration progress in a spreadsheet: component, status, owner, QA sign-off.',
    'Add visual regression tests (Chromatic, Percy) before refactoring each component.',
    'Keep legacy partials untouched until all HTML templates switch class names.',
  ],
  commonMistakes: [
    'Deleting legacy CSS before all HTML templates switch class names.',
    'Migrating SCSS syntax but not updating design token naming to match Figma.',
    'Replacing `@import` with `@use` without introducing token modules — syntax changes alone do not fix global pollution.',
  ],
  references: [
    { title: 'Sass Migrator', url: 'https://sass-lang.com/documentation/cli/migrator/' },
    { title: 'Migration demo — examples/design-system-migration/', url: 'https://sass-lang.com/documentation/at-rules/use/' },
  ],
  practicalUseCases: [
    'Bootstrap to custom design system migration over six sprints — run `examples/design-system-migration/` as a visual reference.',
    "Post-acquisition unification of two products' styles under one token package.",
    'Teaching teams the difference between global `$legacy-primary` variables and namespaced `t.color(accent)` accessors.',
  ],
}

export default content
