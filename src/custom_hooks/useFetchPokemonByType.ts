import {useEffect, Dispatch} from 'react'
import fetchPokemonByType from '../api/fetchPokemonByType'
import {setPokemonByType} from '../store/action_creators/actions'
import {StoreAction} from '../types'

function useFetchModalPokemon(
  type: string,
  dispatch: Dispatch<StoreAction>
): void {
  useEffect(() => {
    if (type) {
      fetchPokemonByType(type, Symbol()).then(res =>
        dispatch(setPokemonByType(type, res.pokemonList))
      )
    }
  }, [type])
}

export default useFetchModalPokemon
