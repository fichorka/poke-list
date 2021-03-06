import React, {useContext} from 'react'
import StoreContext from '../store/StoreContext'
import OptionList from './OptionList'
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

  return (
    <>
      <div className="ui-wrapper control__item">
        <div className="control-label">Filter by</div>
        <select
          name="cur-page"
          className="ui-item"
          value={what}
          onChange={evt => {
            handleWhatChange(evt.target.value)
          }}
        >
          <OptionList items={['all', 'type', 'ability']} />
        </select>
      </div>
      <div className="control__item">
        <select
          disabled={state.listFilter.what === 'all'}
          name="cur-page"
          className="ui-item"
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
