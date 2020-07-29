import {State} from '../types'

const initialState = {
  pokemonPages: [],
  pokemonByType: [],
  selectedModalType: null,
  itemsPerPage: 10,
  curPage: 0,
  totalPages: 1,
  totalItems: 0,
  shouldFetch: true,
  pokemonDetails: {},
  isModalOpen: false,
  listState: 0,
  listFilter: {
    what: 'all',
    value: ''
  }
} as State

export default initialState
