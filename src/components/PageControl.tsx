import React, {useContext} from 'react'
import StoreContext from '../store/StoreContext'
import OptionList from './OptionList'
import {setCurPage} from '../store/action_creators/actions'

export const PageControl: React.FC = () => {
  const {
    state: {totalPages, curPage},
    dispatch
  } = useContext(StoreContext)

  function handleChange(value) {
    dispatch(setCurPage(parseInt(value)))
  }

  return (
    <div className="control control--center control--page">
      <div
        className="ui-item control__item"
        onClick={() => {
          handleChange(curPage - 1)
        }}
      >
        {'<'}
      </div>
      <select
        name="cur-page"
        className="ui-item control__item"
        value={curPage}
        onChange={evt => {
          handleChange(evt.target.value)
        }}
      >
        <OptionList totalPages={totalPages} />
      </select>
      <div
        className="ui-item control__item"
        onClick={() => {
          handleChange(curPage + 1)
        }}
      >
        {'>'}
      </div>
    </div>
  )
}

export default PageControl
