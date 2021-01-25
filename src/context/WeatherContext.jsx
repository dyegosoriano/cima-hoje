import React, { useState, createContext } from 'react'
import pt from 'date-fns/locale/pt'
import { format } from 'date-fns'

export const WeatherContext = createContext()

export default function WeatherContextProvider({ children }) {
  const [favoriteCities, setFavoriteCities] = useState([])
  const [cityWeather, setCityWeather] = useState({})

  async function getCityWeather(cityName) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},br&units=metric&lang=pt_br&appid=${process.env.REACT_APP_KEY_OPEN_WEATHER}`
      )
        .then(response => response.json())
        .then(response => response)

      if (response.cod === '404') return 404

      const { city, list } = response
      const { name } = city

      const days = list.map(item => ({
        time: format(new Date(item.dt_txt), 'PPPP - kk:mm', { locale: pt }),
        description: item.weather[0].description,
        humidity: Math.round(item.main.humidity),
        tempMax: Math.round(item.main.temp_max),
        tempMin: Math.round(item.main.temp_min),
        temp: Math.round(item.main.temp),
        icon: item.weather[0].icon
      }))

      const { icon, temp, tempMax, tempMin, humidity, description } = days[0]

      const cityWeatherObject = {
        description,
        humidity,
        tempMax,
        tempMin,
        name,
        icon,
        temp,
        days
      }

      setCityWeather(cityWeatherObject)

      return cityWeatherObject
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  function addFavorite(city) {
    if (favoriteCities.includes(city)) {
      alert('A cidade ja foi favoritada antes!')
      return
    }

    setFavoriteCities([...favoriteCities, city])

    alert('Cidade favoritada com sucesso!')
  }

  return (
    <WeatherContext.Provider
      value={{ cityWeather, getCityWeather, favoriteCities, addFavorite }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
