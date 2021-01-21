import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

import { FormStyled } from './styles'

export default function Home() {
  const [city, setCity] = useState('')

  async function handleSubmit() {
    console.log(city)
  }

  return (
    <FormStyled>
      <TextField
        onChange={event => setCity(event.target.value)}
        label="Informe a cidade"
        className="text__input"
        value={city}
      />

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
