import { styled } from 'styled-components'

import { SearchIcon } from '../assets/CmnIcon'
import { RowBox } from './CmnStyle'
import { useCallback } from 'react'
import { useKeyDispatch, useKeyState } from '../hooks/useKeyContext'
import useGetKeyword from '../hooks/useGetKeyword'

const SearchBox = () => {
  const state = useKeyState()
  const dispatch = useKeyDispatch()
  const { searchApi } = useGetKeyword()

  const apiHandle = useCallback(
    (value: string) => {
      searchApi(value)
    },
    [searchApi],
  )

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_INPUT', input: e.target.value })
    if (e.target.value !== '') {
      apiHandle(e.target.value)
      dispatch({ type: 'SET_INDEX', selectIndex: -1 })
    } else {
      dispatch({ type: 'SET_LIST', list: [] })
    }
  }

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' && state.selectIndex > -1) {
      dispatch({ type: 'SET_INDEX', selectIndex: state.selectIndex - 1 })
      dispatch({ type: 'SET_INPUT', input: state.list[state.selectIndex - 1].sickNm })
    } else if (
      e.key === 'ArrowDown' &&
      e.keyCode === 40 &&
      state.selectIndex < state.list.length - 1
    ) {
      dispatch({ type: 'SET_INDEX', selectIndex: state.selectIndex + 1 })
      dispatch({ type: 'SET_INPUT', input: state.list[state.selectIndex + 1].sickNm })
    } else if (e.key === 'Enter') {
      goSearchPage()
    }
  }

  const inputFocus = () => {
    dispatch({ type: 'SET_FOCUS', isFocused: true })
  }

  const inputBlur = () => {
    dispatch({ type: 'SET_FOCUS', isFocused: false })
    dispatch({ type: 'SET_INDEX', selectIndex: -1 })
  }

  const goSearchPage = () => {
    window.open('https://www.google.com/search?q=' + state.list[state.selectIndex].sickNm)
  }

  return (
    <Wrap>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="질환명을 입력해 주세요."
        value={state.input}
        onChange={textChange}
        onKeyDown={keyDown}
        onFocus={inputFocus}
        onBlur={inputBlur}
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
