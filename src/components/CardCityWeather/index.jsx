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
          <img src={icon} />
        </ListItemAvatar>

        <ListItemText
          primary={name || 'carregando dados da cidade...'}
          secondary={`${description || '...'}, ${temp || '0'}˚C, umidade de ${
            humidity || '0'
          }%`}
        />
      </ListItem>

      <Divider variant="inset" component="div" />
    </Container>
  )
}
