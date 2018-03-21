import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PhilosophersList from '../pages/PhilosophersList'
import User from '../pages/User'

export default () => (
  <Switch>
    <Route exact path="/" component={PhilosophersList}/>
    <Route exact path="/users/:userID" component={User}/>
  </Switch>
)
