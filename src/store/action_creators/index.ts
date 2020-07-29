import {Pokemon, StoreAction} from '../../types'
import {Dispatch} from 'react'

export function setSinglePokemonToPage(
  pokemon: Pokemon,
  dispatch: Dispatch<StoreAction>
): void {
  dispatch({
    type: 'SET_TOTAL_ITEMS',
    totalItems: 1
  })
  dispatch({
    type: 'SET_ITEMS_PER_PAGE',
    itemsPerPage: 1
  })
  dispatch({type: 'SET_POKEMON_PAGE', pokemonPage: [pokemon], index: 0})
  dispatch({type: 'SET_POKEMON_DETAILS', singlePokemon: pokemon})
}
