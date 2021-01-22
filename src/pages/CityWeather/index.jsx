import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

import WeatherForecast from '../../components/WeatherForecast'
import { WeatherContext } from '../../context/WeatherContext'
import { Container } from './styles'

export default function CityWeather() {
  const { cityWeather } = useContext(WeatherContext)
  const { goBack } = useHistory()

  const { name, days } = cityWeather
  const { temp, tempMax, tempMin, humidity, icon, description } = days[0]

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
        <Button variant="contained" onClick={goBack}>
          voltar
        </Button>
      </footer>
    </Container>
  )
}
