import fetchUtil from './fetchUtil'
import {PokemonList} from '../types'

const url = 'https://pokeapi.co/api/v2/ability/'

function fetchPokemonByAbility(
  name: string,
  fetchId: symbol
): Promise<{fetchId: symbol; pokemonList: PokemonList}> {
  const requestUrl = url + name + '/'
  return fetchUtil(requestUrl).then(res => ({
    fetchId,
    pokemonList: res.pokemon.map(p => ({name: p.pokemon.name}))
  }))
}

export default fetchPokemonByAbility
