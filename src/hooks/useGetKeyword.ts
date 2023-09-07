import { GetKeyword } from '../apis/GetKeyword'
import { useKeyDispatch } from './useKeyContext'

const useGetKeyword = () => {
  const dispatch = useKeyDispatch()

  const searchApi = async (text: string) => {
    await GetKeyword(text).then(res => {
      if (res) {
        console.info('res ', res.data)
        dispatch({ type: 'SET_LIST', list: res.data })
      }
    })
  }

  return { searchApi }
}

export default useGetKeyword
