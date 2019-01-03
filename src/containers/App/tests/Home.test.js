import React from 'react'
import {shallow, mount} from 'enzyme'
import Home from '../Home'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('<Home/>', () => {
    const mockStore  = configureStore([])

    it('normal render', () => {
        // let initialStates =  <load initial states from involved reducer>
        let store = mockStore({})
        const connectedHome = mount(<Provider store={store}> <Home/></Provider>).find('Home').at(0)

    });
});