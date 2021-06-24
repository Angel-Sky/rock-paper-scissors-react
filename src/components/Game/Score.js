import { Row } from 'react-bootstrap';

function Score({ params }) {
    console.log(params)
    return (
        <Row>
            <h1>Score</h1>
            <div>
                <span>You: {params.userScore >= 3 ? <span>3</span> : <span>{params.userScore}</span>}</span>
                <span>Computer: {params.computerScore >= 3 ? <span>3</span> : <span>{params.computerScore}</span>}</span>
            </div>
        </Row>
    )
}

export default Score;