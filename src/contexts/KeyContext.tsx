import { Dispatch, createContext, useReducer } from 'react'
import { TypeSick } from '../types/type'

interface IContext {
  input: string
  list: TypeSick[]
}

type Action = { type: 'SET_INPUT'; input: string } | { type: 'SET_LIST'; list: TypeSick[] }
type KeyDispatch = Dispatch<Action>

export const KeyStateContext = createContext<IContext | null>(null)
export const KeyDispatchContext = createContext<KeyDispatch | null>(null)

function reducer(state: IContext, action: Action): IContext {
  switch (action.type) {
    case 'SET_INPUT':
      return {
        ...state,
        input: action.input,
      }
    case 'SET_LIST':
      return {
        ...state,
        list: action.list,
      }
    default:
      throw new Error('Unhandled action')
  }
}

const KeyProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    input: '',
    list: [],
  })

  return (
    <KeyStateContext.Provider value={state}>
      <KeyDispatchContext.Provider value={dispatch}>{children}</KeyDispatchContext.Provider>
    </KeyStateContext.Provider>
  )
}

export default KeyProvider
