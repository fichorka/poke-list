import {State} from '../types'

const initialState = {
  pokemonPages: [[{name: 'dsf'}], [], [], []],
  itemsPerPage: 10,
  curPage: 0,
  totalPages: 1,
  totalItems: 0
} as State

export default initialState
