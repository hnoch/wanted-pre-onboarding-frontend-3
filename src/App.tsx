import SearchBox from './components/SearchBox'
import KeywordBox from './components/KeywordBox'
import { Header, Inner, Layout } from './components/CmnStyle'
import KeyProvider from './contexts/KeyContext'
import CacheProvider from './contexts/CacheContext'

function App() {
  return (
    <CacheProvider>
      <KeyProvider>
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
      </KeyProvider>
    </CacheProvider>
  )
}

export default App
