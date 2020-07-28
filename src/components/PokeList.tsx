import React from 'react'
import PokeListItem from './PokeListItem'
import {Pokemon} from '../types'

export const PokeList: React.FC<Props> = ({items}: Props) => {
  return (
    <div className="poke-list">
      {items.map((item, i) => (
        <PokeListItem key={'pokemon' + item.name} name={item.name} />
      ))}
    </div>
  )
}

export default PokeList

interface Props {
  items: Pokemon[]
}
