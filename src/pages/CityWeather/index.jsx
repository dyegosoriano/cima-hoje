import React, { useContext } from 'react'
import { ArrowBackIos, Favorite } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

import WeatherForecast from '../../components/WeatherForecast'
import { WeatherContext } from '../../context/WeatherContext'

import { Container } from './styles'

export default function CityWeather() {
  const { cityWeather, addFavorite } = useContext(WeatherContext)
  const { goBack } = useHistory()

  const {
    description,
    humidity,
    tempMax,
    tempMin,
    name,
    icon,
    temp,
    days
  } = cityWeather

  return (
    <Container>
      <header>
        <h1>{name}</h1>

        <div className="weather__banner">
          <span>{temp}˚C</span>

          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        </div>

        <span className="weather__description">{description}</span>

        <div className="data">
          <span>Umidade {humidity}%</span>
          <span>Max.: {tempMax}˚C</span>
          <span>Min.: {tempMin}˚C</span>
        </div>
      </header>

      <main>
        <WeatherForecast daysForecast={days} />
      </main>

      <footer>
        <Button
          startIcon={<ArrowBackIos />}
          variant="contained"
          onClick={goBack}
        >
          voltar
        </Button>

        <Button
          onClick={() => addFavorite(name)}
          startIcon={<Favorite />}
          variant="contained"
        >
          favoritar
        </Button>
      </footer>
    </Container>
  )
}
