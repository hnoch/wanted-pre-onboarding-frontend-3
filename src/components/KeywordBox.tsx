import { styled } from 'styled-components'
import { SearchIcon } from '../assets/CmnIcon'
import { TypeSick } from '../types/type'
import { useKeyState } from '../hooks/useKeyContext'

const KeywordBox = () => {
  const state = useKeyState()

  return (
    <Wrap isshow={state.list.length > 0 ? 'block' : 'none'}>
      {state.input.length > 0 && state.list.length === 0 ? (
        <div className="none">검색어 없음</div>
      ) : (
        <div className="head">추천 검색어</div>
      )}
      <KeyBox>
        {state.list.map((item: TypeSick, idx) => (
          <KeyItem
            key={idx}
            selected={state.selectIndex === idx}
            href={'https://www.google.com/search?q=' + item.sickNm}
          >
            <SearchIcon />
            <div>{item.sickNm}</div>
          </KeyItem>
        ))}
      </KeyBox>
    </Wrap>
  )
}

export default KeywordBox

const Wrap = styled.div<{ isshow: string }>`
  display: ${props => props.isshow};

  border-radius: 20px;
  background-color: #ffffff;
  padding: 16px;
  margin-top: 12px;
  text-align: left;

  .none {
    font-size: 20px;
    padding: 25px 0px;
    text-align: center;
  }
  .head {
    font-size: 12px;
    color: gray;
    margin-bottom: 10px;
  }
`

const KeyBox = styled.div`
  overflow-y: auto;
  max-height: 500px;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

const KeyItem = styled.a<{ selected: boolean }>`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background-color: ${props => (props.selected ? 'lightgray' : 'transparent')};
  color: black;

  > div {
    font-size: 14px;
    margin-left: 8px;
    text-align: left;
  }
`
