import React, { useContext, useEffect, useState } from 'react'
import {
  ListItemAvatar,
  ListItemText,
  ListItem,
  Divider
} from '@material-ui/core'

import { WeatherContext } from '../../context/WeatherContext'

import { Container } from './styles'

export default function CardCityWeather({ nameCity }) {
  const { getCityWeather } = useContext(WeatherContext)
  const [city, setCity] = useState({})

  useEffect(async () => {
    const response = await getCityWeather(nameCity)

    setCity(response)
  }, [])

  const { description, humidity, name, icon, temp } = city

  return (
    <Container>
      <ListItem component="div">
        <ListItemAvatar>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        </ListItemAvatar>

        <ListItemText
          primary={name}
          secondary={`${description}, ${temp}˚C, umidade de ${humidity}%`}
        />
      </ListItem>

      <Divider variant="inset" component="div" />
    </Container>
  )
}
