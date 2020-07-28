import {Dispatch, ReducerAction, Reducer} from 'react'

export type PokemonPages = PokemonList[]

export type PokemonList = Pokemon[]

export type ItemsPerPage = number

export type curPage = number

export type TotalPages = number

export interface Pokemon {
  name: string
}

export interface State {
  pokemonPages: PokemonPages
  itemsPerPage: ItemsPerPage
  curPage: curPage
  totalPages: TotalPages
}

export interface Store {
  state: State
  dispatch: Dispatch<ReducerAction<Reducer<unknown, unknown>>>
}
