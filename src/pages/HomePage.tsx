import React from 'react'
import PokeList from '../components/PokeList'
import {Pokemon} from '../types'

export const HomePage: React.FC = () => {
  const items: Pokemon[] = [
    {name: 'sdf'},
    {name: 'gfsadhasu4dsg sdg s '},
    {name: 'ssddf'},
    {name: 'hjgfgd'},
    {name: 'dsgsgsdf'},
    {name: 'hghfdwd'}
  ]
  return (
    <>
      <PokeList items={items} />
    </>
  )
}

export default HomePage
