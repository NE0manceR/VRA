import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils/jwtUtil';

// eslint-disable-next-line react/prop-types
const RestrictRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Redirect
                    to={{
                        pathname: '/',
                        // eslint-disable-next-line react/prop-types
                        state: { from: props.location },
                    }}
                />
            ) : (
                    <Component {...props} />
            )
        }
    />
);

export default RestrictRoute;