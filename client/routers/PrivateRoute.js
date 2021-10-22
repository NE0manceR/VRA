import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils/jwtUtil';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            // eslint-disable-next-line react/prop-types
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
