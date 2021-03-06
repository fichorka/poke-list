import {Dispatch} from 'react'

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
  imageUrl?: string[]
  isBeingFetched?: boolean
}

export interface State {
  pokemonPages: PokemonPages
  pokemonByType: Array<{type: string; pokemon: Pokemon[]}>
  selectedModalType: string | null
  itemsPerPage: ItemsPerPage
  curPage: curPage
  shouldFetch: boolean
  totalItems: number
  totalPages: TotalPages
  pokemonDetails: {[key: string]: Pokemon}
  fetchId?: symbol
  isModalOpen: boolean
  listFilter: ListFilter | null
  searchFilter: string
  typeList: string[]
  abilityList: string[]
  isBeingFetched: boolean
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
  singlePokemon?: Pokemon
  isModalOpen?: boolean
  selectedModalType?: string | null
  pokemonType?: string
  pokemonList?: PokemonList
  filterValue?: string
  filterWhat?: What
  shouldFetch?: boolean
  searchFilter?: string
  typeList?: string[]
  abilityList?: string[]
  isBeingFetched?: boolean
}

type TotalItems = number

export interface PokemonPageReturn {
  totalItems: number
  page: PokemonList
  fetchId: symbol
}

export interface ListFilter {
  what: What
  value: string
}

export type What = 'all' | 'name' | 'type' | 'ability'

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
