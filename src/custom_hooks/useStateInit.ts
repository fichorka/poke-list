import {useEffect, Dispatch} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'
import {State, StoreAction} from '../types'
import fetchPokemonByType from '../api/fetchPokemonByType'
import fetchPokemonByAbility from '../api/fetchPokemonByAbility'
import {
  setPokemonPage,
  setFilteredPokemonPage,
  setShouldFetch,
  setIsBeingFetched,
  setAbilities,
  setTypes
} from '../store/action_creators/actions'
import fetchTypes from '../api/fetchTypes'
import fetchAbilities from '../api/fetchAbilities'

function useStateInit(state: State, dispatch: Dispatch<StoreAction>): void {
  useEffect(() => {
    if (!state.typeList.length) {
      console.log('fetching types')
      fetchTypes().then(res => {
        dispatch(setTypes(res))
      })
    }
  }, [state.typeList])
  useEffect(() => {
    if (!state.abilityList.length) {
      console.log('fetching abilities')
      fetchAbilities().then(res => {
        dispatch(setAbilities(res))
      })
    }
  }, [state.abilityList])
}

export default useStateInit
