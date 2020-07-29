import {Dispatch, ReducerAction, Reducer} from 'react'

export type PokemonPages = PokemonList[]

export type PokemonList = Pokemon[]

export type ItemsPerPage = number

export type curPage = number

export type TotalPages = number

export interface Pokemon {
  name: string
  id?: number
  abilities?: string[]
  types?: string[]
  weight?: number
  height?: number
  imageUrl?: string
  isBeingFetched?: boolean
}

export interface State {
  pokemonPages: PokemonPages
  pokemonByType: Array<{type: string; pokemon: Pokemon[]}>
  selectedModalType: string | null
  itemsPerPage: ItemsPerPage
  curPage: curPage
  totalItems: number
  totalPages: TotalPages
  pokemonDetails: PokemonList
  fetchId?: symbol
  isModalOpen: boolean
}

export interface Store {
  state: State
  dispatch: Dispatch<StoreAction>
}

export interface StoreAction {
  type: string
  index?: number
  pokemonPage?: PokemonList
  itemsPerPage?: number
  totalItems?: number
  curPage?: number
  pokemonDetails?: Pokemon
  isModalOpen?: boolean
  selectedModalType?: string | null
  pokemonType?: string
  pokemonList?: PokemonList
}

export interface PokeApiResponse {
  count?: number
  results?: Array<{
    name: string
  }>
  name?: string
  abilities?: Array<{
    ability: {
      name: string
    }
  }>
  types?: Array<{
    type: {
      name: string
    }
  }>
  weight: number
  height: number
  sprites?: {
    front_default: string
  }
  pokemon: Array<{pokemon: {name: string}}>
}
