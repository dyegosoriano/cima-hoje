import React, { useContext, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { WeatherContext } from '../../context/WeatherContext'

import { FormStyled } from './styles'

export default function Home() {
  const [error, setError] = useState(false)
  const [city, setCity] = useState('')

  const { addCity } = useContext(WeatherContext)
  const history = useHistory()

  async function handleSubmit() {
    if (!city) return

    const response = await addCity(city)

    if (response === 404) {
      setError(true)
      return
    }

    history.push('/city')
  }

  return (
    <FormStyled>
      <TextField
        onChange={event => {
          setCity(event.target.value)
          setError(false)
        }}
        label="Informe a cidade"
        className="text__input"
        value={city}
      />

      {error && (
        <span className="msg__error">Você inseriu uma cidade inexistente!</span>
      )}

      <Button
        className="handle__button"
        onClick={handleSubmit}
        variant="contained"
      >
        Buscar
      </Button>
    </FormStyled>
  )
}
