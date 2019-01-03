import {all, takeLatest, put, call} from 'redux-saga/effects';
import {actionTypes as authActions} from './actions';
import appActionCreators from '../../redux/app/actions'
import authActionCreators from '../../redux/auth/actions'
import AuthService from '../../services/auth'
import {push} from '../../utils/history'

const {showLoading, hideLoading} = appActionCreators;
const {loginCompleted} = authActionCreators
const myAuthService = new AuthService();


export function* loginRequestHandler({payload}) {
    yield put(showLoading())
    let myToken = myAuthService.loggedIn()
    if (!myToken) {
        let authRes = yield call(myAuthService.login, payload.username, payload.password)
        if (authRes.data.token) {
            myAuthService.setToken(authRes.data.token)
            yield put(loginCompleted(authRes.data.token))
        }
    } else {
        yield put(loginCompleted(myToken))
    }
    push('/')
    yield put(hideLoading())

}


export default function* authSaga() {
    yield all([
        takeLatest(authActions.LOGIN_REQUEST, loginRequestHandler)
    ]);
}