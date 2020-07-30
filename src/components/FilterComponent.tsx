import React, {useContext} from 'react'
import '../css/PageControl.css'
import StoreContext from '../store/StoreContext'
import OptionList from './OptionList'
import '../css/ListControl.css'
import {
  setItemsPerPage,
  setListFilter,
  setShouldFetch,
  setSearchFilter,
  setFilterValue,
  setFilterWhat
} from '../store/action_creators/actions'
import {ListFilter} from '../types'

export const FilterComponent: React.FC = () => {
  const {state, dispatch} = useContext(StoreContext)

  const {listFilter, searchFilter} = state
  const {what, value} = listFilter

  function handleWhatChange(value) {
    dispatch(setFilterWhat(value))
    if (value === 'all') {
      dispatch(setShouldFetch(true))
    }
  }

  function handleValueChange(value) {
    dispatch(setFilterValue(value))
    // debugger
    // if (state.listFilter.what && state.listFilter.value)
    //   dispatch(setShouldFetch(true))
  }

  function handleInputChange(value) {
    dispatch(setSearchFilter(value))
  }

  console.log(state.listFilter)

  return (
    <div className="list-control">
      <div className="control-label">Filter by</div>
      <select
        name="cur-page"
        className="list-control__quantity"
        value={what}
        onChange={evt => {
          handleWhatChange(evt.target.value)
        }}
      >
        <OptionList items={['all', 'type', 'ability']} />
      </select>

      <div
        className={
          'control-label' + (what === 'type' || what === 'ability')
            ? ''
            : 'disabled'
        }
      >
        Filter by
      </div>
      <select
        name="cur-page"
        className="list-control__quantity"
        value={value}
        onChange={evt => {
          handleValueChange(evt.target.value)
        }}
      >
        <OptionList
          items={['', ...(state[state.listFilter.what + 'List'] || [])]}
        />
      </select>

      <div
        className={
          'control-label' + (state.totalPages === 1 && state.totalItems > 1)
            ? ''
            : 'disabled'
        }
      >
        Search
      </div>
      <form
        action=""
        onSubmit={evt => {
          evt.preventDefault
        }}
      >
        <input
          disabled={state.totalPages !== 1 && state.totalItems > 1}
          name="cur-page"
          className="list-control__quantity"
          value={searchFilter}
          onChange={evt => {
            handleInputChange(evt.target.value)
          }}
          placeholder="Type Pokemon name here"
        ></input>
      </form>
    </div>
  )
}

export default FilterComponent
