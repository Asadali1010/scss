import type { DocContent } from '../../../types/docContent'

const content: DocContent = {
  explanation: [
    'Retrieve map values with map.get($map, $key) from sass:map (or the legacy map-get). Check existence with map.has-key($map, $key) before accessing optional keys.',
    'Nested maps require chained lookups or a helper function that walks dot-separated key paths.',
    'When a key is missing, map.get returns null—handle null with @if or provide a default with map.get($map, $key) or $fallback pattern.',
  ],
  examples: [
    {
      title: 'Safe map access with fallbacks',
      code: `@use 'sass:map';

$tokens: (
  color: (
    primary: #c65309,
    muted: #5c574f,
  ),
);

@function token-color($name) {
  $palette: map.get($tokens, color);
  @if map.has-key($palette, $name) {
    @return map.get($palette, $name);
  }
  @warn 'Unknown color token: #{$name}';
  @return #000;
}

.link { color: token-color(primary); }`,
    },
  ],
  demonstrations: [
    'Call token-color(unknown) and Sass emits a compile warning while returning the fallback—catch typos before shipping.',
  ],
  bestPractices: [
    'Wrap map.get in project-specific accessor functions (color(), space()) for consistent error handling.',
    'Use map.has-key before get when missing keys should be fatal (@error instead of @warn).',
  ],
  commonMistakes: [
    'Calling map-get on a list or null, causing opaque compile errors.',
    'Hard-coding nested map-get chains in every component instead of a shared accessor.',
  ],
  references: [
    { title: 'Sass — sass:map', url: 'https://sass-lang.com/documentation/modules/map/' },
  ],
  practicalUseCases: [
    'Theme map with nested color, spacing, and typography namespaces.',
    'Config-driven component variants keyed by map entries.',
  ],
}

export default content
