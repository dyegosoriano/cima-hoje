import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CityWeather from './pages/CityWeather'
import Home from './pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/city" component={CityWeather} />
      </Switch>
    </BrowserRouter>
  )
}
