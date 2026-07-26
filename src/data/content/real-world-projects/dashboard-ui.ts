import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Dashboard UIs combine dense data tables, filters, charts, and responsive sidebars—SCSS modules help isolate each surface while sharing tokens.',
    'The PulseMetrics example at `examples/dashboard-ui/` follows 7-1 architecture: abstracts hold tokens and mixins; layout covers the shell grid and sidebar; components style KPI cards and data tables; pages hold route-specific rules; themes emit CSS custom properties.',
    'Compile with `sass examples/dashboard-ui/scss/main.scss examples/dashboard-ui/css/main.css --style=compressed` and open `examples/dashboard-ui/index.html`.',
  ],
  examples: [
    {
      title: 'Dashboard shell grid (examples/dashboard-ui/scss/layout/_shell.scss)',
      code: `@use 'sass:map';
@use '../abstracts/variables' as *;
@use '../abstracts/mixins' as *;

.app-shell {
  display: grid;
  min-height: 100vh;

  @include breakpoint-up(lg) {
    grid-template-columns: $sidebar-width 1fr;
    grid-template-areas:
      'sidebar header'
      'sidebar main';
  }
}`,
    },
    {
      title: 'KPI card component (examples/dashboard-ui/scss/components/_kpi-card.scss)',
      code: `.kpi-grid {
  display: grid;
  gap: map.get($spacing, md);

  @include breakpoint-up(xl) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.kpi-card {
  padding: map.get($spacing, lg);
  background-color: map.get($colors, white);
  border-radius: $radius-lg;
}`,
    },
  ],
  demonstrations: [
    'Open `examples/dashboard-ui/index.html` after compiling — the sidebar, KPI row, and data table share spacing tokens from `examples/dashboard-ui/scss/abstracts/_variables.scss`.',
    'Tightening vertical rhythm in the shell updates both KPI cards and the data panel because both `@use` the same abstracts layer.',
  ],
  bestPractices: [
    'Keep chart library overrides in a dedicated vendors partial to avoid polluting component styles.',
    'Use CSS grid for the shell and flex for toolbar groups inside panels.',
    'Emit dashboard theme values as CSS custom properties in `examples/dashboard-ui/scss/themes/_default.scss` for runtime theming.',
  ],
  commonMistakes: [
    'Inlining third-party chart CSS overrides next to every chart instance instead of centralizing vendor patches.',
    'Skipping empty states and loading skeleton styles in the initial SCSS pass.',
    'Placing shell layout rules inside page partials instead of the layout layer.',
  ],
  references: [
    { title: 'Sass — @use', url: 'https://sass-lang.com/documentation/at-rules/use/' },
    { title: '7-1 Pattern — examples/dashboard-ui/scss/', url: 'https://sass-guidelin.es/#architecture' },
  ],
  practicalUseCases: [
    'Analytics products with role-based sidebars — see `examples/dashboard-ui/scss/layout/_sidebar.scss`.',
    'Internal admin tools that share a shell but swap module partials per feature team.',
    'KPI dashboards where `examples/dashboard-ui/scss/components/_data-table.scss` handles dense tabular data with responsive overflow.',
  ],
}

export default content
