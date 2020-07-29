import React, {useContext} from 'react'
import '../css/PageControl.css'
import StoreContext from '../store/StoreContext'
import OptionList from './OptionList'
import '../css/ListControl.css'
import {setItemsPerPage} from '../store/action_creators/actions'

export const ListControl: React.FC = () => {
  const {state, dispatch} = useContext(StoreContext)

  const {itemsPerPage, totalItems} = state

  function handleChange(value) {
    dispatch(setItemsPerPage(parseInt(value)))
  }
  return (
    <div className="list-control">
      <div className="control-label">Items per page</div>
      <select
        name="cur-page"
        className="list-control__quantity"
        value={itemsPerPage}
        onChange={evt => {
          handleChange(evt.target.value)
        }}
      >
        <OptionList items={[10, 20, 30, totalItems]} />
      </select>
    </div>
  )
}

export default ListControl
