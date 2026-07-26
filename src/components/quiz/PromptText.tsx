import { Fragment } from 'react'

/**
 * Quiz prompts and hints mark up SCSS identifiers with markdown-style
 * backticks. Render the spans between them as inline code.
 */
export default function PromptText({ text }: { text: string }) {
  const segments = text.split('`')

  return (
    <>
      {segments.map((segment, index) =>
        index % 2 === 1 ? (
          <code key={index} className="quiz-inline-code">
            {segment}
          </code>
        ) : (
          <Fragment key={index}>{segment}</Fragment>
        ),
      )}
    </>
  )
}
