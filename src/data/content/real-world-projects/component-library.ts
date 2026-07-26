import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Building a component library in SCSS means shipping tokens, mixins, and component skins as versioned packages with clear public API boundaries.',
    'The working example lives at `examples/component-library/` — entry point `scss/index.scss` forwards config and layout modules, then `@use`s each component partial to emit BEM classes.',
    'Each component partial is self-contained: @use tokens and tools, emit BEM classes, avoid global element selectors.',
  ],
  examples: [
    {
      title: 'Library entry (examples/component-library/scss/index.scss)',
      code: `@forward 'config';
@forward 'layout/stack-cluster' show stack, cluster;

@use 'layout/stack-cluster';
@use 'components/button';
@use 'components/card';
@use 'components/form';
@use 'components/navigation';
@use 'components/modal';`,
    },
    {
      title: 'Self-contained button (examples/component-library/scss/components/_button.scss)',
      code: `@use 'sass:map';
@use '../../../shared/scss/abstracts/tokens' as tokens;

.btn {
  --btn-bg: var(--color-accent);
  padding: map.get(tokens.$spacing, 2) map.get(tokens.$spacing, 4);
  background-color: var(--btn-bg);

  &--ghost {
    --btn-bg: transparent;
    border: 1px solid var(--color-accent);
  }
}`,
    },
  ],
  demonstrations: [
    'Compile `sass examples/component-library/scss/index.scss examples/component-library/dist/component-library.min.css --style=compressed` — each partial in `examples/component-library/scss/components/` emits isolated BEM output.',
    'Shared foundation tokens come from `examples/shared/scss/abstracts/_tokens.scss`, consumed by component partials without global pollution.',
  ],
  bestPractices: [
    'Provide CSS custom properties on components for consumer theming without recompile.',
    'Test compiled output in isolation—each partial should compile without the full app.',
    'Use `@forward` in `examples/component-library/scss/index.scss` to expose a clean public API.',
  ],
  commonMistakes: [
    'Leaking global styles (a { color: ... }) that break consumer app links.',
    'Tight coupling to a specific React/Vue structure in class names.',
    'Importing the full library when a consumer only needs one forwarded module.',
  ],
  references: [
    { title: 'Sass — @forward', url: 'https://sass-lang.com/documentation/at-rules/forward/' },
    { title: 'Component library example', url: 'https://github.com/Asadali1010/scss/tree/main/examples/component-library' },
  ],
  practicalUseCases: [
    'npm package @company/ui-scss consumed by three product teams — modeled by `examples/component-library/scss/_config.scss`.',
    'Internal Storybook with live SCSS source for each component story.',
    'Pairing `examples/component-library/` with `examples/shared/scss/main.scss` for token-driven foundation styles.',
  ],
}

export default content
