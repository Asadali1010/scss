import type { QuizQuestion as QuizQuestionType } from '../../types/quiz'
import CodeMirrorEditor from './CodeMirrorEditor'

export type QuizResult = 'idle' | 'correct' | 'incorrect'

interface QuizQuestionProps {
  question: QuizQuestionType
  code: string
  onCodeChange: (code: string) => void
  result: QuizResult
  onCheckAnswer: () => void
  feedbackMessage: string
}

export default function QuizQuestion({
  question,
  code,
  onCodeChange,
  result,
  onCheckAnswer,
  feedbackMessage,
}: QuizQuestionProps) {
  const showFeedback = result !== 'idle'

  return (
    <article className="quiz-question" aria-labelledby={`quiz-title-${question.id}`}>
      <header className="quiz-question__header">
        <h2 id={`quiz-title-${question.id}`} className="quiz-question__title">
          {question.title}
        </h2>
        <p className="quiz-question__prompt">{question.prompt}</p>
      </header>

      <div className="quiz-question__editor-wrap">
        <p id={`quiz-editor-label-${question.id}`} className="quiz-question__editor-label">
          Your SCSS code
        </p>
        <CodeMirrorEditor
          value={code}
          onChange={onCodeChange}
          aria-label={`SCSS editor for ${question.title}`}
          className="quiz-question__editor"
        />
      </div>

      <div className="quiz-question__actions">
        <button
          type="button"
          className="quiz-btn quiz-btn--primary"
          onClick={onCheckAnswer}
        >
          Check Answer
        </button>
      </div>

      {showFeedback && (
        <div
          className={`quiz-feedback quiz-feedback--${result}`}
          role="status"
          aria-live="polite"
        >
          <p className="quiz-feedback__message">{feedbackMessage}</p>
          {result === 'incorrect' && (
            <p className="quiz-feedback__hint">
              <span className="quiz-feedback__hint-label">Hint:</span> {question.hint}
            </p>
          )}
        </div>
      )}
    </article>
  )
}
