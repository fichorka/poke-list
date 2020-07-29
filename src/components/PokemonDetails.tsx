import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import StoreContext from '../store/StoreContext'
import useFetchDetails from '../custom_hooks/useFetchDetails'

export const PokemonDetails: React.FC = () => {
  const {name} = useParams()
  const {state, dispatch} = useContext(StoreContext)

  const shouldFetch =
    state.pokemonDetails[name] && !state.pokemonDetails[name].isBeingFetched

  useFetchDetails(!shouldFetch, name, dispatch)

  const target = state.pokemonDetails[name]
  const pokemon = target && !target.isBeingFetched ? target : null

  console.log(pokemon)
  return (
    <div>
      <h3>Pokemon name: {pokemon && pokemon.name}</h3>
      <div>
        <div>Abilities: {pokemon && pokemon.abilities.join(', ')}</div>
        <div>
          Types:{' '}
          {pokemon &&
            pokemon.types.map((t, i, arr) => (
              <>
                <span
                  key={t + i}
                  className="modal-opener"
                  onClick={() => {
                    dispatch({
                      type: 'SET_MODAL_STATE',
                      isModalOpen: true,
                      selectedModalType: t
                    })
                  }}
                >
                  {t}
                </span>
                {i === arr.length - 1 ? '' : ', '}
              </>
            ))}
        </div>
        <div>Weight: {pokemon && pokemon.weight}</div>
        <div>Height: {pokemon && pokemon.height}</div>
      </div>
      {pokemon && <img src={pokemon.imageUrl}></img>}
    </div>
  )
}

export default PokemonDetails
