import {createActions} from 'redux-actions';


export const actionTypes = {
    EXAM_HISTORY_REQUEST: 'EXAM_HISTORY_REQUEST',
    EXAM_HISTORY_COMPLETED: 'EXAM_HISTORY_COMPLETED',

    DELETE_REQUEST: 'DELETE_REQUEST',
    DELETE_COMPLETED: 'DELETE_COMPLETED',

    AVAILABLE_EXAMS_REQUEST: 'AVAILABLE_EXAMS_REQUEST',
    AVAILABLE_EXAMS_COMPLETED: 'AVAILABLE_EXAMS_COMPLETED',

    UPDATE_QUESTION_LIST: 'UPDATE_QUESTION_LIST',
    UPDATE_ANSWER: 'UPDATE_ANSWER',

    START_MY_SUBMISSION: 'START_MY_SUBMISSION',
    END_MY_SUBMISSION: 'END_MY_SUBMISSION',
    CLEAR_MY_SUBMISSION: 'CLEAR_MY_SUBMISSION',

    START_PROGRESS: 'START_PROGRESS',
    END_PROGRESS: 'END_PROGRESS',
    START_OVER_PROGRESS: 'START_OVER_PROGRESS',
    UPDATE_TICK: 'UPDATE_TICK',

    UPDATE_TEST_RESULT: 'UPDATE_TEST_RESULT'
}

export default createActions({
        [actionTypes.EXAM_HISTORY_COMPLETED]: (histories) => ({histories}),
        [actionTypes.DELETE_REQUEST]: (itemId) => ({itemId}),
        [actionTypes.DELETE_COMPLETED]: (itemId) => ({itemId}),
        [actionTypes.AVAILABLE_EXAMS_COMPLETED]: (availableExams) => ({availableExams}),
        [actionTypes.START_MY_SUBMISSION]: (examId) => ({examId}),
        [actionTypes.UPDATE_QUESTION_LIST]: ({examId, questions}) => ({examId, questions}),
        [actionTypes.UPDATE_ANSWER]: (questionId, answerId, questionType) => ({questionId, answerId, questionType}),
        [actionTypes.UPDATE_TICK]: (value) => ({value}),
        [actionTypes.UPDATE_TEST_RESULT]: (data) => data,
        [actionTypes.START_OVER_PROGRESS]: (examId) => ({examId})
    },
    actionTypes.EXAM_HISTORY_REQUEST,
    actionTypes.AVAILABLE_EXAMS_REQUEST,
    actionTypes.START_PROGRESS,
    actionTypes.END_PROGRESS,
    actionTypes.END_MY_SUBMISSION,
    actionTypes.CLEAR_MY_SUBMISSION
)