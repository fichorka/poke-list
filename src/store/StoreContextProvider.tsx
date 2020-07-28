import React, {FC, Children} from 'react'
import {Store} from '../types'
import reducer from './reducer'
import initialState from './initialState'
import StoreContext from './storeContext'

const StoreContextProvider: FC<Props> = ({store, children}: Props) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreContextProvider

interface Props {
  children
}
