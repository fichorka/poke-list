import React, {useContext} from 'react'
import '../css/PageControl.css'
import StoreContext from '../store/StoreContext'
import OptionList from './OptionList'
import '../css/ListControl.css'
import {
  setShouldFetch,
  setFilterValue,
  setFilterWhat
} from '../store/action_creators/actions'

export const FilterComponent: React.FC = () => {
  const {state, dispatch} = useContext(StoreContext)

  const {listFilter} = state
  const {what, value} = listFilter

  function handleWhatChange(value) {
    dispatch(setFilterWhat(value))
    if (value === 'all') {
      dispatch(setShouldFetch(true))
    }
  }

  function handleValueChange(value) {
    dispatch(setFilterValue(value))
  }

  console.log(state.totalItems, state.totalPages, state.pokemonPages)

  return (
    <>
      <div>
        <div className="control-label">Filter by</div>
        <select
          name="cur-page"
          className="list-control__item"
          value={what}
          onChange={evt => {
            handleWhatChange(evt.target.value)
          }}
        >
          <OptionList items={['all', 'type', 'ability']} />
        </select>
        {/* </div>

      <div>
        <div className="control-label">Filter by</div> */}
        <select
          disabled={state.listFilter.what === 'all'}
          name="cur-page"
          className="list-control__item"
          value={value}
          onChange={evt => {
            handleValueChange(evt.target.value)
          }}
        >
          <OptionList
            items={['', ...(state[state.listFilter.what + 'List'] || [])]}
          />
        </select>
      </div>
    </>
  )
}

export default FilterComponent
