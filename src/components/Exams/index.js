import React, {Component, Fragment} from "react";
import immutate from 'immutability-helper'
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, Alert, Modal, ModalBody, ModalFooter} from 'reactstrap'
import ExamTable from './ExamTable'
import ExamIntroModal from './ExamIntroModal'
import {submissionStatus} from '../../utils/constants'
import AnswerQuestions from './AnswerQuestions'
import './styles/exams.css'
import ResultModal from "./ResultModal";


class Exams extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.newExamToggle = this.newExamToggle.bind(this)
        this.historyItemDelete = this.historyItemDelete.bind(this)
        this.modalYesClickHandler = this.modalYesClickHandler.bind(this)
        this.newExamButtonClickHandler = this.newExamButtonClickHandler.bind(this)
        this.startExamHandler = this.startExamHandler.bind(this)
        this.state = {
            deleteHistoryModal: false,
            newExamModal: false
        }
        this.currentId = null
    }

    historyItemDelete(id) {
        this.currentId = id
        this.toggle()
    }

    modalYesClickHandler() {
        this.props.onHistoryDeleted(this.currentId)
        this.toggle()
    }

    toggle() {
        this.setState({deleteHistoryModal: !this.state.deleteHistoryModal})
    }

    newExamToggle() {
        this.setState({newExamModal: !this.state.newExamModal})
    }

    newExamButtonClickHandler(e) {
        this.props.onNewExamClicked()
        this.newExamToggle()
    }

    startExamHandler(examObj) {
        this.selectedExam = immutate({}, {$merge: examObj})
        this.props.onStartExam(examObj.id)
    }

    render() {
        const {histories, availableExams, mySubmission, onAnswer, onTestSubmitted, onResultExit, onTestRestarted} = this.props;
        const {deleteHistoryModal, newExamModal} = this.state;
        const {questions, currentTick, answers} = mySubmission

        return mySubmission.status === submissionStatus.NEW ? <Fragment>
                <h4 style={{marginBottom: 15}}>Examination History
                    <Button onClick={this.newExamButtonClickHandler} outline color="primary" style={{float: 'right'}}>
                        <FontAwesomeIcon icon={faCheckDouble}/>{" "}Take new Exam
                    </Button>
                </h4>
                {histories.length > 0 ? <ExamTable onHistoryDeleted={this.historyItemDelete} data={histories}/> :
                    <Alert color="info">You have note taken any exam yet! Click <strong>Take new Exam</strong> to start new
                        exam.</Alert>}

                <Modal isOpen={deleteHistoryModal} toggle={this.toggle}>
                    <ModalBody>
                        Are you sure you want to delete ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalYesClickHandler}>Yes</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                {/*TODO: separated shared component*/}

                <ExamIntroModal isOpen={newExamModal} toggle={this.newExamToggle} exams={availableExams}
                                onStartExam={this.startExamHandler}/>
            </Fragment>
            :
            <Fragment>
                <AnswerQuestions exam={this.selectedExam} questions={questions} answers={answers} tick={currentTick}
                                 onSubmit={onTestSubmitted}
                                 onAnswer={onAnswer} disabled={mySubmission.status === submissionStatus.ENDED}
                                 testSent={mySubmission.submitted}/>
                <ResultModal onRestart={() => {onTestRestarted(this.selectedExam.id)}} isOpen={mySubmission.showResult} resultData={mySubmission.testResult} onExit={onResultExit}/>
            </Fragment>
    }
}

export default Exams;