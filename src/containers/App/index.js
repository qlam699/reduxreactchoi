import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppComponent from '../../components/App'


class App extends Component {
    render() {
        return <AppComponent {...this.props}/>;
    }
}

function mapStateToProps(state) {
    const {auth, app} = state;
    return {
        ...auth,
        ...app
    };
}

export default connect(mapStateToProps)(App);

