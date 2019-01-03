import {createActions} from 'redux-actions';


export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_COMPLETED: 'LOGIN_COMPLETED'
}

export default createActions({
    [actionTypes.LOGIN_REQUEST]: (username, password) => ({username, password}),
    [actionTypes.LOGIN_COMPLETED]: (token) => ({token})
})