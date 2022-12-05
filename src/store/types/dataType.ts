export type QuestionType = {
  id: number
  question: string
  answer: string
}

export type CategoryType = {
  categoryId: number
  categoryTitle: string
  questions: QuestionType[]
}

export interface DataType {
  data: CategoryType[];
}