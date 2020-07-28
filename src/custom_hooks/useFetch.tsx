import {useEffect} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'

function useFetch(state, dispatch) {
  useEffect(() => {
    if (state.shouldFetch) {
      fetchPokemonPage(state.curPage, state.itemsPerPage, state.fetchId).then(
        res => {
          if (res.fetchId === state.fetchId) {
            // update only if fetchIds match to avoid late responses
            dispatch({
              type: 'SET_POKEMON_PAGE',
              pokemonPage: res.page,
              index: state.curPage
            })
            dispatch({
              type: 'SET_TOTAL_ITEMS',
              totalItems: res.totalItems
            })
          }
        }
      )
    }
  }, [state.shouldFetch, state.curPage])
}

export default useFetch
