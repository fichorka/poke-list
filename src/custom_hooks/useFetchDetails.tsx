import {useEffect, Dispatch} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'
import fetchPokemonDetails from '../api/fetchPokemonDetails'
import {setPokemonDetails} from '../store/action_creators/actions'
import {StoreAction} from '../types'

function useFetchDetails(
  shouldFetch: boolean,
  name: string,
  dispatch: Dispatch<StoreAction>
): void {
  useEffect(() => {
    if (shouldFetch) {
      dispatch(setPokemonDetails({name, isBeingFetched: true}))
      fetchPokemonDetails(name).then(res => dispatch(setPokemonDetails(res)))
    }
  }, [shouldFetch])
}

export default useFetchDetails
