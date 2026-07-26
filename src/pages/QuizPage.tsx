import { useCallback, useEffect, useState } from 'react'
import QuizQuestion, { type QuizResult } from '../components/quiz/QuizQuestion'
import { quizQuestions } from '../data/quizQuestions'
import { formatDocumentTitle } from '../utils/routes'
import { validateAnswer } from '../utils/quizValidation'

const TOTAL = quizQuestions.length

export default function QuizPage() {
  useEffect(() => {
    document.title = formatDocumentTitle('Quiz')
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [codes, setCodes] = useState<string[]>(() =>
    quizQuestions.map((q) => q.starterCode),
  )
  const [results, setResults] = useState<QuizResult[]>(() =>
    quizQuestions.map(() => 'idle'),
  )
  const [feedbackMessages, setFeedbackMessages] = useState<string[]>(() =>
    quizQuestions.map(() => ''),
  )

  const question = quizQuestions[currentIndex]
  const isFirst = currentIndex === 0
  const isLast = currentIndex === TOTAL - 1

  const handleCodeChange = useCallback(
    (code: string) => {
      setCodes((prev) => {
        const next = [...prev]
        next[currentIndex] = code
        return next
      })
      setResults((prev) => {
        if (prev[currentIndex] === 'idle') {
          return prev
        }
        const next = [...prev]
        next[currentIndex] = 'idle'
        return next
      })
      setFeedbackMessages((prev) => {
        if (prev[currentIndex] === '') {
          return prev
        }
        const next = [...prev]
        next[currentIndex] = ''
        return next
      })
    },
    [currentIndex],
  )

  const handleCheckAnswer = useCallback(() => {
    const code = codes[currentIndex]
    const isCorrect = validateAnswer(code, question.solutionPatterns)
    const result: QuizResult = isCorrect ? 'correct' : 'incorrect'
    const message = isCorrect
      ? 'Correct! Your SCSS matches the expected solution.'
      : 'Not quite right. Review your code and try again.'

    setResults((prev) => {
      const next = [...prev]
      next[currentIndex] = result
      return next
    })
    setFeedbackMessages((prev) => {
      const next = [...prev]
      next[currentIndex] = message
      return next
    })
  }, [codes, currentIndex, question.solutionPatterns])

  const goPrevious = () => {
    setCurrentIndex((i) => Math.max(0, i - 1))
  }

  const goNext = () => {
    setCurrentIndex((i) => Math.min(TOTAL - 1, i + 1))
  }

  return (
    <div className="quiz-page">
      <header className="quiz-page__header">
        <p className="quiz-page__eyebrow">SCSS Practice Quiz</p>
        <h1 className="quiz-page__title">Test your SCSS skills</h1>
      </header>

      <div
        className="quiz-progress"
        role="status"
        aria-label={`Question ${currentIndex + 1} of ${TOTAL}`}
      >
        <span className="quiz-progress__text">
          Question {currentIndex + 1} of {TOTAL}
        </span>
        <div
          className="quiz-progress__bar"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={TOTAL}
          aria-label="Quiz progress"
        >
          <div
            className="quiz-progress__fill"
            style={{ width: `${((currentIndex + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </div>

      <QuizQuestion
        key={question.id}
        question={question}
        code={codes[currentIndex]}
        onCodeChange={handleCodeChange}
        result={results[currentIndex]}
        onCheckAnswer={handleCheckAnswer}
        feedbackMessage={feedbackMessages[currentIndex]}
      />

      <nav className="quiz-nav" aria-label="Quiz navigation">
        <button
          type="button"
          className="quiz-btn quiz-btn--secondary"
          onClick={goPrevious}
          disabled={isFirst}
          aria-disabled={isFirst}
        >
          Previous
        </button>
        <button
          type="button"
          className="quiz-btn quiz-btn--secondary"
          onClick={goNext}
          disabled={isLast}
          aria-disabled={isLast}
        >
          Next
        </button>
      </nav>
    </div>
  )
}
