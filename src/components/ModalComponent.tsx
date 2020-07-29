import React, {useContext} from 'react'
import StoreContext from '../store/StoreContext'
import '../css/modal.css'
import {setModalState} from '../store/action_creators/actions'

export const ModalComponent: React.FC = () => {
  const {state, dispatch} = useContext(StoreContext)
  const pokemonList = state.pokemonByType.filter(
    p => p.type === state.selectedModalType
  )[0]
  const pokemon = pokemonList ? pokemonList.pokemon : []
  debugger
  return (
    <div className="modal-container">
      <div className="modal">
        <div
          className="modal__control"
          onClick={() => {
            dispatch(setModalState(false, null))
          }}
        >
          Close
        </div>
        <div className="modal-list">
          {pokemon.map((p, i) => (
            <div key={p.name + i} className="modal__row">
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModalComponent
