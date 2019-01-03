import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExamsComponent from '../../components/Exams'
import appWrapper from '../../components/App/AppWrapper'
import examActCreators from '../../redux/exams/actions'
import {questionType as questTypes} from '../../utils/constants'


class Exams extends Component {
    constructor(props) {
        super(props)
        this.historyItemDeleteHandler = this.historyItemDeleteHandler.bind(this)
        this.newExamClickHandler = this.newExamClickHandler.bind(this)
        this.startExamHandler = this.startExamHandler.bind(this)
        this.answerUpdateHandler = this.answerUpdateHandler.bind(this)
        this.testSubmitHandler = this.testSubmitHandler.bind(this)
        this.resultExitHandler = this.resultExitHandler.bind(this)
        this.testRestartedHandler = this.testRestartedHandler.bind(this)
    }

    componentWillMount() {
        this.props.examHistoryRequest()
    }

    componentWillUnmount() {
        this.props.clearMySubmission()
    }

    historyItemDeleteHandler(id) {
        this.props.deleteRequest(id)
    }

    newExamClickHandler() {
        this.props.availableExamsRequest()
    }

    startExamHandler(examId) {
        this.props.startMySubmission(examId)
    }

    answerUpdateHandler(questionId, answerId, questionType = questTypes.SINGLE) {
        this.props.updateAnswer(questionId, answerId, questionType)
    }

    testSubmitHandler() {
        this.props.endMySubmission()
    }

    resultExitHandler() {
        this.props.clearMySubmission()
    }

    testRestartedHandler(id) {
        this.props.startOverProgress(id)
    }

    render() {
        return <ExamsComponent {...this.props}
                               onHistoryDeleted={this.historyItemDeleteHandler.bind(this)}
                               onResultExit={this.resultExitHandler} onTestRestarted={this.testRestartedHandler}
                               onNewExamClicked={this.newExamClickHandler} onStartExam={this.startExamHandler}
                               onAnswer={this.answerUpdateHandler} onTestSubmitted={this.testSubmitHandler}/>;
    }
}

const {examHistoryRequest, deleteRequest, availableExamsRequest, startMySubmission, updateAnswer, endMySubmission, clearMySubmission, startOverProgress} = examActCreators


const mapStatesToProps = states => {
    const {histories, availableExams, mySubmission} = states.exams;
    return {
        histories, availableExams, mySubmission
    }
}
export default connect(mapStatesToProps, {
    examHistoryRequest,
    deleteRequest,
    availableExamsRequest,
    startMySubmission,
    updateAnswer,
    endMySubmission,
    clearMySubmission,
    startOverProgress

})(appWrapper(Exams))