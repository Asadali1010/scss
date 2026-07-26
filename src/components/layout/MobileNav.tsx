import { useEffect, useRef } from 'react'
import Sidebar from './Sidebar'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ outlineColor: 'var(--color-accent)' }}
        aria-label="Close navigation menu"
      />

      <aside
        className="relative flex h-full w-[min(100vw-3rem,20rem)] max-w-full flex-col shadow-xl"
        style={{ backgroundColor: 'var(--color-surface-raised)' }}
      >
        <div
          className="flex min-h-14 items-center justify-between border-b px-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            Documentation
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: 'var(--color-text)', outlineColor: 'var(--color-accent)' }}
            aria-label="Close navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
          <Sidebar onNavigate={onClose} />
        </div>
      </aside>
    </div>
  )
}
