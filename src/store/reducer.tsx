import {State} from '../types'
import {ReducerAction, Reducer, SetStateAction} from 'react'

const reducer: Reducer<State, unknown> = (state, action) => {
  switch (action.type) {
    case 'SAVE_POKEMON_PAGE':
      const pokemonPages = state.pokemonPages.slice()
      pokemonPages[action.index] = action.pokemonList
      return {
        ...state,
        pokemonPages
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
      return {
        ...state,
        curPage: action.curPage
      }
  }
}

export default reducer
