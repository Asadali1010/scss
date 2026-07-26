import { useCallback, useId, useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = 'scss', title }: CodeBlockProps) {
  const labelId = useId()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }, [code])

  return (
    <figure className="doc-code-block" aria-labelledby={title ? labelId : undefined}>
      <div className="doc-code-block__header">
        {title ? (
          <figcaption id={labelId} className="doc-code-block__title">
            {title}
          </figcaption>
        ) : (
          <span className="doc-code-block__lang" aria-hidden="true">
            {language}
          </span>
        )}
        <button
          type="button"
          onClick={handleCopy}
          className="doc-code-block__copy"
          aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="doc-code-block__pre">
        <code className={`doc-code-block__code language-${language}`}>{code}</code>
      </pre>
    </figure>
  )
}
