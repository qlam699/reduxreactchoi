import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import {actionTypes} from './actions'
import {submissionStatus, questionType} from '../../utils/constants'

const initialState = {
    histories: [],
    availableExams: [],
    mySubmission: {
        examId: null,
        status: submissionStatus.NEW,
        questions: [],
        currentTick: '00:00',
        answers: [],
        submitted: false,
        showResult: false,
        testResult: {}
    }
};


export default handleActions({
        [actionTypes.EXAM_HISTORY_COMPLETED]: (state = initialState, {payload}) => {
            return update(state, {histories: {$set: [...payload.histories]}})
        },

        [actionTypes.DELETE_COMPLETED]: (state = initialState, {payload}) => {
            return update(state, {histories: arr => arr.filter(item => item.id !== payload.itemId)})
        },

        [actionTypes.AVAILABLE_EXAMS_COMPLETED]: (state = initialState, {payload}) => {
            return update(state, {availableExams: {$set: payload.availableExams}})
        },

        [actionTypes.UPDATE_QUESTION_LIST]: (state = initialState, {payload}) => {
            let {examId, questions} = payload
            return update(state, {
                mySubmission: {
                    questions: {$set: questions},
                    answers: {$set: questions.map(q => ({questionId: q.id, selection: []}))},
                    examId: {$set: examId}
                }
            })
        },

        [actionTypes.START_PROGRESS]: (state = initialState) => {
            return update(state, {mySubmission: {status: {$set: submissionStatus.PROGRESSING}}})
        },

        [actionTypes.UPDATE_TICK]: (state = initialState, {payload}) => {
            return update(state, {mySubmission: {currentTick: {$set: payload.value}}})
        },

        [actionTypes.END_PROGRESS]: (state = initialState) => {
            return update(state, {mySubmission: {status: {$set: submissionStatus.ENDED}}})
        },
        [actionTypes.UPDATE_ANSWER]: (state = initialState, {payload}) => {
            let questionIndex = state.mySubmission.answers.findIndex(o => o.questionId === payload.questionId)
            if (payload.questionType === questionType.SINGLE) {
                return update(state, {
                    mySubmission: {
                        answers: {
                            [questionIndex]: {
                                selection: {$set: [payload.answerId]}
                            }
                        }
                    }
                })
            } else if (payload.questionType === questionType.MULTIPLE) {

            } else if (payload.questionType === questionType.OPEN) {

            } else {
                return state

            }
        },

        [actionTypes.UPDATE_TEST_RESULT]: (state = initialState, {payload}) => {
            return update(state, {
                mySubmission:
                    {
                        showResult: {$set: true},
                        testResult: {$merge: {...payload}}
                    }
            })
        },

        [actionTypes.END_MY_SUBMISSION]: (state = initialState) => {
            return update(state, {mySubmission: {submitted: {$set: true}}})
        },
        [actionTypes.CLEAR_MY_SUBMISSION]: (state = initialState) => {
            return update(state, {
                mySubmission: {
                    $merge: {
                        examId: null,
                        status: submissionStatus.NEW,
                        questions: [],
                        currentTick: '00:00',
                        answers: [],
                        submitted: false,
                        showResult: false,
                        testResult: {}
                    }
                }
            })
        }

    },
    initialState
)