import React from 'react'

import BoxContainer from './components/BoxContainer'
import Sidebar from './components/Sidebar'

import GlobalStyle from './styles/global'
import Routes from './routes'

export default function App() {
  return (
    <>
      <GlobalStyle />

      <BoxContainer>
        <Sidebar />
        <Routes />
      </BoxContainer>
    </>
  )
}
