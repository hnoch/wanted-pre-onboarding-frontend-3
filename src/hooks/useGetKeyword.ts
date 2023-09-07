import { useRef } from 'react'
import { GetKeyword } from '../apis/GetKeyword'
import { useCacheDispatch, useCacheState } from './useCacheContext'
import { useKeyDispatch } from './useKeyContext'

// NOTE 30초 제한
const EXPIRE_TIME = 1000 * 30

const useGetKeyword = () => {
  const isCache = useRef(false)
  const dispatch = useKeyDispatch()

  const cacheState = useCacheState()
  const cacheDispatch = useCacheDispatch()

  const searchApi = async (text: string) => {
    isCache.current = false

    await cacheState.c_list.map(item => {
      // NOTE 만료시간 지나지 않았다면
      if (item.keyword === text && Date.now() - item.req_time.getTime() < EXPIRE_TIME) {
        console.info('cached data : ', item.keyword)

        dispatch({ type: 'SET_LIST', list: item.list })
        isCache.current = true
        return
      } else if (item.keyword === text) {
        cacheDispatch({
          type: 'SET_CACHELIST',
          c_list: cacheState.c_list.filter(item => item.keyword !== text),
        })
        return
      }
    })

    if (isCache.current === false) {
      await GetKeyword(text).then(res => {
        if (res) {
          console.info('calling api')
          dispatch({ type: 'SET_LIST', list: res.data })

          cacheDispatch({
            type: 'SET_CACHELIST',
            c_list: [...cacheState.c_list, { list: res.data, req_time: new Date(), keyword: text }],
          })
        }
      })
    }
  }

  return { searchApi }
}

export default useGetKeyword
