import { useContext } from 'react'
import { KeyDispatchContext, KeyStateContext } from '../contexts/KeyContext'

export function useKeyState() {
  const state = useContext(KeyStateContext)
  if (!state) throw new Error('Cannot find KeyProvider')
  return state
}

export function useKeyDispatch() {
  const dispatch = useContext(KeyDispatchContext)
  if (!dispatch) throw new Error('Cannot find KeyProvider')
  return dispatch
}
