import fetchUtil from './fetchUtil'
import {Pokemon} from '../types'

const url = 'https://pokeapi.co/api/v2/pokemon/'

function fetchPokemonDetails(name: string): Promise<Pokemon> {
  const requestUrl = url + name + '/'
  return fetchUtil(requestUrl).then(res => ({
    name: name,
    abilities: res.abilities.map(a => a.ability.name),
    types: res.types.map(t => t.type.name),
    imageUrl: Array.from(
      new Set([
        res.sprites.front_default,
        ...Object.values(res.sprites).filter(v => typeof v === 'string')
      ])
    ),
    weight: res.weight,
    height: res.height
  }))
}

export default fetchPokemonDetails
