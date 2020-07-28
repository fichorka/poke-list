import React from 'react'
import '../css/PageControl.css'

export const PageControl: React.FC<Props> = ({
  totalPages,
  curPage,
  itemsPerPage
}: Props) => {
  const optionElements = []
  for (let i = 1; i < totalPages + 1; i++) {
    optionElements.push(
      <option key={'page-' + i} value={i}>
        {i}
      </option>
    )
  }

  function handleChange(value) {
    alert(value)
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
        defaultValue={curPage}
        onChange={evt => {
          handleChange(evt.target.value)
        }}
      >
        {optionElements}
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
