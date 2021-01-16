import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
// import PrivateRoute from './PrivateRoute';
import NotFound from '../components/error/NotFound';
import PublicRoute from './PublicRoute';

const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncHome = loadable(() => import('../containers/Home/HomeContainer'));

const Router = () => (
  <Fragment>
    <Switch>
      <PublicRoute exact path="/login" component={AsyncLoginForm} />

      <PublicRoute exact path="/" component={AsyncHome} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
