import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { css } from '@codemirror/lang-css'
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap, lineNumbers } from '@codemirror/view'
import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

interface CodeMirrorEditorProps {
  value: string
  onChange: (value: string) => void
  className?: string
  'aria-label'?: string
}

const editorTheme = EditorView.theme(
  {
    '&': {
      backgroundColor: 'var(--color-surface-muted)',
      color: 'var(--color-text)',
      fontSize: '0.875rem',
      fontFamily:
        'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace',
    },
    '.cm-content': {
      caretColor: 'var(--color-accent)',
      padding: '1rem 0',
      minHeight: '12rem',
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: 'var(--color-accent)',
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, &.cm-focused .cm-content ::selection':
      {
        backgroundColor: 'var(--color-accent-subtle) !important',
      },
    '.cm-gutters': {
      backgroundColor: 'var(--color-surface-raised)',
      color: 'var(--color-text-muted)',
      border: 'none',
      borderRight: '1px solid var(--color-border)',
    },
    '.cm-activeLineGutter': {
      backgroundColor: 'var(--color-surface)',
    },
    '.cm-activeLine': {
      backgroundColor: 'var(--color-surface)',
    },
    '.cm-scroller': {
      lineHeight: '1.6',
    },
  },
  { dark: false },
)

export default function CodeMirrorEditor({
  value,
  onChange,
  className = '',
  'aria-label': ariaLabel = 'SCSS code editor',
}: CodeMirrorEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const onChangeRef = useRef(onChange)
  const { theme } = useTheme()

  onChangeRef.current = onChange

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        onChangeRef.current(update.state.doc.toString())
      }
    })

    const state = EditorState.create({
      doc: value,
      extensions: [
        css(),
        history(),
        lineNumbers(),
        keymap.of([...defaultKeymap, ...historyKeymap]),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        updateListener,
        editorTheme,
        EditorView.lineWrapping,
      ],
    })

    const view = new EditorView({
      state,
      parent: containerRef.current,
    })

    viewRef.current = view

    return () => {
      view.destroy()
      viewRef.current = null
    }
  }, [])

  useEffect(() => {
    const view = viewRef.current
    if (!view) {
      return
    }

    const current = view.state.doc.toString()
    if (value !== current) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
      })
    }
  }, [value])

  useEffect(() => {
    containerRef.current?.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] ${className}`.trim()}
      data-theme={theme}
      role="textbox"
      aria-label={ariaLabel}
      aria-multiline="true"
    />
  )
}
