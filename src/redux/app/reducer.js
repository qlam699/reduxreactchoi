import {handleActions} from 'redux-actions';
import update from 'immutability-helper';

import {actionTypes} from './actions';

export const initialStates = {
    testValue: [],
    spinningLoading: false
};

export default handleActions({
        [actionTypes.SHOW_LOADING]: (state = initialStates) => update(state, {spinningLoading: {$set: true}}),
        [actionTypes.HIDE_LOADING]: (state = initialStates) => update(state, {spinningLoading: {$set: false}}),
    },
    initialStates,
)