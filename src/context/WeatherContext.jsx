import React, { useState, createContext } from 'react'
import pt from 'date-fns/locale/pt'
import { format } from 'date-fns'

export const WeatherContext = createContext()

export default function WeatherContextProvider({ children }) {
  const [cityWeather, setCityWeather] = useState({})

  async function addCity(city) {
    const uri = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=pt_br&appid=${process.env.REACT_APP_KEY_OPEN_WEATHER}`

    if (!city) return

    try {
      const response = await fetch(uri)
        .then(response => response.json())
        .then(response => response)

      const {
        city: { name },
        list
      } = response

      const days = list.map(item => ({
        time: format(new Date(item.dt_txt), 'PPPP - kk:mm', { locale: pt }),
        description: item.weather[0].description,
        humidity: Math.round(item.main.humidity),
        tempMax: Math.round(item.main.temp_max),
        tempMin: Math.round(item.main.temp_min),
        temp: Math.round(item.main.temp),
        icon: item.weather[0].icon
      }))

      setCityWeather({ name, days })

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
