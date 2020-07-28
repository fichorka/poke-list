import React, {useReducer} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PokemonPage from './pages/PokemonPage'
import HomePage from './pages/HomePage'
import './css/style1.css'
import StoreContext from './store/StoreContext'
import storeInstance from './store'
import reducer from './store/reducer'
import initialState from './store/initialState'
import StoreContextProvider from './store/StoreContextProvider'

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
      </Router>
    </StoreContext.Provider>
  )
}

export default App
