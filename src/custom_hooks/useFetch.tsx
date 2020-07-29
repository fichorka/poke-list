import {useEffect, Dispatch} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'
import {State, StoreAction} from '../types'
import fetchPokemonByType from '../api/fetchPokemonByType'
import fetchPokemonByAbility from '../api/fetchPokemonByAbility'
import fetchPokemonDetails from '../api/fetchPokemonDetails'
import {setSinglePokemonToPage} from '../store/action_creators'

function useFetch(state: State, dispatch: Dispatch<StoreAction>): void {
  useEffect(() => {
    if (!state.shouldFetch) return
    if (state.listFilter.what === 'all') {
      fetchPokemonPage({
        page: state.curPage,
        itemsPerPage: state.itemsPerPage,
        fetchId: state.fetchId
      }).then(res => {
        if (res.fetchId === state.fetchId) {
          // update only if fetchIds match to pevent old responses from messing up the state
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
      })
    } else if (state.listFilter.what === 'name') {
      const targetPokemon = state.pokemonDetails[state.listFilter.value]
      if (targetPokemon) {
        setSinglePokemonToPage(targetPokemon, dispatch)
      } else {
        fetchPokemonDetails(state.listFilter.value).then(res => {
          setSinglePokemonToPage(res, dispatch)
        })
      }
    } else if (state.listFilter.what === 'type') {
      fetchPokemonByType(state.listFilter.value).then(res => {
        dispatch({
          type: 'SET_TOTAL_ITEMS',
          totalItems: res.length
        })
        dispatch({
          type: 'SET_ITEMS_PER_PAGE',
          itemsPerPage: res.length
        })
        dispatch({
          type: 'SET_POKEMON_PAGE',
          pokemonPage: res,
          index: 0
        })
      })
    } else if (state.listFilter.what === 'ability') {
      fetchPokemonByAbility(state.listFilter.value).then(res => {
        dispatch({
          type: 'SET_TOTAL_ITEMS',
          totalItems: res.length
        })
        dispatch({
          type: 'SET_ITEMS_PER_PAGE',
          itemsPerPage: res.length
        })
        dispatch({
          type: 'SET_POKEMON_PAGE',
          pokemonPage: res,
          index: 0
        })
      })
    }
  }, [state.shouldFetch, state.curPage])
}

export default useFetch
