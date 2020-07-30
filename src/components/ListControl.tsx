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
  // Features filtering, serching, and itemsPerPage

  const {
    state: {itemsPerPage, totalItems, searchFilter, listFilter},
    dispatch
  } = useContext(StoreContext)

  function handleInputChange(value) {
    // search
    dispatch(setSearchFilter(value))
  }

  function handleQuantityChange(value) {
    // itemsPerPage
    dispatch(setItemsPerPage(parseInt(value)))
    dispatch(setShouldFetch(true))
  }
  return (
    <div className="control control--right">
      <FilterComponent />
      <input
        size={15}
        maxLength={20}
        disabled={totalItems !== itemsPerPage}
        name="cur-page"
        className="ui-item ui-item--right control__item"
        value={searchFilter}
        onChange={evt => {
          handleInputChange(evt.target.value)
        }}
        placeholder="Search here"
      ></input>

      <div className="ui-wrapper control__item">
        <div className="control-label">Items per page</div>
        <select
          disabled={listFilter.what !== 'all'}
          name="cur-page"
          className="ui-item"
          value={itemsPerPage}
          onChange={evt => {
            handleQuantityChange(evt.target.value)
          }}
        >
          <OptionList items={[10, 20, 30, totalItems]} />
        </select>
      </div>
    </div>
  )
}

export default ListControl
