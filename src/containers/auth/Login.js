import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginComponent from '../../components/auth/Login'
import authActionCreators from '../../redux/auth/actions'


class Login extends Component {
    constructor(props) {
        super(props)
        this.loginClickHandler = this.loginClickHandler.bind(this)
    }


    loginClickHandler(e) {
        this.props.loginRequest('testuser', 'testpassword')
    }

    render() {

        return <LoginComponent onLoginClicked={this.loginClickHandler}/>
    }
}


const {loginRequest} = authActionCreators
export default connect(null, {loginRequest})(Login)