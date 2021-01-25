import React from 'react'
import {
  ListItemAvatar,
  ListItemText,
  ListItem,
  Divider
} from '@material-ui/core'

import { Container } from './styles'

export default function WeatherForecast({ daysForecast }) {
  return (
    <Container>
      {daysForecast.map(day => (
        <li key={day.time}>
          <ListItem component="div">
            <ListItemAvatar>
              <img src={day.icon} />
            </ListItemAvatar>

            <ListItemText
              primary={day.time}
              secondary={`${day.description}, ${day.temp}˚C, umidade ${day.humidity}%`}
            />
          </ListItem>

          <Divider variant="inset" component="div" />
        </li>
      ))}
    </Container>
  )
}
