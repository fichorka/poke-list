import React, {useContext} from 'react'
import PokeList from '../components/PokeList'
import PageControl from '../components/PageControl'
import StoreContext from '../store/StoreContext'
import ListControl from '../components/ListControl'
import '../css/AppControlStyle.css'

export const HomePage: React.FC = () => {
  // route: /

  const {state} = useContext(StoreContext)

  return (
    <>
      <ListControl />
      <PageControl />
      <PokeList
        items={state.pokemonPages[state.curPage]}
        itemsPerPage={state.itemsPerPage}
      />
      <PageControl />
    </>
  )
}

export default HomePage
