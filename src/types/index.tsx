import {Dispatch, ReducerAction, Reducer} from 'react'

export type PokemonPages = PokemonList[]

export type PokemonList = Pokemon[]

export type ItemsPerPage = number

export type curPage = number

export type TotalPages = number

export interface Pokemon {
  name: string
  id?: number
  pokemonId?: number
}

export interface State {
  pokemonPages: PokemonPages
  itemsPerPage: ItemsPerPage
  curPage: curPage
  totalItems: number
  totalPages: TotalPages
  fetchId?: symbol
}

export interface Store {
  state: State
  dispatch: Dispatch<ReducerAction<Reducer<unknown, unknown>>>
}

export interface StoreAction {
  type: string
  index?: number
  pokemonPage?: PokemonList
  itemsPerPage?: number
  totalItems?: number
  curPage?: number
}
