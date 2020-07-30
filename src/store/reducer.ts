import {State, StoreAction} from '../types'
import {Reducer} from 'react'

export default function(state: State, action: StoreAction): State {
  // console.log(action.type)
  switch (action.type) {
    case 'SET_IS_BEING_FETCHED':
      return {
        ...state,
        isBeingFetched: action.isBeingFetched
      }
    case 'SET_SHOULD_FETCH': {
      const fetchId = action.shouldFetch ? Symbol() : state.fetchId
      return {
        ...state,
        shouldFetch: action.shouldFetch,
        fetchId
      }
    }
    case 'SET_POKEMON_PAGE':
      const pokemonPages = state.pokemonPages.slice()
      pokemonPages[action.index] = action.pokemonPage
      return {
        ...state,
        pokemonPages
      }
    case 'SET_ITEMS_PER_PAGE': {
      if (action.itemsPerPage <= 0 || action.itemsPerPage > state.totalItems)
        return state
      const totalPages = Math.ceil(state.totalItems / action.itemsPerPage)
      return {
        ...state,
        totalPages,
        // shouldFetch: true,
        fetchId: Symbol(),
        itemsPerPage: action.itemsPerPage,
        pokemonPages: [],
        curPage: 0,
        searchFilter: ''
      }
    }
    case 'SET_TOTAL_ITEMS': {
      const totalPages = Math.ceil(action.totalItems / state.itemsPerPage)
      return {
        ...state,
        totalPages,
        totalItems: action.totalItems,
        searchFilter: ''
      }
    }
    case 'SET_CUR_PAGE': {
      if (action.curPage >= state.totalPages || action.curPage < 0) return state

      const page = state.pokemonPages[action.curPage]
      const shouldFetch = page ? false : true
      let fetchId = state.fetchId
      if (shouldFetch) fetchId = Symbol()
      return {
        ...state,
        curPage: action.curPage,
        shouldFetch,
        fetchId,
        searchFilter: ''
      }
    }
    case 'SET_POKEMON_DETAILS':
      return {
        ...state,
        pokemonDetails: {
          ...state.pokemonDetails,
          [action.singlePokemon.name]: action.singlePokemon
        }
      }
    case 'SET_MODAL_STATE':
      return {
        ...state,
        isModalOpen: action.isModalOpen,
        selectedModalType: action.selectedModalType
      }
    case 'SET_POKEMON_BY_TYPE': {
      if (
        state.pokemonByType.filter(pbt => pbt.type === action.pokemonType)
          .length
      )
        return state
      else
        return {
          ...state,
          pokemonByType: [
            ...state.pokemonByType,
            {type: action.pokemonType, pokemon: action.pokemonList}
          ]
        }
    }
    case 'SET_FILTER_WHAT':
      const value = action.filterWhat === 'all' ? '' : state.listFilter.value

      return {
        ...state,
        curPage: 0,
        totalItems: 0,
        pokemonPages: [],
        itemsPerPage: 10,
        totalPages: 1,
        searchFilter: '',
        listFilter: {
          what: action.filterWhat,
          value: value
        }
      }
    case 'SET_FILTER_VALUE': {
      const totalItems = 0
      return {
        ...state,
        pokemonPages: [],
        totalItems,
        searchFilter: '',
        listFilter: {
          ...state.listFilter,
          value: action.filterValue
        }
      }
    }
    case 'SET_SEARCH_FILTER':
      return {
        ...state,
        searchFilter: action.searchFilter
      }
    case 'SET_TYPES':
      return {
        ...state,
        typeList: action.typeList
      }
    case 'SET_ABILITIES':
      return {
        ...state,
        abilityList: action.abilityList
      }
    default:
      console.log(action)
      debugger
  }
}

// export default reducer
