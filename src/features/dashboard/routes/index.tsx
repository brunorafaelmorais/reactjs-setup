import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ChartAnalyticsPage from '../chartAnalytics/ChartAnalyticsPage'

const AuthRoutes: React.FC = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={path} component={ChartAnalyticsPage} exact />
    </Switch>
  )
}

export default AuthRoutes
