import { Dispatch, createContext, useReducer } from 'react'
import { TypeSick } from '../types/type'

interface IContext {
  input: string
  list: TypeSick[]
  selectIndex: number
  isFocused: boolean
}

type Action =
  | { type: 'SET_INPUT'; input: string }
  | { type: 'SET_LIST'; list: TypeSick[] }
  | { type: 'SET_INDEX'; selectIndex: number }
  | { type: 'SET_FOCUS'; isFocused: boolean }
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
    case 'SET_INDEX':
      return {
        ...state,
        selectIndex: action.selectIndex,
      }
    case 'SET_FOCUS':
      return {
        ...state,
        isFocused: action.isFocused,
      }

    default:
      throw new Error('Unhandled action')
  }
}

const KeyProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    input: '',
    list: [],
    selectIndex: -1,
    isFocused: false,
  })

  return (
    <KeyStateContext.Provider value={state}>
      <KeyDispatchContext.Provider value={dispatch}>{children}</KeyDispatchContext.Provider>
    </KeyStateContext.Provider>
  )
}

export default KeyProvider
