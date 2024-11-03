import { defineStore } from 'pinia'
import { IDateStore } from './types'
import { getDate } from '../../../shared/api/date'
import { ErrorType } from '../../../shared/types/errors'
import { IDate } from '../../../shared/api/date/types'

export const useDateStore = defineStore('quote', {
  state: () => <IDateStore>({ 
    date: new Date(), 

    abbrTZ: '',
    city: '',
    countryCode: '',
    timezone: '',

    loading: true,
    error: null
   }),

  getters: {
    hours(): string {
      const hours = this.date.getHours()
      if (hours < 10) return '0' + hours
      return `${hours}`
    },

    min(): string {
      const min = this.date.getMinutes()
      if (min < 10) return '0' + min
      return `${min}`
    },

    dayYear(): number {
      const date = this.date

      return Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    },

    dayWeek(): number {
      return this.date.getDay() + 1
    },

    weekYear(): number {
      const date = this.date

      date.setHours(0, 0, 0, 0)
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)

      const week1 = new Date(date.getFullYear(), 0, 4)

      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
    },

    location(): string {
      return `in ${this.city}, ${this.countryCode}`.toUpperCase()
    },

    dayTime(): string {
      const hours = this.date.getHours()
      let dayTime = 'day'

      if (hours > 3 && hours < 12) dayTime = 'morning' 
      if (hours > 11 && hours < 17) dayTime = 'afternoon' 
      if (hours > 16 && hours < 24) dayTime = 'evening' 
      if (hours >= 0 && hours < 12) dayTime = 'night' 

      return `good ${dayTime}, it's currently`.toUpperCase()
    },
  },

  actions: {
    async fetchDate() {
      try {
        const resp = await getDate()
        this.update(resp)
      } catch (err: unknown) {
        const error = err as ErrorType
        this.error = {
          messageError: error.message,
          status: error.response?.status
        }
      } finally {
        this.loading = false
      }
    },
    update(payload: IDate) {
      this.abbrTZ = payload.abbrTZ
      this.city = payload.city
      this.countryCode = payload.countryCode
      this.timezone = payload.timezone
    },
    newDate() {
      this.date = new Date()
    }
  },
})