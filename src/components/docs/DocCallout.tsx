import type { ReactNode } from 'react'

export type DocCalloutVariant = 'tip' | 'note' | 'warning' | 'best-practice' | 'mistake'

interface DocCalloutProps {
  variant: DocCalloutVariant
  title?: string
  children: ReactNode
}

const variantLabels: Record<DocCalloutVariant, string> = {
  tip: 'Tip',
  note: 'Note',
  warning: 'Warning',
  'best-practice': 'Best practice',
  mistake: 'Common mistake',
}

export default function DocCallout({ variant, title, children }: DocCalloutProps) {
  const label = title ?? variantLabels[variant]

  return (
    <aside
      className={`doc-callout doc-callout--${variant}`}
      role="note"
      aria-label={label}
    >
      <p className="doc-callout__label">{label}</p>
      <div className="doc-callout__body">{children}</div>
    </aside>
  )
}
