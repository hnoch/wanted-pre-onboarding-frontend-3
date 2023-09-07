import SearchBox from './components/SearchBox'
import KeywordBox from './components/KeywordBox'
import { Header, Inner, Layout } from './components/CmnStyle'

function App() {
  return (
    <Layout>
      <Inner>
        <Header>
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </Header>
        <SearchBox />
        <KeywordBox />
      </Inner>
    </Layout>
  )
}

export default App
