import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ChartsPage from '../charts/ChartsPage'

const AuthRoutes: React.FC = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={path} component={ChartsPage} exact />
    </Switch>
  )
}

export default AuthRoutes
