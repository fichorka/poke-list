import {useEffect, Dispatch} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'
import {State, StoreAction} from '../types'
import fetchPokemonByType from '../api/fetchPokemonByType'
import fetchPokemonByAbility from '../api/fetchPokemonByAbility'
import {
  setPokemonPage,
  setFilteredPokemonPage,
  setShouldFetch,
  setIsBeingFetched
} from '../store/action_creators/actions'

function useFetch(state: State, dispatch: Dispatch<StoreAction>): void {
  useEffect(() => {
    if (!state.shouldFetch) return

    dispatch(setShouldFetch(false))
    dispatch(setIsBeingFetched(true))

    switch (state.listFilter.what) {
      // check which pokemon list to fetch: /pokemon/, /type/{name}/, or /ability/{name}/
      case 'all':
        fetchPokemonPage({
          page: state.curPage,
          itemsPerPage: state.itemsPerPage,
          fetchId: state.fetchId
        }).then(res => {
          if (res.fetchId === state.fetchId) {
            // check whether fetchIds match to avoid overlapping responses
            setPokemonPage(state, dispatch, res)
            dispatch(setIsBeingFetched(false))
          }
        })
        break
      case 'type':
        fetchPokemonByType(state.listFilter.value, state.fetchId).then(res => {
          if (res.fetchId === state.fetchId) {
            setFilteredPokemonPage(res.pokemonList, dispatch)
            dispatch(setIsBeingFetched(false))
          }
        })
        break
      case 'ability':
        fetchPokemonByAbility(state.listFilter.value, state.fetchId).then(
          res => {
            if (res.fetchId === state.fetchId) {
              setFilteredPokemonPage(res.pokemonList, dispatch)
              dispatch(setIsBeingFetched(false))
            }
          }
        )
    }
  }, [state.shouldFetch])
}

export default useFetch
