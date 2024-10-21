import { defineStore } from 'pinia'
import { Actions, Getters, IDateStore } from './types'

export const useDateStore = defineStore('quote', {
  state: () => <IDateStore>({ 
    date: new Date(), 

    abbr: '',
    city: '',
    countryCode: '',
    timezone: '',
   }),

  getters: <Getters>{
    dayYear(state) {
      const date = state.date

      return Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    },

    dayWeek(state) {
      return state.date.getDay() + 1
    },

    weekYear(state) {
      const date = state.date

      date.setHours(0, 0, 0, 0)
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)

      const week1 = new Date(date.getFullYear(), 0, 4)

      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
    },

    location(state) {
      return `in ${state.city}, ${state.countryCode}`.toUpperCase()
    },

    dayTime(state) {
      const hours = state.date.getHours()
      let dayTime = 'day'

      if (hours > 3 && hours < 12) dayTime = 'morning' 
      if (hours > 11 && hours < 17) dayTime = 'afternoon' 
      if (hours > 16 && hours < 24) dayTime = 'evening' 
      if (hours >= 0 && hours < 12) dayTime = 'night' 

      return `good ${dayTime}, it's currently`
    },
  },

  actions: <Actions>{
    fetchDate() {},
  },
})