import React, {useReducer} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PokemonPage from './pages/PokemonPage'
import HomePage from './pages/HomePage'
import './css/style1.css'
import StoreContext from './store/StoreContext'
import reducer from './store/reducer'
import initialState from './store/initialState'
import useFetch from './custom_hooks/useFetch'
import ModalComponent from './components/ModalComponent'
import useFetchModalPokemon from './custom_hooks/useFetchPokemonByType'
import fetchTypes from './api/fetchTypes'
import {setTypes, setAbilities} from './store/action_creators/actions'
import fetchAbilities from './api/fetchAbilities'
import useShouldFetch from './custom_hooks/useShouldFetch'

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useShouldFetch(state, dispatch)
  useFetch(state, dispatch)
  useFetchModalPokemon(state.selectedModalType, dispatch)
  if (!state.typeList.length)
    fetchTypes().then(res => {
      dispatch(setTypes(res))
    })
  if (!state.abilityList.length)
    fetchAbilities().then(res => {
      dispatch(setAbilities(res))
    })

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      <Router>
        <Switch>
          <Route path="/pokemon">
            <PokemonPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        {state.isModalOpen && <ModalComponent />}
      </Router>
    </StoreContext.Provider>
  )
}

export default App
