export interface DocCodeExample {
  title?: string
  code: string
  language?: string
}

export interface DocReference {
  title: string
  url: string
}

export interface DocContent {
  explanation: string[]
  examples: DocCodeExample[]
  demonstrations: string[]
  bestPractices: string[]
  commonMistakes: string[]
  references: DocReference[]
  practicalUseCases: string[]
}

export type DocContentKey = `${string}/${string}`
