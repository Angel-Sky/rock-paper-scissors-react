import { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Game.css';
function Game() {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [possibleАnswers] = useState(['rock', 'paper', 'scissors']);
    const [currentMessage, setCurrentMessage] = useState('');
    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        setUserChoice(e.target.alt);
    }

    const computerRandomChoice = () => {
        setComputerChoice(possibleАnswers[Math.floor(Math.random() * possibleАnswers.length)]);
    }

    const checkWhoWinsTheRound = (userChoice, computerChoice) => {
        if ((userChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'rock') ||
            (userChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'paper') ||
            (userChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'scissors')) {
            setCurrentMessage('even');
            setUserChoice("");
        } else if ((userChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors') ||
            (userChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock') ||
            (userChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper')) {
            setCurrentMessage('Point for you!');
            setUserScore((prevScore) => prevScore + 1);
            setUserChoice("");
        } else if ((userChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper') ||
            (userChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissors') ||
            (userChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'rock')) {
            setCurrentMessage('Point for the computer!');
            setComputerScore((prevScore) => prevScore + 1);
            setUserChoice("");
        }
    }

    const checkGameOver = () => {
        if (userScore === 3) {
            setWinner('You win!')
            setEndGame(true);
        }

        if (computerScore === 3) {
            setWinner('Computer wins!')
            setEndGame(true);
        }
    }

    useEffect(() => {
        computerRandomChoice();
        console.log('me ', userChoice)
        console.log('comp ', computerChoice)
        checkWhoWinsTheRound(userChoice, computerChoice);
        checkGameOver();
        console.log('user score ', userScore);
        console.log('comp score ', computerScore);
    }, [userChoice])

    return (
        <div className="container">
            <h1>Score</h1>
            <p>You: {userScore}</p>
            <p>Computer: {computerScore}</p>
            <Row>
                {!endGame ? <>
                    <p>{currentMessage}</p>
                    <h2>Rock, Paper, Scissors - you choose!</h2>
                    <Col lg={8} sm={12} >
                        <img src="/rock.png" alt="rock" onClick={handleSelect} />
                        <img src="/paper.png" alt="paper" onClick={handleSelect} />
                        <img src="/scissors.png" alt="scissors" onClick={handleSelect} />
                    </Col>
                    <Col lg={4} sm={12} >
                    </Col>
                </> :
                    <>
                        <p>{winner}</p>
                        <Link to="/">
                            <Button variant="dark">Start Over</Button>
                        </Link>
                    </>
                }
            </Row>
        </div>
    )
}

export default Game;