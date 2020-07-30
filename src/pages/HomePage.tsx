import React, {useContext} from 'react'
import PokeList from '../components/PokeList'
import {Pokemon} from '../types'
import PageControl from '../components/PageControl'
import StoreContext from '../store/StoreContext'
import ListControl from '../components/ListControl'
import FilterComponent from '../components/FilterComponent'
import SearchBar from '../components/SearchBar'

export const HomePage: React.FC = () => {
  const {state} = useContext(StoreContext)

  return (
    <>
      <ListControl />
      <PageControl
        totalPages={state.totalPages}
        curPage={state.curPage}
        itemsPerPage={state.itemsPerPage}
      />
      <PokeList
        items={state.pokemonPages[state.curPage]}
        itemsPerPage={state.itemsPerPage}
      />
      <PageControl totalPages={state.totalPages} curPage={state.curPage} />
    </>
  )
}

export default HomePage
