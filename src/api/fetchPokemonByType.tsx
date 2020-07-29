import fetchUtil from './fetchUtil'
import {Pokemon} from '../types'

const url = 'https://pokeapi.co/api/v2/type/'

function fetchPokemonByType(name: string): Promise<Pokemon[]> {
  const requestUrl = url + name + '/'
  return fetchUtil(requestUrl).then(res =>
    res.pokemon.map(p => ({name: p.pokemon.name}))
  )
}

export default fetchPokemonByType
