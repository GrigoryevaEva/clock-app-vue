import { RejectedDataType } from "../../../shared/types/errors"

export interface IDateStore {
  date: Date

  abbrTZ: string
  city: string
  countryCode: string
  timezone: string

  loading: boolean
  error: null | RejectedDataType
}

// export type Getters = {
//   readonly dayYear: ( => number
//   readonly dayWeek: (state: IDateStore) => number
//   readonly weekYear: (state: IDateStore) => number
//   readonly location: (state: IDateStore) => string
//   readonly dayTime: (state: IDateStore) => string
// }

// export type Actions = {
//   readonly fetchDate: (state: IDateStore) => void
// }