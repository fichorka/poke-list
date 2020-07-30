import React, {useContext} from 'react'
import StoreContext from '../store/StoreContext'
import OptionList from './OptionList'
import {
  setItemsPerPage,
  setShouldFetch,
  setSearchFilter
} from '../store/action_creators/actions'
import FilterComponent from './FilterComponent'

export const ListControl: React.FC = () => {
  const {state, dispatch} = useContext(StoreContext)

  const {itemsPerPage, totalItems, searchFilter} = state

  function handleInputChange(value) {
    dispatch(setSearchFilter(value))
  }

  function handleChange(value) {
    dispatch(setItemsPerPage(parseInt(value)))
    dispatch(setShouldFetch(true))
  }
  return (
    <div className="control control--right">
      <FilterComponent />
      <input
        disabled={state.totalItems !== state.itemsPerPage}
        name="cur-page"
        className="ui-item control__item"
        value={searchFilter}
        onChange={evt => {
          handleInputChange(evt.target.value)
        }}
        placeholder="Search here"
      ></input>

      <div className="ui-wrapper control__item">
        <div className="control-label">Items per page</div>
        <select
          disabled={state.listFilter.what !== 'all'}
          name="cur-page"
          className="ui-item"
          value={itemsPerPage}
          onChange={evt => {
            handleChange(evt.target.value)
          }}
        >
          <OptionList items={[10, 20, 30, totalItems]} />
        </select>
      </div>
    </div>
  )
}

export default ListControl
