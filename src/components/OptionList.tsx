import React from 'react'

export const OptionList: React.FC<Props> = ({totalPages}: Props) => {
  const optionElements = []

  for (let i = 0; i < totalPages; i++) {
    optionElements.push(
      <option key={'page-' + i} value={i}>
        {i + 1}
      </option>
    )
  }
  return <>{optionElements}</>
}

export default OptionList

interface Props {
  totalPages: number
}
