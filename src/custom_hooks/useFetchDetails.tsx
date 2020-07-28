import {useEffect} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'
import fetchPokemonDetails from '../api/fetchPokemonDetails'

function useFetchDetails(shouldFetch, name, dispatch) {
  useEffect(() => {
    if (shouldFetch) {
      dispatch({
        type: 'SET_POKEMON_DETAILS',
        pokemonDetails: {name, isBeingFetched: true}
      })
      fetchPokemonDetails(name).then(res =>
        dispatch({type: 'SET_POKEMON_DETAILS', pokemonDetails: res})
      )
    }
  }, [shouldFetch])
}

export default useFetchDetails
