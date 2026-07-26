/**
 * Strip SCSS/CSS comments and collapse whitespace for lenient answer matching.
 */
export function normalizeScss(code: string): string {
  let normalized = code.replace(/\/\*[\s\S]*?\*\//g, ' ')
  normalized = normalized.replace(/\/\/[^\n]*/g, ' ')
  normalized = normalized.replace(/\s+/g, ' ').trim()
  return normalized
}

/**
 * Returns true when every solution pattern matches the normalized user code.
 */
export function validateAnswer(code: string, solutionPatterns: string[]): boolean {
  const normalized = normalizeScss(code)
  return solutionPatterns.every((pattern) => new RegExp(pattern, 'i').test(normalized))
}
