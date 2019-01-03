import React, {Component} from 'react'
import update from 'immutability-helper'
import {INTRUCTION_TEST} from '../../utils/constants'
import {Col, ModalHeader, ModalBody, ModalFooter, Button, Modal, Form, FormGroup, Label, Card} from "reactstrap";


export default class ExamIntroModal extends Component {
    constructor(props) {
        super(props)
        this.selectChangHandler = this.selectChangHandler.bind(this)
        this.startButtonClickHandler = this.startButtonClickHandler.bind(this)
        this.state = {selectedItem: null}

    }

    startButtonClickHandler(e) {
        this.props.onStartExam(this.state.selectedItem)
        this.props.toggle()
    }

    selectChangHandler(e) {
        let newState = update(this.state, {selectedItem: {$set: this.props.exams.filter(i => i.id.toString() === e.target.value)[0]}})
        this.setState(newState)
    }

    render() {
        const {isOpen, toggle, exams} = this.props
        const {selectedItem} = this.state
        return <Modal isOpen={isOpen} toggle={toggle} size="lg">
            <ModalHeader>Examination Introduction</ModalHeader>
            <ModalBody>
                <div className="row">
                    <div className="col-md-7">
                        <Form>
                            <FormGroup row>
                                <Label for="chosenExam" sm={4}>Examination:</Label>
                                <Col sm={8}>
                                    <select onChange={this.selectChangHandler} className="form-control" id="chosenExam"
                                            value={selectedItem ? selectedItem.id : ""}
                                            placeholder="Choose the available examination">
                                         <option value="" hidden>Choose the available examination</option>
                                        {exams && exams.map(item => <option className="form-control"
                                                                            key={`option_exam_${item.id}`}
                                                                            value={item.id}>{item.name}</option>)}
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={12} className="text-muted text-justify">
                                    {selectedItem && <h6 style={{lineHeight: '20px'}} dangerouslySetInnerHTML={{__html: selectedItem.overview}}/>}
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="col-md-5">
                        {selectedItem && <Card body className="exam-detail-card">
                            <ul>
                                <li>Number of Questions:{' '}<strong>{selectedItem.totalQuestions}</strong></li>
                                <li>Duration:{' '}<strong>{`${selectedItem.examTime} minute(s)`}</strong></li>
                                <li>Maximum Score:{' '}<strong>{selectedItem.maxScore}</strong></li>
                                <li>Score to pass:{' '}<strong>{selectedItem.passScore}</strong></li>
                            </ul>
                        </Card>}
                    </div>
                </div>
                <div className="row" style={{marginTop: 10}}>
                    <div className="col-sm-12"><h5>Instruction:</h5></div>
                    <div className="col-sm-12 text-muted">

                        <h6 style={{lineHeight: '20px'}} dangerouslySetInnerHTML={{__html: INTRUCTION_TEST}}/>


                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button disabled={selectedItem === null} color="primary" onClick={this.startButtonClickHandler}>Start</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    }
}