import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

const UnauthenticatedRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => <Component {...props} />}
    />
);

UnauthenticatedRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default UnauthenticatedRoute;
