import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DocsLayout from './components/layout/DocsLayout'
import { ThemeProvider } from './context/ThemeContext'
import DocsPage from './pages/DocsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const QuizPage = lazy(() => import('./pages/QuizPage'))

function QuizPageFallback() {
  return (
    <div className="py-12 text-center" style={{ color: 'var(--color-text-muted)' }}>
      Loading quiz…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/quiz"
            element={
              <DocsLayout>
                <Suspense fallback={<QuizPageFallback />}>
                  <QuizPage />
                </Suspense>
              </DocsLayout>
            }
          />
          <Route
            path="/docs/*"
            element={
              <DocsLayout>
                <DocsPage />
              </DocsLayout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
