import reducer, {initialStates} from '../reducer'
import {actionTypes} from '../actions'

describe('app reducer test', () => {

    it('showLoading', () => {
        expect(reducer(initialStates, {type: actionTypes.SHOW_LOADING})).toHaveProperty('spinningLoading', true)


    })
    it('hideLoading', () => {
        expect(reducer(initialStates, {type: actionTypes.HIDE_LOADING})).toHaveProperty('spinningLoading', false)


    })
})