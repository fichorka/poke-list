import {PokemonList} from '../types'

export function applyFilter(items: PokemonList, filter: string): PokemonList {
  return items.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()))
}
