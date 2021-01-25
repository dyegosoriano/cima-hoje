import React, { useContext } from 'react'
import { ArrowBackIos } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

import CardCityWeather from '../../components/CardCityWeather'
import { WeatherContext } from '../../context/WeatherContext'

import { Container } from './styles'

export default function Favorites() {
  const { favoriteCities } = useContext(WeatherContext)
  const { goBack } = useHistory()

  return (
    <Container>
      <header>
        <h1>Favoritos</h1>
      </header>

      <main>
        {favoriteCities.map(city => (
          <CardCityWeather key={city} nameCity={city} />
        ))}
      </main>

      <footer>
        <Button
          startIcon={<ArrowBackIos />}
          variant="contained"
          onClick={goBack}
        >
          Voltar
        </Button>
      </footer>
    </Container>
  )
}
