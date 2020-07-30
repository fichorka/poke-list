import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import StoreContext from '../store/StoreContext'
import useFetchDetails from '../custom_hooks/useFetchDetails'
import {setModalState} from '../store/action_creators/actions'
import '../css/pokemonDetailsStyle.css'

export const PokemonDetails: React.FC = () => {
  const {name} = useParams()
  const {state, dispatch} = useContext(StoreContext)
  const [isImgLoading, setIsImgLoading] = useState(true)

  const shouldFetch =
    !state.pokemonDetails[name] ||
    (!state.pokemonDetails[name] && state.pokemonDetails[name].isBeingFetched)

  useFetchDetails(shouldFetch, name, dispatch)

  const target = state.pokemonDetails[name]
  const pokemon = target && !target.isBeingFetched ? target : null

  function handleLoad() {
    setIsImgLoading(false)
  }

  return (
    <div>
      <h3 className={pokemon ? 'title' : 'title title--loading'}>
        {pokemon && pokemon.name}
      </h3>
      <div
        className={
          isImgLoading
            ? 'image-container image-container--loading'
            : 'image-container '
        }
      >
        {isImgLoading && <div className="spinner"></div>}
        <img
          className={
            isImgLoading ? 'poke-image poke-image--loading' : 'poke-image '
          }
          onLoad={handleLoad}
          src={pokemon ? pokemon.imageUrl : ''}
        ></img>
      </div>
      <div
        className={
          pokemon ? 'feature-list ' : 'feature-list feature-list--loading'
        }
      >
        <div className="feature-list__item">
          <span className="text--bold">Abilities:</span>{' '}
          {pokemon && pokemon.abilities.join(', ')}
        </div>
        <div className="feature-list__item">
          <span className="text--bold">Types:</span>{' '}
          {pokemon &&
            pokemon.types.map((t, i, arr) => (
              <React.Fragment key={i}>
                <span
                  key={t + i}
                  className="modal-opener"
                  onClick={() => {
                    dispatch(setModalState(true, t))
                  }}
                >
                  {t}
                </span>
                {i === arr.length - 1 ? '' : ', '}
              </React.Fragment>
            ))}
        </div>
        <div className="feature-list__item">
          <span className="text--bold">Weight:</span>{' '}
          {pokemon && pokemon.weight}
        </div>
        <div className="feature-list__item">
          <span className="text--bold">Height:</span>{' '}
          {pokemon && pokemon.height}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
