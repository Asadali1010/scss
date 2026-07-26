import { describe, expect, it } from 'vitest'
import { navigation } from '../navigation'
import { docContentMap, getDocContentKey, hasDocContent } from './index'

describe('content parity', () => {
  it('every navigation child page slug resolves to docContentMap entry (92/92)', () => {
    const childPages = navigation.flatMap((section) =>
      (section.children ?? []).map((page) => ({
        sectionSlug: section.slug,
        pageSlug: page.slug,
      })),
    )

    expect(childPages).toHaveLength(92)

    for (const { sectionSlug, pageSlug } of childPages) {
      const contentKey = getDocContentKey(sectionSlug, pageSlug)
      expect(hasDocContent(sectionSlug, pageSlug)).toBe(true)
      expect(contentKey in docContentMap).toBe(true)
      expect(docContentMap[contentKey].explanation.length).toBeGreaterThan(0)
    }
  })
})
