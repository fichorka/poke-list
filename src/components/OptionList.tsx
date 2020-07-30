import React from 'react'

export const OptionList: React.FC<Props> = ({
  totalPages,
  items = []
}: Props) => {
  let optionElements = []

  if (totalPages)
    for (let i = 0; i < totalPages; i++) {
      optionElements.push(
        <option key={'page-' + i} value={i}>
          {i + 1}
        </option>
      )
    }
  else
    optionElements = items.map((item, i) => (
      <option key={`${item}-${i}`} value={item}>
        {String(item === '' ? 'Select an option' : item)}
      </option>
    ))

  return <>{optionElements}</>
}

export default OptionList

interface Props {
  totalPages?: number
  items?: Array<number | string>
}
