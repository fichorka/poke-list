import {
  Pokemon,
  StoreAction,
  PokemonList,
  State,
  PokemonPageReturn,
  What
} from '../../types'
import {Dispatch} from 'react'

export function setPokemonPage(
  state: State,
  dispatch: Dispatch<StoreAction>,
  fetchResult: PokemonPageReturn
): void {
  if (fetchResult.fetchId === state.fetchId) {
    // update only if fetchIds match to pevent old responses from messing up the state
    dispatch({
      type: 'SET_POKEMON_PAGE',
      pokemonPage: fetchResult.page,
      index: state.curPage
    })
    dispatch({
      type: 'SET_TOTAL_ITEMS',
      totalItems: fetchResult.totalItems
    })
  }
}

export function setFilteredPokemonPage(
  fetchResult: PokemonList,
  dispatch: Dispatch<StoreAction>
): void {
  dispatch({
    type: 'SET_TOTAL_ITEMS',
    totalItems: fetchResult.length
  })
  dispatch({
    type: 'SET_ITEMS_PER_PAGE',
    itemsPerPage: fetchResult.length
  })
  dispatch({
    type: 'SET_POKEMON_PAGE',
    pokemonPage: fetchResult,
    index: 0
  })
}

export function setShouldFetch(shouldFetch: boolean): StoreAction {
  return {type: 'SET_SHOULD_FETCH', shouldFetch}
}

export function setCurPage(curPage: number): StoreAction {
  return {type: 'SET_CUR_PAGE', curPage}
}

export function setItemsPerPage(itemsPerPage: number): StoreAction {
  return {type: 'SET_ITEMS_PER_PAGE', itemsPerPage}
}

export function setModalState(
  isModalOpen: boolean,
  selectedModalType: string | null
): StoreAction {
  return {type: 'SET_MODAL_STATE', isModalOpen, selectedModalType}
}

export function setPokemonDetails(singlePokemon: Pokemon): StoreAction {
  return {type: 'SET_POKEMON_DETAILS', singlePokemon}
}

export function setPokemonByType(
  pokemonType: string,
  pokemonList: PokemonList
): StoreAction {
  return {type: 'SET_POKEMON_BY_TYPE', pokemonType, pokemonList}
}

export function setFilterValue(filterValue: string): StoreAction {
  return {type: 'SET_FILTER_VALUE', filterValue}
}

export function setFilterWhat(filterWhat: What): StoreAction {
  return {type: 'SET_FILTER_WHAT', filterWhat}
}

export function setSearchFilter(searchFilter: string): StoreAction {
  return {type: 'SET_SEARCH_FILTER', searchFilter}
}

export function setTypes(typeList: string[]): StoreAction {
  return {type: 'SET_TYPES', typeList: typeList}
}

export function setAbilities(abilityList: string[]): StoreAction {
  return {type: 'SET_ABILITIES', abilityList: abilityList}
}

export function setIsBeingFetched(isBeingFetched: boolean): StoreAction {
  return {type: 'SET_IS_BEING_FETCHED', isBeingFetched}
}
