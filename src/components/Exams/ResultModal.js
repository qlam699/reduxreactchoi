import React from 'react'
import {Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";


const ResultModal = ({isOpen, resultData, onExit, onRestart}) => {
    const {description, takenDate, result, percent} = resultData

    return <Modal isOpen={isOpen} className="oe-result-modal">
        <ModalHeader>Test Result</ModalHeader>
        <ModalBody>
            {result ? <Alert color="success" className="text-center">
                    Congratulation, you have passed examination<br/><strong>{description}</strong>
                </Alert>
                :
                <Alert color="danger">
                    You have failed examination <strong>{description}</strong>
                </Alert>}

            <Table>
                <tbody>
                <tr>
                    <th>Date Taken:</th>
                    <td>{takenDate}</td>
                </tr>
                <tr>
                    <th>Result:</th>
                    <td>{percent}%</td>
                </tr>
                </tbody>
            </Table>
            <div className="row">
                <div className="col-md-6 text-center"><Button onClick={onRestart} block color="primary">Try again</Button></div>
                <div className="col-md-6 text-center"><Button onClick={e=>{onExit();}} block color="danger">Exit the Examination</Button></div>
            </div>
        </ModalBody>
    </Modal>
}

export default ResultModal;