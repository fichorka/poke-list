import React, {useContext, useState} from 'react'
import {useParams} from 'react-router-dom'
import StoreContext from '../store/StoreContext'
import useFetchDetails from '../custom_hooks/useFetchDetails'
import {setModalState} from '../store/action_creators/actions'
import '../css/pokemonDetailsStyle.css'

export const PokemonDetails: React.FC = () => {
  // route: /pokemon/:name

  // state local/global
  const {name} = useParams()
  const {state, dispatch} = useContext(StoreContext)
  const [isImgLoading, setIsImgLoading] = useState(true)
  const [imgUrlIndex, setImgUrlIndex] = useState(0)

  const shouldFetch: boolean =
    !state.pokemonDetails[name] ||
    (!state.pokemonDetails[name] && state.pokemonDetails[name].isBeingFetched)

  // custom hook for fetching Pokemon details
  useFetchDetails(shouldFetch, name, dispatch)

  const target = state.pokemonDetails[name]
  const pokemon = target && !target.isBeingFetched ? target : null

  function handleImgLoad() {
    setIsImgLoading(false)
  }

  function handleImgClick() {
    setIsImgLoading(true)
    if (pokemon && pokemon.imageUrl[imgUrlIndex + 1])
      setImgUrlIndex(imgUrlIndex + 1)
    else setImgUrlIndex(0)
  }

  // messy, might refactor this...
  return (
    <div>
      <h3 className="title">{name}</h3>
      <div
        className={
          isImgLoading
            ? 'image-container image-container--loading'
            : 'image-container '
        }
      >
        <img
          className={
            isImgLoading ? 'poke-image poke-image--loading' : 'poke-image '
          }
          onClick={handleImgClick}
          onLoad={handleImgLoad}
          src={pokemon ? pokemon.imageUrl[imgUrlIndex] : ''}
        ></img>
        {pokemon && pokemon.imageUrl.length > 1 && (
          <div className="img-label">{`${imgUrlIndex + 1} / ${
            pokemon.imageUrl.length
          }`}</div>
        )}
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
