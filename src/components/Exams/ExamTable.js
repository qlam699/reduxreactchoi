import React from 'react'
import {Table, Button} from 'reactstrap';

const ExamTable = ({data, onHistoryDeleted}) => {
    return <Table hover>
        <thead>
        <tr>
            <th>Examination Name</th>
            <th>Description</th>
            <th>Date Taken</th>
            <th>Result</th>
            <th>Action(s)</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({id, examName, description, takenDate, result}) => <tr key={`row_${id}`}>
            <td>{examName}</td>
            <td>{description}</td>
            <td>{takenDate}</td>
            <td style={{color: result ? "#003719": "red"}}>{result ? "Passed": "Failed"}</td>
            <td><Button onClick={e=> {e.preventDefault(); onHistoryDeleted(id)}} color="link">Delete</Button></td>
        </tr>)}
        </tbody>
    </Table>
};

export default ExamTable

