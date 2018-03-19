import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductsList from '../pages/ProductsList'
import User from '../pages/User'

export default () => (
  <Switch>
    <Route exact path="/" component={ProductsList}/>
    <Route exact path="/users/:userID" component={User}/>
  </Switch>
)
