export interface QuizQuestion {
  id: string
  title: string
  prompt: string
  starterCode: string
  solutionPatterns: string[]
  hint: string
}
