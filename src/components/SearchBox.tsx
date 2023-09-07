import { styled } from 'styled-components'

import { SearchIcon } from '../assets/CmnIcon'
import { RowBox } from './CmnStyle'
import { useCallback } from 'react'
import { useKeyDispatch } from '../hooks/useKeyContext'
import useGetKeyword from '../hooks/useGetKeyword'

const SearchBox = () => {
  const dispatch = useKeyDispatch()
  const { searchApi } = useGetKeyword()

  const apiHandle = useCallback((value: string) => {
    searchApi(value)
  }, [])

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_INPUT', input: e.target.value })
    if (e.target.value !== '') {
      console.info('aa ', e.target.value)
      apiHandle(e.target.value)
    } else {
      dispatch({ type: 'SET_LIST', list: [] })
    }
  }

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      //
    } else if (e.key === 'ArrowDown') {
      //
    }
  }

  return (
    <Wrap>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="질환명을 입력해 주세요."
        onChange={textChange}
        onKeyDown={keyDown}
      />
      <SearchButton type="button">검색</SearchButton>
    </Wrap>
  )
}

export default SearchBox

const Wrap = styled(RowBox)`
  border-radius: 42px;
  background-color: #ffffff;
  padding: 12px 10px 12px 24px;
`

const SearchInput = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  padding: 8px;
  font-size: 18px;

  &:focus-visible {
    outline: none;
  }
`

const SearchButton = styled.button`
  border-radius: 30px;
  background-color: #007be9;
  font-size: 16px;
  color: white;
  padding: 10px 16px;
  white-space: nowrap;
`
