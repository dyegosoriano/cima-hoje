import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

import { FormStyled } from './styles'

export default function Home() {
  const [erro, setErro] = useState(false)
  const [city, setCity] = useState('')

  async function handleSubmit() {
    if (!city) return

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},br&appid=${process.env.REACT_APP_KEY_OPEN_WEATHER}`
      )
        .then(response => response.json())
        .then(response => response)

      if (response.cod === '404') {
        setErro(true)
        return
      }

      console.log(response)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  return (
    <FormStyled>
      <TextField
        onChange={event => {
          setCity(event.target.value)
          setErro(false)
        }}
        label="Informe a cidade"
        className="text__input"
        value={city}
      />

      {erro && (
        <span className="msg__error">Você inseriu uma cidade inexistente!</span>
      )}

      <Button
        className="handle__button"
        onClick={handleSubmit}
        variant="contained"
      >
        Buscar cidade
      </Button>
    </FormStyled>
  )
}
