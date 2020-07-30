import React, {useContext} from 'react'
import PokeListItem from './PokeListItem'
import {Pokemon} from '../types'
import StoreContext from '../store/StoreContext'
import {applyFilter} from '../utils'

export const PokeList: React.FC<Props> = ({items, itemsPerPage}: Props) => {
  const {state} = useContext(StoreContext)
  const result = []

  // filtering
  const filteredItems = state.searchFilter.length
    ? applyFilter(items, state.searchFilter)
    : items

  // items
  for (let i = 0; i < itemsPerPage; i++) {
    const item = filteredItems && filteredItems[i] ? filteredItems[i] : null
    const name = item ? item.name : ''
    result.push(<PokeListItem key={'pokemon' + i} name={name} />)
  }
  return <div className="poke-list">{result}</div>
}

export default PokeList

interface Props {
  items: Pokemon[]
  itemsPerPage: number
}
