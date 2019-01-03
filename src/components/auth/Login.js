import React from 'react'
import {Button} from "reactstrap";


const Login = ({onLoginClicked}) => {
    return <div className="container-fluid text-center">
            <h1 style={{margin: '50px 0'}}>Login page.</h1>
            <Button onClick={onLoginClicked} color="primary">Login with Test User now !!!!</Button>
        </div>
}

export default Login;