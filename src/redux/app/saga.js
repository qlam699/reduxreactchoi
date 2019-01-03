import {all, takeLatest} from 'redux-saga/effects';
import {actionTypes} from './actions';


// export function* switchMenu({ payload }) {
//   try {
//     const repos = yield select(state => state.github.repos);
//npm
//     /* istanbul ignore else */
//     if (!repos.data[payload.query] || !repos.data[payload.query].length) {
//       yield put({
//         type: ActionTypes.GITHUB_GET_REPOS,
//         payload,
//       });
//     }
//   } catch (err) {
//     /* istanbul ignore next */
//     yield put({
//       type: ActionTypes.EXCEPTION,
//       payload: err,
//     });
//   }
// }

export function* changeValue({payload}) {

}


export default function* appSaga() {
    yield all([
        takeLatest(actionTypes.TEST_ACTION, changeValue)
    ]);
}
