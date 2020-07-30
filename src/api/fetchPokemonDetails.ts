import fetchUtil from './fetchUtil'
import {Pokemon} from '../types'

const url = 'https://pokeapi.co/api/v2/pokemon/'

function fetchPokemonDetails(name: string): Promise<Pokemon> {
  const requestUrl = url + name + '/'
  return fetchUtil(requestUrl).then(res => ({
    name: name,
    abilities: res.abilities.map(a => a.ability.name),
    types: res.types.map(t => t.type.name),
    imageUrl: res.sprites.front_default,
    weight: res.weight,
    height: res.height
  }))
}

export default fetchPokemonDetails
