import {all, takeEvery, takeLatest, put, call, select, spawn} from 'redux-saga/effects'
import immutate from 'immutability-helper'
import {delay} from 'redux-saga'
import actionCreators, {actionTypes as examActions} from "../exams/actions";
import appActionCreators from "../app/actions";
import examsService from '../../services/exams'
import {printStamp} from '../../utils'
import {submissionStatus} from '../../utils/constants'


const myService = new examsService()

const {showLoading, hideLoading} = appActionCreators;
const {examHistoryCompleted, deleteCompleted, availableExamsCompleted, updateQuestionList, startProgress, endProgress, updateTick, updateTestResult, clearMySubmission} = actionCreators;

export function* examHistoryRequestHandler() {
    yield put(showLoading())

    let examHistoryRes = yield call(myService.getHistories)
    let {histories} = examHistoryRes.data
    yield put(examHistoryCompleted(histories))

    yield put(hideLoading())
}

export function* historyItemDeleteHandler({payload}) {
    yield put(showLoading())
    yield call(myService.deleteHistory, payload.itemId)
    yield put(deleteCompleted(payload.itemId))
    yield put(hideLoading())
}

export function* availableExamsRequestHandler() {
    yield put(showLoading())
    let examRes = yield call(myService.getAvailableExams)
    yield put(availableExamsCompleted(examRes.data.availableExams))
    yield put(hideLoading())
}

export const getStatus = states => states.exams.mySubmission.status


export function* doTick(intialSecond) {
    let remaining = intialSecond
    let currentStatus;
    while (remaining >= 0) {
        currentStatus = yield select(getStatus)
        if (currentStatus === submissionStatus.NEW || currentStatus === submissionStatus.ENDED) {
            break
        }
        yield put(updateTick(printStamp(remaining)))
        yield call(delay, 1000)
        remaining--
    }

    currentStatus = yield select(getStatus)
    if (currentStatus === submissionStatus.PROGRESSING)
        yield put(endProgress())
}

export function* startMySubmissionHandler({payload}) {
    yield put(showLoading())

    let examDuration = yield select(states => states.exams.availableExams.filter(i => i.id === payload.examId)[0].examTime)
    let questionsRes = yield call(myService.startExam, payload.examId)

    yield put(updateQuestionList({...questionsRes.data}))

    yield put(startProgress())

    yield spawn(doTick, examDuration * 60)

    yield put(hideLoading())
}

export function* endMySubmissionHandler() {
    yield put(showLoading())

    let currentStatus = yield select(getStatus)
    if (currentStatus === submissionStatus.PROGRESSING)
        yield put(endProgress())

    const answerData = yield select(states => {
        const {examId, answers} = states.exams.mySubmission
        return immutate({}, {$merge: {examId, answers}})
    })

    let res = yield call(myService.endExam, answerData)

    yield put(updateTestResult(res.data))

    yield call(examHistoryRequestHandler)

    yield put(hideLoading())

}

export function* startOverProgressHandler({payload}) {
    yield put(showLoading())
    yield put(clearMySubmission())
    yield call(startMySubmissionHandler, {payload})
    yield put(hideLoading())
}


export default function* examSaga() {
    yield all([
        takeEvery(examActions.EXAM_HISTORY_REQUEST, examHistoryRequestHandler),
        takeEvery(examActions.DELETE_REQUEST, historyItemDeleteHandler),
        takeEvery(examActions.AVAILABLE_EXAMS_REQUEST, availableExamsRequestHandler),
        takeLatest(examActions.START_MY_SUBMISSION, startMySubmissionHandler),
        takeLatest(examActions.START_OVER_PROGRESS, startOverProgressHandler),
        takeLatest(examActions.END_MY_SUBMISSION, endMySubmissionHandler)
    ]);
}