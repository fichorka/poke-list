import React from 'react'
import PokeListItem from './PokeListItem'
import {Pokemon} from '../types'

export const PokeList: React.FC<Props> = ({items, itemsPerPage}: Props) => {
  const result = []

  for (let i = 0; i < itemsPerPage; i++) {
    const item = items && items[i] ? items[i] : null
    const name = item ? item.name : ''
    const pokemonId = item ? item.id : null
    result.push(
      <PokeListItem key={'pokemon' + i} name={name} pokemonId={pokemonId} />
    )
  }
  return <div className="poke-list">{result}</div>
}

export default PokeList

interface Props {
  items: Pokemon[]
  itemsPerPage: number
}
