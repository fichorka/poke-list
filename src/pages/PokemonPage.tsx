import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import PokemonDetails from './PokemonDetails'
import {Link} from 'react-router-dom'

export const PokemonPage: React.FC = () => {
  // route: /pokemon/

  const match = useRouteMatch()

  return (
    <div className="poke-details">
      <Link to="/" className="back-btn">
        &lt; Go back
      </Link>
      <Switch>
        <Route path={`${match.path}/:name`}>
          <PokemonDetails />
        </Route>
        <Route path={`${match.path}`}>
          <h3 className="title">Please go back and select a Pokemon</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default PokemonPage
