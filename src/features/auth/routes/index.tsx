import React from 'react'
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'

import SignInPage from '../signIn/SignInPage'
import SignUpPage from '../signUp/SignUpPage'

const AuthRoutes: React.FC = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${path}/sign-in`} component={SignInPage} />
      <Route path={`${path}/sign-up`} component={SignUpPage} />
      <Redirect from={path} to={`${path}/sign-in`} exact />
    </Switch>
  )
}

export default AuthRoutes
