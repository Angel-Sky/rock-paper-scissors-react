import { Col } from 'react-bootstrap';

function ComputerChooses() {
    return (
        <Col lg={4} md={4} sm={12} className="text-center comp-chooses" >
            <h2>Computer chooses...</h2>
            <img src="/animated-change.gif" alt="comp-choice" />
        </Col>
    )
}

export default ComputerChooses;