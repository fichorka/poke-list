import React, {useContext} from 'react'
import StoreContext from '../store/StoreContext'
import {setSearchFilter} from '../store/action_creators/actions'

export const SearchBar: React.FC = () => {
  const {state, dispatch} = useContext(StoreContext)

  const {searchFilter} = state

  function handleInputChange(value) {
    dispatch(setSearchFilter(value))
  }

  return (
    <div className="list-control">
      {/* <div
        className={
          'control-label' + (state.totalPages === 1 && state.totalItems > 1)
            ? ''
            : 'disabled'
        }
      >
        Search
      </div> */}
      {/* <form
        action=""
        onSubmit={evt => {
          evt.preventDefault
        }}
      > */}
      <input
        disabled={state.totalItems !== state.itemsPerPage}
        name="cur-page"
        className="list-control__item"
        value={searchFilter}
        onChange={evt => {
          handleInputChange(evt.target.value)
        }}
        placeholder="Search here"
      ></input>
      {/* </form> */}
    </div>
  )
}

export default SearchBar
