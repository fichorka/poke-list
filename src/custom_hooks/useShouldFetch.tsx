import {useEffect, Dispatch} from 'react'
import {setShouldFetch} from '../store/action_creators/actions'
import {StoreAction, State} from '../types'

function useShouldFetch(state: State, dispatch: Dispatch<StoreAction>): void {
  useEffect(() => {
    if (state.listFilter.value || state.listFilter.what === 'all') {
      dispatch(setShouldFetch(true))
    }
  }, [state.listFilter.value])
}

export default useShouldFetch
