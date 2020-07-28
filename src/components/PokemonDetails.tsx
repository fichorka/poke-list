import React from 'react'
import {useParams} from 'react-router-dom'

export const PokemonDetails: React.FC = () => {
  const {pokemonId} = useParams()
  return (
    <div>
      <h3>Pokemon Id: {pokemonId}</h3>
    </div>
  )
}

export default PokemonDetails
