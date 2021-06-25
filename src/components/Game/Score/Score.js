import { Row } from 'react-bootstrap';
import './Score.css';

function Score({ params }) {
    return (
        <Row className="text-center" id="game-score">
            <h1>Score</h1>
            <div>
                <span id="user-score">
                    You: {params.userScore >= 3 ?
                        <span className="bold-score">3</span> :
                        <span className="bold-score">{params.userScore}</span>}
                </span>
                <span>
                    Computer: {params.computerScore >= 3 ?
                        <span className="bold-score">3</span> :
                        <span className="bold-score">{params.computerScore}
                        </span>}
                </span>
            </div>
        </Row>
    )
}

export default Score;