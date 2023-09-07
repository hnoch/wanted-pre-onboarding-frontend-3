import { styled } from 'styled-components'
import { SearchIcon } from '../assets/CmnIcon'
import { TypeSick } from '../types/type'
import { useKeyState } from '../hooks/useKeyContext'

const KeywordBox = () => {
  const state = useKeyState()

  return (
    <Wrap isshow={state.list.length > 0 ? 'block' : 'none'}>
      <div className="head">추천 검색어</div>
      {state.list.map((item: TypeSick, idx) => (
        <KeyItem key={idx}>
          <SearchIcon />
          <div>{item.sickNm}</div>
        </KeyItem>
      ))}
    </Wrap>
  )
}

export default KeywordBox

const Wrap = styled.div<{ isshow: string }>`
  display: ${props => props.isshow};

  border-radius: 20px;
  background-color: #ffffff;
  padding: 16px 24px;
  margin-top: 12px;
  text-align: left;

  .head {
    font-size: 12px;
    color: gray;
    margin-bottom: 4px;
  }
`

const KeyItem = styled.button`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;

  > div {
    font-size: 14px;
    margin-left: 8px;
  }
`
