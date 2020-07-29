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
      fetchPokemonByType(type).then(res =>
        dispatch(setPokemonByType(type, res))
      )
    }
  }, [type])
}

export default useFetchModalPokemon
