import React, {Component} from 'react'
import HomeComponent from '../../components/App/Home'

import {push} from '../../utils/history'


class Home extends Component {

    render() {

        return <HomeComponent onClick={e => {
            push('/exams')
        }}/>
    }
}


export default Home;

