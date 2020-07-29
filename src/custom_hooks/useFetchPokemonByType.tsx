import {useEffect} from 'react'
import fetchPokemonPage from '../api/fetchPokemonPage'
import fetchPokemonDetails from '../api/fetchPokemonDetails'
import fetchPokemonByType from '../api/fetchPokemonByType'

function useFetchPokemonByType(type, dispatch) {
  useEffect(() => {
    if (type) {
      fetchPokemonByType(type).then(res =>
        dispatch({
          type: 'SET_POKEMON_BY_TYPE',
          pokemonType: type,
          pokemonList: res
        })
      )
    }
  }, [type])
}

export default useFetchPokemonByType
