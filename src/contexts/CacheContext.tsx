import { Dispatch, createContext, useReducer } from 'react'
import { TypeSick } from '../types/type'

interface SickCache {
  list: TypeSick[]
  req_time: Date
  keyword: string
}

interface IContext {
  c_list: SickCache[]
}

type Action = { type: 'SET_CACHELIST'; c_list: SickCache[] }
type CacheDispatch = Dispatch<Action>

export const CacheStateContext = createContext<IContext | null>(null)
export const CacheDispatchContext = createContext<CacheDispatch | null>(null)

function reducer(state: IContext, action: Action): IContext {
  switch (action.type) {
    case 'SET_CACHELIST':
      return {
        ...state,
        c_list: action.c_list,
      }
    default:
      throw new Error('Unhandled action')
  }
}

const CacheProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    c_list: [],
  })

  return (
    <CacheStateContext.Provider value={state}>
      <CacheDispatchContext.Provider value={dispatch}>{children}</CacheDispatchContext.Provider>
    </CacheStateContext.Provider>
  )
}

export default CacheProvider
