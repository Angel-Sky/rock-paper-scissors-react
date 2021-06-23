import { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

function Game() {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [userChoise, setUserChoise] = useState('');
    const [computerChoise, setComputerChoise] = useState('');
    const [possibleАnswers] = useState(['rock', 'paper', 'scissors']);
    const [currentResult, setCurrentResult] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        setUserChoise(e.target.innerText)
    }

    const resetUserChoise = () => {
        setUserChoise("");
    }

    const computerRandomChoise = () => {
        setComputerChoise(possibleАnswers[Math.floor(Math.random() * possibleАnswers.length)]);
    }

    const checkWhoWinsTheRound = (userChoise, computerChoise) => {
        if (userChoise.toLowerCase() == 'rock' && computerChoise.toLowerCase() == 'rock' ||
            userChoise.toLowerCase() == 'paper' && computerChoise.toLowerCase() == 'paper' ||
            userChoise.toLowerCase() == 'scissors' && computerChoise.toLowerCase() == 'scissors') {
            setCurrentResult('even');
            setUserChoise("");
        } else if (userChoise.toLowerCase() == 'rock' && computerChoise.toLowerCase() == 'scissors' ||
            userChoise.toLowerCase() == 'paper' && computerChoise.toLowerCase() == 'rock' ||
            userChoise.toLowerCase() == 'scissors' && computerChoise.toLowerCase() == 'paper') {
            setCurrentResult('Point for you!');
            setUserScore((prevScore) => prevScore + 1);
            setUserChoise("");
        } else if (userChoise.toLowerCase() == 'rock' && computerChoise.toLowerCase() == 'paper' ||
            userChoise.toLowerCase() == 'paper' && computerChoise.toLowerCase() == 'scissors' ||
            userChoise.toLowerCase() == 'scissors' && computerChoise.toLowerCase() == 'rock') {
            setCurrentResult('Point for the computer!');
            setComputerScore((prevScore) => prevScore + 1);
            setUserChoise("");
        }
    }

    useEffect(() => {
        computerRandomChoise();
        console.log('me ', userChoise)
        console.log('comp ', computerChoise)
        checkWhoWinsTheRound(userChoise, computerChoise)
    }, [userChoise])

    return (
        <div className="container">
            <h1>Game</h1>
            <Row>
                <p>{currentResult}</p>
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