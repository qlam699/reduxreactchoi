import React, {Fragment} from 'react'
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import {Button} from "reactstrap";


const Home = ({onClick}) => {
    return <Fragment>
        <AppHeader/>
        <div className="container-fluid text-center">
            <h1 style={{margin: '50px 0'}}>Online Exams Home Page.</h1>
            <Button onClick={onClick} color="primary">Go to the page of Examinations !!!!</Button>
        </div>
        <AppFooter/>
    </Fragment>
}

export default Home;