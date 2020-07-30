import React, {useContext} from 'react'
import PokeList from '../components/PokeList'
import PageControl from '../components/PageControl'
import StoreContext from '../store/StoreContext'
import ListControl from '../components/ListControl'
import {AppControl} from '../components/AppControl'

export const HomePage: React.FC = () => {
  const {state} = useContext(StoreContext)

  return (
    <>
      <AppControl />
      <PokeList
        items={state.pokemonPages[state.curPage]}
        itemsPerPage={state.itemsPerPage}
      />
      <PageControl totalPages={state.totalPages} curPage={state.curPage} />
    </>
  )
}

export default HomePage
