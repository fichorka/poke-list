import React from 'react'
import {Pokemon} from '../types'
import {Link} from 'react-router-dom'

export const PokeListItem: React.FC<Pokemon> = ({name, pokemonId}: Pokemon) => {
  return (
    <Link to={`/pokemon/${pokemonId || ''}`} className="poke-list__item">
      {name}
    </Link>
  )
}

export default PokeListItem
