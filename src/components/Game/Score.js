import { Row } from 'react-bootstrap';

function Score({params}) {
    return (
        <Row>
            <h1>Score</h1>
            <div>
                <span>You: {params.userScore}</span>
                <span>Computer: {params.computerScore}</span>
            </div>
        </Row>
    )
}

export default Score;