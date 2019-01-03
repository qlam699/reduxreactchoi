import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import middleware, {sagaMiddleware} from './middleware';

const reducer = combineReducers({...rootReducer});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
    const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga);
    return store;
};

const store = configStore();

export default store;