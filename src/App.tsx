import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DocsLayout from './components/layout/DocsLayout'
import { ThemeProvider } from './context/ThemeContext'
import DocsPage from './pages/DocsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
