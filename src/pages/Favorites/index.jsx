import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

import CardCityWeather from '../../components/CardCityWeather'

import { Container } from './styles'

export default function Favorites() {
  const { goBack } = useHistory()

  const arrayCities = [
    'brasilia',
    'salvador',
    'sao paulo',
    'rio de janeiro',
    'palmas',
    'goiania',
    'taguatinga'
  ]

  return (
    <Container>
      <header>
        <h1>Favoritos</h1>
      </header>

      <main>
        {arrayCities &&
          arrayCities.map(city => (
            <CardCityWeather key={city} nameCity={city} />
          ))}
      </main>

      <footer>
        <Button onClick={goBack} variant="contained">
          Voltar
        </Button>
      </footer>
    </Container>
  )
}
