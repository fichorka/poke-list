import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import PokemonDetails from '../components/PokemonDetails'
import {Link} from 'react-router-dom'

export const PokemonPage: React.FC = () => {
  const match = useRouteMatch()
  return (
    <div className="poke-details">
      <Link to="/">Go back</Link>
      <h1>Details</h1>
      <Switch>
        <Route path={`${match.path}/:name`}>
          <PokemonDetails />
        </Route>
        <Route path={`${match.path}`}>
          <h3>Please go back and select a Pokemon</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default PokemonPage
