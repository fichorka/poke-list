import React, {FunctionComponent, Component} from 'react'

export default function({pageBody}) {
  return (
  <div className="page-layout">
    <h1 className="page-title">{title}</h1>
    {pageBody}
  </div>
  )
}

