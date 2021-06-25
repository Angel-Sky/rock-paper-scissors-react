import { Col, Row } from 'react-bootstrap';
import './InteractionMessages.css';

function InteractionMessages({userChoice, computerChoice, currentMessage}) {
    return (
        <Row className="text-center">
            <Col lg={6} sm={12}>
                <h3>You chose <strong>{userChoice}</strong></h3>
                <img src={"/" + userChoice + '.png'} alt={userChoice} />
            </Col>
            <Col lg={6} sm={12} >
                <h3>The computer chose <strong>{computerChoice}</strong></h3>
                <img src={"/" + computerChoice + '.png'} alt={computerChoice} />
            </Col>
            <p id="round-winner">{currentMessage}</p>
        </Row>
    )
}

export default InteractionMessages;