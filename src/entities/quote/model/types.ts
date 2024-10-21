export interface IQuoteStore {
  readonly quote: string
  readonly author: string
}

export type Actions = {
  readonly fetchQuote: () => void
}