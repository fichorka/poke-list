import React from 'react'
import ListControl from './ListControl'
import PageControl from './PageControl'
import '../css/AppControlStyle.css'

export const AppControl: React.FC = () => {
  return (
    <>
      <ListControl />
      <PageControl />
    </>
  )
}
