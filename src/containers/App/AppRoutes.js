import React from 'react'
import PropTypes from "prop-types";
import {Switch, Route} from 'react-router-dom'
import NotFound from '../../components/App/NotFound'
import AuthenticatedRoute from '../../components/App/AuthenticatedRoute'
import UnauthenticatedRoute from '../../components/App/UnauthenticatedRoute'
import Login from '../auth/Login'
import Home from './Home'


const AppRoutes = ({isAuthenticated}) => {
    return <Switch>
        <UnauthenticatedRoute exact path={'/sign-in'} component={Login}/>
        <AuthenticatedRoute exact path={'/'} component={Home} isAuthenticated={isAuthenticated}/>
        <Route component={NotFound}/>
    </Switch>;
};


AppRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};


export default AppRoutes;