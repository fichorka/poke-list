import {useEffect, Dispatch} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'
import {State, StoreAction} from '../types'
import fetchPokemonByType from '../api/fetchPokemonByType'
import fetchPokemonByAbility from '../api/fetchPokemonByAbility'
import {
  setPokemonPage,
  setFilteredPokemonPage,
  setShouldFetch
} from '../store/action_creators/actions'

function useFetch(state: State, dispatch: Dispatch<StoreAction>): void {
  useEffect(() => {
    if (!state.shouldFetch) return
    dispatch(setShouldFetch(false))

    switch (state.listFilter.what) {
      case 'all':
        fetchPokemonPage({
          page: state.curPage,
          itemsPerPage: state.itemsPerPage,
          fetchId: state.fetchId
        }).then(res => {
          setPokemonPage(state, dispatch, res)
        })
        break
      case 'type':
        fetchPokemonByType(state.listFilter.value).then(res => {
          setFilteredPokemonPage(res, dispatch)
        })
        break
      case 'ability':
        fetchPokemonByAbility(state.listFilter.value).then(res => {
          setFilteredPokemonPage(res, dispatch)
        })
    }
  }, [state.shouldFetch])
}

export default useFetch
