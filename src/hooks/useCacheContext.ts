import { useContext } from 'react'
import { CacheDispatchContext, CacheStateContext } from '../contexts/CacheContext'

export function useCacheState() {
  const state = useContext(CacheStateContext)
  if (!state) throw new Error('Cannot find CacheProvider')
  return state
}

export function useCacheDispatch() {
  const dispatch = useContext(CacheDispatchContext)
  if (!dispatch) throw new Error('Cannot find CacheProvider')
  return dispatch
}
