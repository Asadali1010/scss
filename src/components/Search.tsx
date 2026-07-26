import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { filterSearchResults, type SearchResult } from '../utils/routes'

export default function Search() {
  const inputId = useId()
  const listboxId = useId()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setActiveIndex(-1)
      return
    }

    const filtered = filterSearchResults(query)
    setResults(filtered)
    setActiveIndex(filtered.length > 0 ? 0 : -1)
    setIsOpen(true)
  }, [query])

  const closeSearch = useCallback(() => {
    setIsOpen(false)
    setActiveIndex(-1)
  }, [])

  const navigateToResult = useCallback(
    (result: SearchResult) => {
      navigate(result.path)
      setQuery('')
      setResults([])
      closeSearch()
      inputRef.current?.blur()
    },
    [navigate, closeSearch],
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      setQuery('')
      setResults([])
      closeSearch()
      return
    }

    if (!isOpen || results.length === 0) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((current) => (current + 1) % results.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((current) => (current <= 0 ? results.length - 1 : current - 1))
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault()
      navigateToResult(results[activeIndex])
    }
  }

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const option = listRef.current.children[activeIndex] as HTMLElement | undefined
      option?.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  return (
    <div className="relative w-full max-w-md">
      <label
        htmlFor={inputId}
        className="mb-1 block text-xs font-medium"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Search documentation
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-3 flex items-center"
          style={{ color: 'var(--color-text-muted)' }}
          aria-hidden="true"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </span>
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          role="combobox"
          aria-expanded={isOpen && results.length > 0}
          aria-controls={listboxId}
          aria-activedescendant={activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
          aria-autocomplete="list"
          placeholder="Search docs…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim() && results.length > 0) setIsOpen(true)
          }}
          onBlur={() => {
            window.setTimeout(closeSearch, 150)
          }}
          className="w-full min-h-11 rounded-lg border py-2 pl-10 pr-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: 'var(--color-surface-raised)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
            outlineColor: 'var(--color-accent)',
          }}
        />
      </div>

      {isOpen && results.length > 0 && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label="Search results"
          className="absolute z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border shadow-lg"
          style={{
            backgroundColor: 'var(--color-surface-raised)',
            borderColor: 'var(--color-border)',
          }}
        >
          {results.map((result, index) => (
            <li
              key={result.path}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
            >
              <button
                type="button"
                tabIndex={-1}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => navigateToResult(result)}
                className="flex w-full min-h-11 flex-col items-start px-3 py-2 text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                style={{
                  backgroundColor:
                    index === activeIndex ? 'var(--color-accent-subtle)' : 'transparent',
                  color: 'var(--color-text)',
                  outlineColor: 'var(--color-accent)',
                }}
              >
                <span className="font-medium">{result.title}</span>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {result.context}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <p
          className="absolute z-50 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
          style={{
            backgroundColor: 'var(--color-surface-raised)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-muted)',
          }}
          role="status"
        >
          No matching pages
        </p>
      )}
    </div>
  )
}
