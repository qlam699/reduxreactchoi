import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const AuthenticatedRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route
        {...rest}
        render={props => (!isAuthenticated ? <Redirect to={'/sign-in'}/> : <Component {...props} />)}
    />
);

AuthenticatedRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    isAuthenticated: PropTypes.bool.isRequired

};


export default AuthenticatedRoute;
