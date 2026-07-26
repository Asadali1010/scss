import type { DocContent } from '../../types/docContent'
import CodeBlock from './CodeBlock'
import DocCallout from './DocCallout'

interface DocContentViewProps {
  content: DocContent
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) return null

  return (
    <ul className="doc-content__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function DocContentView({ content }: DocContentViewProps) {
  return (
    <div className="doc-content">
      <section className="doc-content__section" aria-labelledby="doc-explanation">
        <h2 id="doc-explanation" className="doc-content__heading">
          Explanation
        </h2>
        {content.explanation.map((paragraph) => (
          <p key={paragraph} className="doc-content__paragraph">
            {paragraph}
          </p>
        ))}
      </section>

      {content.examples.length > 0 && (
        <section className="doc-content__section" aria-labelledby="doc-examples">
          <h2 id="doc-examples" className="doc-content__heading">
            Examples
          </h2>
          <div className="doc-content__examples">
            {content.examples.map((example) => (
              <CodeBlock
                key={`${example.title ?? 'example'}-${example.code.slice(0, 24)}`}
                code={example.code}
                language={example.language}
                title={example.title}
              />
            ))}
          </div>
        </section>
      )}

      {content.demonstrations.length > 0 && (
        <section className="doc-content__section" aria-labelledby="doc-demonstrations">
          <h2 id="doc-demonstrations" className="doc-content__heading">
            Demonstrations
          </h2>
          {content.demonstrations.map((item) => (
            <DocCallout key={item} variant="note">
              {item}
            </DocCallout>
          ))}
        </section>
      )}

      {content.bestPractices.length > 0 && (
        <section className="doc-content__section" aria-labelledby="doc-best-practices">
          <h2 id="doc-best-practices" className="doc-content__heading">
            Best practices
          </h2>
          {content.bestPractices.map((item) => (
            <DocCallout key={item} variant="best-practice">
              {item}
            </DocCallout>
          ))}
        </section>
      )}

      {content.commonMistakes.length > 0 && (
        <section className="doc-content__section" aria-labelledby="doc-common-mistakes">
          <h2 id="doc-common-mistakes" className="doc-content__heading">
            Common mistakes
          </h2>
          {content.commonMistakes.map((item) => (
            <DocCallout key={item} variant="mistake">
              {item}
            </DocCallout>
          ))}
        </section>
      )}

      {content.practicalUseCases.length > 0 && (
        <section className="doc-content__section" aria-labelledby="doc-use-cases">
          <h2 id="doc-use-cases" className="doc-content__heading">
            Practical use cases
          </h2>
          <BulletList items={content.practicalUseCases} />
        </section>
      )}

      {content.references.length > 0 && (
        <section className="doc-content__section" aria-labelledby="doc-references">
          <h2 id="doc-references" className="doc-content__heading">
            References
          </h2>
          <ul className="doc-content__refs">
            {content.references.map((ref) => (
              <li key={ref.url}>
                <a
                  href={ref.url}
                  className="doc-content__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
