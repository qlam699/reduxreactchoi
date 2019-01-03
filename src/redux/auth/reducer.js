import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import {actionTypes} from './actions'
import AuthService from '../../services/auth'


const myAuthService = new AuthService();


const initialStates = {
    isAuthenticated: myAuthService.loggedIn() !== false,
    accessToken: myAuthService.loggedIn() || null
};

export default handleActions({
        [actionTypes.LOGIN_COMPLETED]: (state, {payload}) => update(state, {
            isAuthenticated: {$set: true},
            accessToken: {$set: payload.token}
        })
    },
    initialStates,
)