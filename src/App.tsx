import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PokemonPage from './pages/PokemonPage'
import HomePage from './pages/HomePage'
import './css/style1.css'

export const App: React.FC = () => {
  return (
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
  )
}

export default App
