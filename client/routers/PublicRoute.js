import React from 'react';
import {Route} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            <Component {...props} />
        )}
    />
);

export default PublicRoute;