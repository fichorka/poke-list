import {State, StoreAction} from '../types'
import {Reducer} from 'react'

const reducer: Reducer<State, StoreAction> = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON_PAGE':
      const pokemonPages = state.pokemonPages.slice()
      pokemonPages[action.index] = action.pokemonPage
      return {
        ...state,
        pokemonPages,
        shouldFetch: false
      }
    case 'SET_ITEMS_PER_PAGE': {
      const totalPages = Math.ceil(state.totalItems / action.itemsPerPage)
      return {
        ...state,
        totalPages,
        itemsPerPage: action.itemsPerPage,
        pokemonPages: [],
        curPage: 0
      }
    }
    case 'SET_TOTAL_ITEMS': {
      const totalPages = Math.ceil(action.totalItems / state.itemsPerPage)
      return {
        ...state,
        totalPages,
        totalItems: action.totalItems
      }
    }
    case 'SET_CUR_PAGE':
      if (action.curPage >= state.totalPages || action.curPage < 0) return state
      const page = state.pokemonPages[action.curPage]
      const shouldFetch = page ? true : true
      const fetchId = Symbol()
      return {
        ...state,
        curPage: action.curPage,
        shouldFetch,
        fetchId
      }
  }
}

export default reducer
