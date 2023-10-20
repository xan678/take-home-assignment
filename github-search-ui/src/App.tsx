import React from "react"
import Search from "./components/Search"
import SearchResultsGrid from "./components/SearchResultsGrid"
import Title from "./components/Title"
import * as Styled from './styles'

const App : React.FC = () => {

  return (
    <Styled.AppContainer>
      <Title/>
      <Search/>
      <SearchResultsGrid/> 
    </Styled.AppContainer>
  )
}

export default App
