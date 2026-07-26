import type { DocContent, DocContentKey } from '../../types/docContent'

import introduction from './getting-started/introduction'
import installation from './getting-started/installation'
import firstFile from './getting-started/first-file'
import compilation from './getting-started/compilation'

import definingVariables from './variables/defining-variables'
import defaultValues from './variables/default-values'
import scope from './variables/scope'
import globalVsLocal from './variables/global-vs-local'

import basicNesting from './nesting/basic-nesting'
import parentSelector from './nesting/parent-selector'
import propertyNesting from './nesting/property-nesting'
import nestingBestPractices from './nesting/nesting-best-practices'

import definingMixins from './mixins/defining-mixins'
import includingMixins from './mixins/including-mixins'
import argumentsDefaults from './mixins/arguments-defaults'
import contentBlocks from './mixins/content-blocks'

import builtInFunctions from './functions/built-in-functions'
import customFunctions from './functions/custom-functions'
import colorFunctions from './functions/color-functions'
import mathFunctions from './functions/math-functions'

import partials from './partials-imports/partials'
import importRules from './partials-imports/import-rules'
import fileOrganization from './partials-imports/file-organization'
import loadPaths from './partials-imports/load-paths'

import extendBasics from './extend/extend-basics'
import placeholderSelectors from './extend/placeholder-selectors'
import extendVsMixins from './extend/extend-vs-mixins'
import extendPitfalls from './extend/extend-pitfalls'

import arithmetic from './operators/arithmetic'
import comparison from './operators/comparison'
import logical from './operators/logical'
import unitHandling from './operators/unit-handling'

import ifElse from './control-directives/if-else'
import forLoops from './control-directives/for-loops'
import eachLoops from './control-directives/each-loops'
import whileLoops from './control-directives/while-loops'

import lists from './maps-lists/lists'
import maps from './maps-lists/maps'
import mapAccess from './maps-lists/map-access'
import iterating from './maps-lists/iterating'

import useBasics from './modules/use-basics'
import forward from './modules/forward'
import namespacing from './modules/namespacing'
import migratingFromImport from './modules/migrating-from-import'

import projectStructure from './best-practices/project-structure'
import namingConventions from './best-practices/naming-conventions'
import performance from './best-practices/performance'
import maintainability from './best-practices/maintainability'

import cssToScss from './migration/css-to-scss'
import importToUse from './migration/import-to-use'
import legacySyntax from './migration/legacy-syntax'
import toolingUpdates from './migration/tooling-updates'

import bemScss from './architecture-patterns/bem-scss'
import sevenOne from './architecture-patterns/seven-one'
import componentLibraries from './architecture-patterns/component-libraries'

import mobileFirst from './responsive-design/mobile-first'
import fluidTypography from './responsive-design/fluid-typography'
import containerQueries from './responsive-design/container-queries'

import darkMode from './theming/dark-mode'
import themeMaps from './theming/theme-maps'
import multiBrand from './theming/multi-brand'

import flexboxUtilities from './layout-systems/flexbox-utilities'
import spacingScale from './layout-systems/spacing-scale'
import stackCluster from './layout-systems/stack-cluster'

import colorTokens from './design-tokens/color-tokens'
import spacingTokens from './design-tokens/spacing-tokens'
import typographyTokens from './design-tokens/typography-tokens'

import globalPollution from './common-mistakes/global-pollution'
import deepExtend from './common-mistakes/deep-extend'
import importOrder from './common-mistakes/import-order'

import marketingSite from './real-world-projects/marketing-site'
import componentLibrary from './real-world-projects/component-library'
import designSystemMigration from './real-world-projects/design-system-migration'

import codingChallenges from './interview-prep/coding-challenges'
import architectureQuestions from './interview-prep/architecture-questions'
import troubleshooting from './interview-prep/troubleshooting'

import functionsReference from './cheatsheets/functions-reference'
import mixinsRecipes from './cheatsheets/mixins-recipes'
import moduleCheatsheet from './cheatsheets/module-cheatsheet'

import toolsCompilers from './resources/tools-compilers'
import communityLearning from './resources/community-learning'
import booksCourses from './resources/books-courses'

function key(sectionSlug: string, pageSlug: string): DocContentKey {
  return `${sectionSlug}/${pageSlug}`
}

const docContentMap: Record<DocContentKey, DocContent> = {
  [key('getting-started', 'introduction')]: introduction,
  [key('getting-started', 'installation')]: installation,
  [key('getting-started', 'first-file')]: firstFile,
  [key('getting-started', 'compilation')]: compilation,

  [key('variables', 'defining-variables')]: definingVariables,
  [key('variables', 'default-values')]: defaultValues,
  [key('variables', 'scope')]: scope,
  [key('variables', 'global-vs-local')]: globalVsLocal,

  [key('nesting', 'basic-nesting')]: basicNesting,
  [key('nesting', 'parent-selector')]: parentSelector,
  [key('nesting', 'property-nesting')]: propertyNesting,
  [key('nesting', 'nesting-best-practices')]: nestingBestPractices,

  [key('mixins', 'defining-mixins')]: definingMixins,
  [key('mixins', 'including-mixins')]: includingMixins,
  [key('mixins', 'arguments-defaults')]: argumentsDefaults,
  [key('mixins', 'content-blocks')]: contentBlocks,

  [key('functions', 'built-in-functions')]: builtInFunctions,
  [key('functions', 'custom-functions')]: customFunctions,
  [key('functions', 'color-functions')]: colorFunctions,
  [key('functions', 'math-functions')]: mathFunctions,

  [key('partials-imports', 'partials')]: partials,
  [key('partials-imports', 'import-rules')]: importRules,
  [key('partials-imports', 'file-organization')]: fileOrganization,
  [key('partials-imports', 'load-paths')]: loadPaths,

  [key('extend', 'extend-basics')]: extendBasics,
  [key('extend', 'placeholder-selectors')]: placeholderSelectors,
  [key('extend', 'extend-vs-mixins')]: extendVsMixins,
  [key('extend', 'extend-pitfalls')]: extendPitfalls,

  [key('operators', 'arithmetic')]: arithmetic,
  [key('operators', 'comparison')]: comparison,
  [key('operators', 'logical')]: logical,
  [key('operators', 'unit-handling')]: unitHandling,

  [key('control-directives', 'if-else')]: ifElse,
  [key('control-directives', 'for-loops')]: forLoops,
  [key('control-directives', 'each-loops')]: eachLoops,
  [key('control-directives', 'while-loops')]: whileLoops,

  [key('maps-lists', 'lists')]: lists,
  [key('maps-lists', 'maps')]: maps,
  [key('maps-lists', 'map-access')]: mapAccess,
  [key('maps-lists', 'iterating')]: iterating,

  [key('modules', 'use-basics')]: useBasics,
  [key('modules', 'forward')]: forward,
  [key('modules', 'namespacing')]: namespacing,
  [key('modules', 'migrating-from-import')]: migratingFromImport,

  [key('best-practices', 'project-structure')]: projectStructure,
  [key('best-practices', 'naming-conventions')]: namingConventions,
  [key('best-practices', 'performance')]: performance,
  [key('best-practices', 'maintainability')]: maintainability,

  [key('migration', 'css-to-scss')]: cssToScss,
  [key('migration', 'import-to-use')]: importToUse,
  [key('migration', 'legacy-syntax')]: legacySyntax,
  [key('migration', 'tooling-updates')]: toolingUpdates,

  [key('architecture-patterns', 'itcss')]: {
    explanation: [
      'ITCSS (Inverted Triangle CSS) orders styles from generic to specific: Settings, Tools, Generic, Elements, Objects, Components, and Utilities. SCSS partials map cleanly onto each layer.',
      'The triangle shape reflects specificity and reach—settings affect everything; utilities affect one property on one element.',
    ],
    examples: [
      {
        title: 'Layered partial imports',
        code: `@use 'settings/colors';
@use 'tools/mixins';
@use 'generic/reset';
@use 'elements/typography';
@use 'objects/layout';
@use 'components/button';
@use 'utilities/spacing';`,
      },
    ],
    demonstrations: [
      'A button component partial only imports settings and tools—it never pulls in utilities or unrelated components, keeping the dependency graph predictable.',
    ],
    bestPractices: [
      'Name partials with a numeric prefix (01-settings, 02-tools) so load order stays explicit in file explorers.',
      'Keep utilities last so they can override component rules without !important in most cases.',
    ],
    commonMistakes: [
      'Placing component styles in the generic layer, which makes overrides fight each other across the codebase.',
      'Importing components inside settings or tools partials, creating circular dependencies.',
    ],
    references: [
      { title: 'ITCSS — Harry Roberts', url: 'https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/' },
    ],
    practicalUseCases: [
      'Migrating a legacy CSS codebase into scoped layers without rewriting every selector at once.',
      'Onboarding designers and developers with a shared vocabulary for where new styles belong.',
    ],
  },

  [key('architecture-patterns', 'bem-scss')]: bemScss,
  [key('architecture-patterns', 'seven-one')]: sevenOne,
  [key('architecture-patterns', 'component-libraries')]: componentLibraries,

  [key('responsive-design', 'breakpoint-mixins')]: {
    explanation: [
      'Breakpoint mixins wrap media queries so you write min-width or max-width logic once and reuse consistent cutoffs across the project.',
      'Define breakpoints in a map, iterate with @each, and expose mixins like respond-above(sm) instead of scattering raw @media blocks.',
    ],
    examples: [
      {
        title: 'Map-driven breakpoint mixin',
        code: `$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
);

@mixin respond-above($name) {
  $width: map-get($breakpoints, $name);
  @media (min-width: $width) {
    @content;
  }
}

.card-grid {
  display: grid;
  gap: 1rem;

  @include respond-above(md) {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
      },
    ],
    demonstrations: [
      'Changing md from 768px to 800px in the map updates every component that uses respond-above(md)—no find-and-replace across dozens of files.',
    ],
    bestPractices: [
      'Prefer min-width (mobile-first) queries so base styles target small screens and enhancements layer on.',
      'Document whether breakpoints are based on content needs or device widths—content-based breakpoints age better.',
    ],
    commonMistakes: [
      'Mixing px, em, and rem units inside breakpoint maps, causing queries to fire at unexpected viewport sizes.',
      'Creating a mixin per breakpoint value instead of one parameterized mixin, duplicating @media syntax.',
    ],
    references: [
      { title: 'Sass — @mixin', url: 'https://sass-lang.com/documentation/at-rules/mixin/' },
    ],
    practicalUseCases: [
      'Aligning marketing pages and app shells on the same breakpoint tokens.',
      'Generating utility classes like .hidden-until-lg from a single loop.',
    ],
  },

  [key('responsive-design', 'mobile-first')]: mobileFirst,
  [key('responsive-design', 'fluid-typography')]: fluidTypography,
  [key('responsive-design', 'container-queries')]: containerQueries,

  [key('theming', 'css-custom-properties')]: {
    explanation: [
      'SCSS variables compile away at build time; CSS custom properties survive in the output and can change at runtime—ideal for theming.',
      'A common pattern exports SCSS token maps to :root custom properties, then references var(--token) in component rules.',
    ],
    examples: [
      {
        title: 'Exporting tokens to custom properties',
        code: `$theme: (
  bg: #f8f7f4,
  text: #1a1814,
  accent: #c65309,
);

:root {
  @each $name, $value in $theme {
    --color-#{$name}: #{$value};
  }
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}`,
      },
    ],
    demonstrations: [
      'Toggle a .dark class on html that reassigns the same custom property names—components need no SCSS changes for dark mode.',
    ],
    bestPractices: [
      'Use SCSS for generating the token list; use var() in rules that must respond to theme class changes.',
      'Keep custom property names consistent (--color-, --space-) across light and dark themes.',
    ],
    commonMistakes: [
      'Using only SCSS variables for colors and wondering why toggling a class has no effect at runtime.',
      'Hard-coding fallbacks on every var() call instead of defining sensible defaults on :root.',
    ],
    references: [
      { title: 'MDN — Using CSS custom properties', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' },
    ],
    practicalUseCases: [
      'User-controlled light/dark mode without duplicating entire stylesheets.',
      'White-label products that swap brand tokens via a single theme map.',
    ],
  },

  [key('theming', 'dark-mode')]: darkMode,
  [key('theming', 'theme-maps')]: themeMaps,
  [key('theming', 'multi-brand')]: multiBrand,

  [key('layout-systems', 'grid-mixins')]: {
    explanation: [
      'Grid mixins encode repeated display: grid declarations—column counts, gaps, and auto-fit patterns—so layout code stays DRY.',
      'Combine grid mixins with spacing tokens to align page sections with your design system rhythm.',
    ],
    examples: [
      {
        title: 'Reusable grid mixin',
        code: `@mixin grid($columns: 12, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

.dashboard {
  @include grid(3, 1.5rem);
}`,
      },
    ],
    demonstrations: [
      'A product listing and a team directory can share the same grid mixin with different column counts while keeping gap spacing identical.',
    ],
    bestPractices: [
      'Pair grid mixins with max-width containers so content does not stretch edge-to-edge on ultra-wide monitors.',
      'Use minmax() in mixins when columns should collapse fluidly instead of fixed repeat counts.',
    ],
    commonMistakes: [
      'Hard-coding pixel gaps in every grid instead of referencing a shared spacing scale.',
      'Applying grid to every container—even simple stacked layouts that only need flex or block flow.',
    ],
    references: [
      { title: 'MDN — CSS Grid Layout', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout' },
    ],
    practicalUseCases: [
      'Dashboard widgets that reflow from one column on mobile to three on desktop.',
      'Documentation sites with a sidebar + content column grid.',
    ],
  },

  [key('layout-systems', 'flexbox-utilities')]: flexboxUtilities,
  [key('layout-systems', 'spacing-scale')]: spacingScale,
  [key('layout-systems', 'stack-cluster')]: stackCluster,

  [key('design-tokens', 'token-architecture')]: {
    explanation: [
      'Design tokens are named, platform-agnostic values (color, space, typography) stored in SCSS maps or modules and distributed to components.',
      'Token architecture separates primitive tokens (raw values) from semantic tokens (role-based names like text-muted) so rebrands touch fewer files.',
    ],
    examples: [
      {
        title: 'Primitive and semantic tokens',
        code: `$orange-600: #c65309;

$colors: (
  accent: $orange-600,
  text-muted: #5c574f,
);

@function color($name) {
  @return map-get($colors, $name);
}

.link {
  color: color(accent);
}`,
      },
    ],
    demonstrations: [
      'When brand orange shifts, update one primitive variable; semantic tokens and components pick up the change on next compile.',
    ],
    bestPractices: [
      'Publish tokens from a dedicated @forward module so consumers import one entry point.',
      'Name tokens by role (surface-raised) not by hex value (gray-100).',
    ],
    commonMistakes: [
      'Duplicating the same hex in ten partials instead of referencing a token map.',
      'Flattening all tokens into one giant map without grouping by category.',
    ],
    references: [
      { title: 'Design Tokens — W3C Community Group', url: 'https://design-tokens.github.io/community-group/' },
    ],
    practicalUseCases: [
      'Handing off Figma variables to SCSS maps for pixel-parity between design and code.',
      'Feeding tokens into both web and React Native theme objects from a shared JSON export.',
    ],
  },

  [key('design-tokens', 'color-tokens')]: colorTokens,
  [key('design-tokens', 'spacing-tokens')]: spacingTokens,
  [key('design-tokens', 'typography-tokens')]: typographyTokens,

  [key('common-mistakes', 'over-nesting')]: {
    explanation: [
      'Deep selector nesting mirrors HTML structure but produces long, brittle selectors that are hard to override and slow to match in the browser.',
      'A good rule of thumb: if your compiled selector has more than three compound segments, flatten or extract a class.',
    ],
    examples: [
      {
        title: 'Flatten with BEM-style classes',
        code: `// Avoid
.page .sidebar .nav .item a { }

// Prefer
.nav__link { }`,
      },
    ],
    demonstrations: [
      'Refactoring .header .nav ul li a span to .nav__label drops specificity from 0-0-6 to 0-1-0, making state variants easier to add.',
    ],
    bestPractices: [
      'Nest only when it expresses a true parent-child relationship (e.g. .card { &:hover { } }).',
      'Use @at-root sparingly to break out of nesting when a selector must sit at the root level.',
    ],
    commonMistakes: [
      'Nesting because SCSS allows it, not because the CSS architecture requires it.',
      'Chaining & multiple times (.btn { &.is-active { & .icon { } } }) without noticing specificity growth.',
    ],
    references: [
      { title: 'Sass Guidelines — Nesting', url: 'https://sass-guidelin.es/#nesting' },
    ],
    practicalUseCases: [
      'Code review checklists that flag selectors deeper than three levels in pull requests.',
      'Linting with stylelint-max-nesting-depth to enforce team limits automatically.',
    ],
  },

  [key('common-mistakes', 'global-pollution')]: globalPollution,
  [key('common-mistakes', 'deep-extend')]: deepExtend,
  [key('common-mistakes', 'import-order')]: importOrder,

  [key('real-world-projects', 'dashboard-ui')]: {
    explanation: [
      'Dashboard UIs combine dense data tables, filters, charts, and responsive sidebars—SCSS modules help isolate each surface while sharing tokens.',
      'Structure dashboard SCSS by layout shell, data components, and chart wrappers rather than one file per page.',
    ],
    examples: [
      {
        title: 'Dashboard shell partial',
        code: `@use '../tokens/spacing' as space;
@use '../tools/breakpoints' as bp;

.app-shell {
  display: grid;
  gap: space.$md;

  @include bp.respond-above(lg) {
    grid-template-columns: 240px 1fr;
  }
}`,
      },
    ],
    demonstrations: [
      'A filter bar and KPI card row both consume the same spacing tokens, so tightening vertical rhythm happens in one map edit.',
    ],
    bestPractices: [
      'Keep chart library overrides in a dedicated vendors partial to avoid polluting component styles.',
      'Use CSS grid for the shell and flex for toolbar groups inside panels.',
    ],
    commonMistakes: [
      'Inlining third-party chart CSS overrides next to every chart instance instead of centralizing vendor patches.',
      'Skipping empty states and loading skeleton styles in the initial SCSS pass.',
    ],
    references: [
      { title: 'Sass — @use', url: 'https://sass-lang.com/documentation/at-rules/use/' },
    ],
    practicalUseCases: [
      'Analytics products with role-based sidebars and collapsible navigation.',
      'Internal admin tools that share a shell but swap module partials per feature team.',
    ],
  },

  [key('real-world-projects', 'marketing-site')]: marketingSite,
  [key('real-world-projects', 'component-library')]: componentLibrary,
  [key('real-world-projects', 'design-system-migration')]: designSystemMigration,

  [key('interview-prep', 'core-concepts')]: {
    explanation: [
      'Interviewers often probe whether you understand compile-time vs runtime behavior, module scoping, and when to reach for mixins versus functions.',
      'Be ready to explain how @use differs from @import, why extend can bloat output, and how you structure tokens in production.',
    ],
    examples: [
      {
        title: 'Module scoping question',
        code: `@use 'variables' as vars;

.button {
  color: vars.$primary;
}`,
      },
    ],
    demonstrations: [
      'When asked "what happens if two files define $primary?", walk through namespaces: each @use scope is isolated unless forwarded explicitly.',
    ],
    bestPractices: [
      'Answer with trade-offs—mixins duplicate CSS but are safer than extend for variant-heavy components.',
      'Mention tooling: sass --watch, Vite integration, and migration from legacy @import.',
    ],
    commonMistakes: [
      'Claiming SCSS variables work like CSS custom properties for runtime theming.',
      'Unable to articulate specificity implications of deep nesting or @extend chains.',
    ],
    references: [
      { title: 'Sass — Breaking Changes', url: 'https://sass-lang.com/documentation/breaking-changes/' },
    ],
    practicalUseCases: [
      'Whiteboard exercises: refactor a flat CSS button into a token-driven SCSS partial.',
      'Live coding: write a breakpoint mixin and a color contrast function.',
    ],
  },

  [key('interview-prep', 'coding-challenges')]: codingChallenges,
  [key('interview-prep', 'architecture-questions')]: architectureQuestions,
  [key('interview-prep', 'troubleshooting')]: troubleshooting,

  [key('cheatsheets', 'syntax-reference')]: {
    explanation: [
      'A syntax reference collects the most-used SCSS constructs—variables, nesting, mixins, functions, and module directives—in one scannable page.',
      'Use this cheatsheet during migrations or code reviews when you need a quick reminder of at-rule syntax.',
    ],
    examples: [
      {
        title: 'Quick syntax sampler',
        code: `$size: 1rem;
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
@function double($n) { @return $n * 2; }`,
      },
    ],
    demonstrations: [
      'Pin this page while converting @import statements to @use—compare old and new syntax side by side.',
    ],
    bestPractices: [
      'Keep cheatsheets close to your team conventions, not every possible Sass feature.',
      'Regenerate snippets from tested partials so examples stay compilable.',
    ],
    commonMistakes: [
      'Copying outdated @import examples from blog posts written before the module system.',
      'Memorizing function names without knowing which require sass:math vs legacy global functions.',
    ],
    references: [
      { title: 'Sass — At-rules index', url: 'https://sass-lang.com/documentation/at-rules/' },
    ],
    practicalUseCases: [
      'Onboarding handout for developers new to SCSS but fluent in CSS.',
      'CI-friendly snippet validation—each cheatsheet block compiles in isolation.',
    ],
  },

  [key('cheatsheets', 'functions-reference')]: functionsReference,
  [key('cheatsheets', 'mixins-recipes')]: mixinsRecipes,
  [key('cheatsheets', 'module-cheatsheet')]: moduleCheatsheet,

  [key('resources', 'official-documentation')]: {
    explanation: [
      'Official Sass documentation is the authoritative source for at-rule syntax, breaking changes, and migration paths from @import to the module system.',
      'Bookmark the sections matching your stack: Dart Sass CLI, embedded compilers in Vite/Webpack, and language differences from LibSass.',
    ],
    examples: [
      {
        title: 'CLI compile command',
        language: 'bash',
        code: `sass src/scss:dist/css --watch --style=compressed`,
      },
    ],
    demonstrations: [
      'The interactive Sass playground on sass-lang.com lets you test snippets before pasting them into your project.',
    ],
    bestPractices: [
      'Check the breaking changes page before upgrading sass package major versions.',
      'Prefer module docs (@use, @forward) over legacy import guides for greenfield work.',
    ],
    commonMistakes: [
      'Following LibSass-era tutorials that omit @use namespacing and built-in module requirements.',
      'Ignoring release notes for sass-embedded vs dart-sass CLI differences in CI.',
    ],
    references: [
      { title: 'Sass — Official Site', url: 'https://sass-lang.com/' },
      { title: 'Sass — JavaScript API', url: 'https://sass-lang.com/documentation/js-api/' },
    ],
    practicalUseCases: [
      'Verifying whether a built-in function moved to sass:color or sass:math.',
      'Finding the canonical migration recipe for @import removal.',
    ],
  },

  [key('resources', 'tools-compilers')]: toolsCompilers,
  [key('resources', 'community-learning')]: communityLearning,
  [key('resources', 'books-courses')]: booksCourses,
}

export function getDocContentKey(sectionSlug: string, pageSlug: string): DocContentKey {
  return key(sectionSlug, pageSlug)
}

export function getDocContent(sectionSlug: string, pageSlug: string): DocContent | undefined {
  return docContentMap[getDocContentKey(sectionSlug, pageSlug)]
}

export function hasDocContent(sectionSlug: string, pageSlug: string): boolean {
  return getDocContentKey(sectionSlug, pageSlug) in docContentMap
}

export { docContentMap }
