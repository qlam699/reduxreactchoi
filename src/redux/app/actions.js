import {createActions} from 'redux-actions';

export const actionTypes = {
    TEST_ACTION: 'TEST_ACTION',
    SHOW_LOADING: 'SHOW_LOADING',
    HIDE_LOADING: 'HIDE_LOADING'
};

export default createActions({
    [actionTypes.TEST_ACTION]: (value) => value,
}, actionTypes.SHOW_LOADING,
    actionTypes.HIDE_LOADING
);
