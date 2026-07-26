import { describe, expect, it } from 'vitest'
import { normalizeScss, validateAnswer } from './quizValidation'

describe('normalizeScss', () => {
  it('strips block comments', () => {
    expect(normalizeScss('.cta { /* brand */ color: red; }')).toBe('.cta { color: red; }')
  })

  it('strips line comments', () => {
    expect(normalizeScss('$x: 1; // trailing\n.y { color: $x; }')).toBe('$x: 1; .y { color: $x; }')
  })

  it('collapses whitespace and trims', () => {
    expect(normalizeScss('  .a   {\n  color:   red ; \n}  ')).toBe('.a { color: red ; }')
  })
})

describe('validateAnswer', () => {
  it('returns true when all solution patterns match', () => {
    const code = `$brand-color: #c65309;
.cta {
  color: $brand-color;
}`
    expect(
      validateAnswer(code, ['\\$brand-color\\s*:\\s*#c65309', 'color:\\s*\\$brand-color']),
    ).toBe(true)
  })

  it('matches patterns case-insensitively', () => {
    const code = '@MIXIN flex-center { DISPLAY: flex; }'
    expect(validateAnswer(code, ['@mixin\\s+flex-center', 'display:\\s*flex'])).toBe(true)
  })

  it('ignores comments when matching patterns', () => {
    const code = `.nav-link {
  /* hover */
  &:hover { color: #a34407; }
}`
    expect(
      validateAnswer(code, ['&\\s*:hover\\s*\\{', 'color:\\s*#a34407']),
    ).toBe(true)
  })

  it('returns false when a required pattern is missing', () => {
    const code = `$brand-color: #c65309;
.cta { font-size: 1rem; }`
    expect(
      validateAnswer(code, ['\\$brand-color\\s*:\\s*#c65309', 'color:\\s*\\$brand-color']),
    ).toBe(false)
  })

  it('requires every pattern in the list to match', () => {
    const code = '@mixin flex-center { display: flex; }'
    expect(
      validateAnswer(code, [
        '@mixin\\s+flex-center',
        'display:\\s*flex',
        'align-items:\\s*center',
      ]),
    ).toBe(false)
  })

  it('accepts map-get answers with optional background-color property', () => {
    const code = `.badge {
  background-color: map-get($colors, accent);
}`
    expect(
      validateAnswer(code, [
        'background(-color)?:\\s*map-get\\(\\s*\\$colors\\s*,\\s*accent\\s*\\)',
      ]),
    ).toBe(true)
  })
})
