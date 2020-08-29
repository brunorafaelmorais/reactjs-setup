import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import AuthRoutes from '../features/auth/routes'
import DashboardRoutes from '../features/dashboard/routes'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route path="/dashboard" component={DashboardRoutes} />
      <Redirect from="/" to="/dashboard" exact />
    </Switch>
  )
}

export default Routes
