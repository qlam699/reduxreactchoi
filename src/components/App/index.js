import React, {Fragment, Component} from 'react'
import history from "../../utils/history";
import {Route, Router, Switch} from "react-router-dom";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Login from "../../containers/auth/Login";
import NotFound from "./NotFound";
import LoadingSpinner from './LoadingSpinner'
import {renderAuthRoutes} from '../../utils'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'

class App extends Component {
    render() {
        const {isAuthenticated, spinningLoading} = this.props
        return <Fragment>
            <Router history={history}>
                <Switch>
                    {renderAuthRoutes(isAuthenticated)}
                    <UnauthenticatedRoute exact path={'/sign-in'} component={Login}/>
                    <UnauthenticatedRoute exact path={'/sign-up'} component={Login}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
            {spinningLoading && spinningLoading === true && <LoadingSpinner/>}
        </Fragment>;
    }
}

export default App;