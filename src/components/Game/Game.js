import { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

function Game() {
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        setSelected(e.target.innerText)
    }

    useEffect(() => {
        console.log(selected)
    }, [selected])

    return (
        <div className="container">
            <h1>Game</h1>
            <Row>
                <Col lg={6} sm={12} >
                    <Button variant="dark" onClick={handleSelect}>Rock</Button>
                    <Button variant="dark" onClick={handleSelect}>Paper</Button>{' '}
                    <Button variant="dark" onClick={handleSelect}>Scissors</Button>{' '}
                </Col>
                <Col lg={6} sm={12} >
                
                </Col>
            </Row>
        </div>
    )
}

export default Game;