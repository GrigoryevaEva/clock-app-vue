import { defineStore } from 'pinia'
import { Actions, IQuoteStore } from './types'

export const useQuoteStore = defineStore('quote', {
  state: () => <IQuoteStore>({ 
    quote: '', 
    author: ''
   }),
  getters: {},
  actions: <Actions>{
    fetchQuote() {},
  },
})