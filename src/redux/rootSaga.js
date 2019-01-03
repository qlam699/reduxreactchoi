import {all, fork} from 'redux-saga/effects';

import app from './app/saga';
import auth from './auth/saga'
import exams from './exams/saga'


export default function* root() {
    yield all([
        fork(app),
        fork(auth),
        fork(exams)
    ]);
}