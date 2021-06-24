import { Col } from 'react-bootstrap';

function InteractionMessages({userChoice, computerChoice, currentMessage}) {
    return (
        <>
            <Col lg={8} sm={12} >
                <h2>You chose {userChoice}</h2>
                <img src={"/" + userChoice + '.png'} alt={userChoice} />
            </Col>
            <Col lg={4} sm={12} >
                <h2>The computer chose {computerChoice}</h2>
                <img src={"/" + computerChoice + '.png'} alt={computerChoice} />
            </Col>
            <p>{currentMessage}</p>
        </>
    )
}

export default InteractionMessages;