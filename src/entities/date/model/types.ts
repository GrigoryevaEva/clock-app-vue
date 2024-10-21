export interface IDateStore {
  readonly date: Date

  readonly abbr: string
  readonly city: string
  readonly countryCode: string
  readonly timezone: string
}

export type Getters = {
  readonly dayYear: (state: IDateStore) => number
  readonly dayWeek: (state: IDateStore) => number
  readonly weekYear: (state: IDateStore) => number
  readonly location: (state: IDateStore) => string
  readonly dayTime: (state: IDateStore) => string
}

export type Actions = {
  readonly fetchDate: () => void
}