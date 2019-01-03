import React, {Component} from 'react'
import {Card, CardFooter, CardBody, Button, CardHeader, Form, FormGroup, Input, Label, Progress, Col} from 'reactstrap'


export default class AnswerQuestions extends Component {
    constructor(props) {
        super(props)
        this.nextClickHandler = this.nextClickHandler.bind(this)
        this.prevClickHandler = this.prevClickHandler.bind(this)
        this.state = {currentIndex: 0}
    }

    prevClickHandler(e) {
        this.setState({currentIndex: this.state.currentIndex - 1})
    }

    nextClickHandler(e) {
        this.setState({currentIndex: this.state.currentIndex + 1})
    }


    render() {
        const {questions, onAnswer, answers, tick, exam, disabled, testSent, onSubmit} = this.props;
        const {currentIndex} = this.state
        const currentQuest = questions[currentIndex]
        const answered = answers.filter(a=> a.selection.length > 0).length
        const progressPercent = Math.ceil((answered / questions.length) * 100)
        const currentSelects = answers.filter(a => a.questionId === currentQuest.id)[0].selection

        return <div className="row submission-panel">
            <div className="col-md-8">
                <Card>
                    <CardHeader><h5>{this.state.currentIndex + 1}. {currentQuest.content}</h5></CardHeader>
                    <CardBody>
                        <Form>{currentQuest.answers.map(a => <FormGroup key={`answer_${currentQuest.id}_${a.id}`} check>
                            <Label check>
                                <Input disabled={disabled} checked={currentSelects.includes(a.id)} onChange={e => {
                                    onAnswer(currentQuest.id, a.id);
                                }} type="radio" name="answer" value={a.id}/>{' '}
                                {a.content}
                            </Label>
                        </FormGroup>)}


                        </Form>
                    </CardBody>
                    <CardFooter>
                        <div className="row">
                            <div className="col-sm-6">
                                <Button disabled={currentIndex === 0} color="primary" onClick={this.prevClickHandler}
                                        outline>Previous</Button>{' '}{' '}
                                <Button disabled={currentIndex === questions.length - 1} color="primary"
                                        outline onClick={this.nextClickHandler}>Next</Button>
                            </div>
                            <div className="col-sm-6 text-right"><Button onClick={onSubmit} disabled={testSent} color="danger">End Test</Button></div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-md-4">
                <Card body>
                    <Form>
                        <FormGroup style={{textAlign: 'center'}}>
                            <Label>Remaining Time:</Label>
                            <Input className="form-control input-timestamp" size="lg" type="text" value={tick}
                                   disabled/>
                        </FormGroup>

                        <table className="exam-info-snippet">
                            <tbody>
                            <tr>
                                <td>Maximum Score: </td><td>{exam.maxScore}</td>
                            </tr>
                            <tr>
                                <td>Score to pass: </td><td>{exam.passScore}</td>
                            </tr>
                            </tbody>
                        </table>
                        <FormGroup>
                            <Label>Progress:</Label>
                            <Progress className="oe-progress" value={progressPercent}></Progress>
                            <div className="text-center">{`${answered} / ${questions.length}`}</div>
                        </FormGroup>
                    </Form>
                </Card>
            </div>
        </div>
    }
}