const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_POKEMON_PAGE':
      const pokemonPages = state.pokemonPages.slice()
      pokemonPages[action.index] = action.pokemonList
      return {
        ...state,
        pokemonPages
      }
    case 'SET_ITEMS_PER_PAGE':
      return {
        ...state,
        itemsPerPage: action.itemsPerPage,
        pokemonPages: [],
        curPage: 0
      }
  }
}

export default reducer
