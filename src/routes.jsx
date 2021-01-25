import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CityWeather from './pages/CityWeather'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/city" component={CityWeather} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  )
}
