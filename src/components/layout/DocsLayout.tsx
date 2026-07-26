import { useState, type ReactNode } from 'react'
import Breadcrumbs from './Breadcrumbs'
import MobileNav from './MobileNav'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

interface DocsLayoutProps {
  children: ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div
      className="min-h-screen overflow-x-clip"
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text)',
      }}
    >
      <TopNav onMenuOpen={() => setMobileNavOpen(true)} />
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <div className="mx-auto flex max-w-7xl min-w-0">
        <aside
          className="hidden w-64 shrink-0 border-r lg:block xl:w-72"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-surface-raised)',
          }}
        >
          <div className="sticky top-(--header-h) max-h-[calc(100vh-var(--header-h))] overflow-y-auto overflow-x-hidden p-4">
            <Sidebar />
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Breadcrumbs />
          <div className="min-w-0">{children}</div>
        </main>
      </div>
    </div>
  )
}
