import React, { useState, createContext } from 'react'

export const WeatherContext = createContext()

export default function WeatherContextProvider({ children }) {
  const [cityWeather, setCityWeather] = useState('')

  async function addCity(city) {
    if (!city) return

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY_OPEN_WEATHER}`
      )
        .then(response => response.json())
        .then(response => response)

      setCityWeather(response)

      return response
    } catch (err) {
      console.log(`error.message >>> ${err.message} <<<`)
    }
  }

  return (
    <WeatherContext.Provider value={{ cityWeather, addCity }}>
      {children}
    </WeatherContext.Provider>
  )
}
