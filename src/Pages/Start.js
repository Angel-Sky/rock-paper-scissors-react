import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import '../components/Start/Start.css'
function Start() {
    return (
        <div className="container text-center">
            <h1 id="main-heading">Lets Play Rock Paper Scissors!</h1>
            <Row>
                <Col lg={12} sm={12} className="weapons">
                    <img src="/rock.png" alt="rock" />
                    <img src="/paper.png" alt="paper" />
                    <img src="/scissors.png" alt="scissors" />
                </Col>
            </Row>
            <Link to="/game">
                <Button variant="dark" id="btn-start">Start</Button>{' '}
            </Link>
        </div>
    )
}

export default Start;