import React from 'react'

import BoxContainer from './components/BoxContainer'
import Sidebar from './components/Sidebar'

import WeatherContextProvider from './context/WeatherContext'
import GlobalStyle from './styles/global'
import Routes from './routes'

export default function App() {
  return (
    <>
      <GlobalStyle />

      <BoxContainer>
        <Sidebar />

        <WeatherContextProvider>
          <Routes />
        </WeatherContextProvider>
      </BoxContainer>
    </>
  )
}
