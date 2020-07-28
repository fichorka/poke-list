import React, {useContext} from 'react'
import '../css/PageControl.css'
import StoreContext from '../store/StoreContext'
import {State, Store} from '../types'
import OptionList from './OptionList'

export const PageControl: React.FC<Props> = ({totalPages, curPage}: Props) => {
  const {dispatch} = useContext(StoreContext)

  function handleChange(value) {
    console.log(value)
    dispatch({type: 'SET_CUR_PAGE', curPage: parseInt(value)})
  }
  return (
    <div className="page-control">
      <div
        className="page-control__btn"
        onClick={() => {
          handleChange(curPage - 1)
        }}
      >
        {'<'}
      </div>
      <select
        name="cur-page"
        className="page-control__select"
        value={curPage}
        onChange={evt => {
          handleChange(evt.target.value)
        }}
      >
        <OptionList totalPages={totalPages} />
      </select>
      <div
        className="page-control__btn"
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

interface Props {
  totalPages: number
  curPage: number
  itemsPerPage: number
}
