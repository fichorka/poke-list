import React from 'react'
import PokeListItem from './PokeListItem'
import {Pokemon} from '../types'
import PageControl from './PageControl'

export const PokeList: React.FC<Props> = ({items}: Props) => {
  return (
    <div className="poke-list">
      <PageControl totalPages={7} curPage={3} itemsPerPage={10} />
      {items.map((item, i) => (
        <PokeListItem key={'pokemon' + item.name} name={item.name} />
      ))}
      <PageControl totalPages={7} curPage={3} itemsPerPage={10} />
    </div>
  )
}

export default PokeList

interface Props {
  items: Pokemon[]
}
