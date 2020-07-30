import fetchUtil from './fetchUtil'
import {PokemonList} from '../types'

const url = 'https://pokeapi.co/api/v2/type/'

function fetchPokemonByType(
  name: string,
  fetchId: symbol
): Promise<{fetchId: symbol; pokemonList: PokemonList}> {
  const requestUrl = url + name + '/'
  return fetchUtil(requestUrl).then(res => ({
    fetchId,
    pokemonList: res.pokemon.map(p => ({name: p.pokemon.name}))
  }))
}

export default fetchPokemonByType
