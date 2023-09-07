import { styled } from 'styled-components'
import { SearchIcon } from '../img/cmnIcon'

const KeywordBox = () => {
  return (
    <Wrap>
      <div className="head">추천 검색어</div>
      {[...Array(5)].map((_, idx) => (
        <KeyItem key={idx}>
          <SearchIcon />
          <div>간세포암</div>
        </KeyItem>
      ))}
    </Wrap>
  )
}

export default KeywordBox

const Wrap = styled.div`
  border-radius: 42px;
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
