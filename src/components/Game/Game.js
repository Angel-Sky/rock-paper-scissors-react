import { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Game.css';
import Score from './Score';

function Game() {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [userChoice, setUserChoice] = useState('');
    const [userHasSelected, setUserHasSelected] = useState(false);
    const [computerChoice, setComputerChoice] = useState('');
    const [possibleАnswers] = useState(['rock', 'paper', 'scissors']);
    const [currentMessage, setCurrentMessage] = useState('');
    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        setUserChoice("");
        setComputerChoice("");

        setUserChoice(e.target.alt);
        setComputerChoice(possibleАnswers[Math.floor(Math.random() * possibleАnswers.length)]);
        setUserHasSelected(true);
    }

    const checkWhoWinsTheRound = () => {
        if ((userChoice === 'rock' && computerChoice === 'rock') ||
            (userChoice === 'paper' && computerChoice === 'paper') ||
            (userChoice === 'scissors' && computerChoice === 'scissors')) {
            setCurrentMessage('Even');
        } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')) {
            setUserScore(prevScore => prevScore + 1);
            setCurrentMessage('Point for you!');
        } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'rock')) {
            setComputerScore(prevScore => prevScore + 1);
            setCurrentMessage('Point for the computer!');
        }
    }

    // const checkGameOver = () => {
    //     return userScore >= 3 || computerScore >= 3 ? setEndGame(true) : setEndGame(false);
    // }

    useEffect(() => {
        checkWhoWinsTheRound();
        userScore >= 3 || computerScore >= 3 ? setTimeout(() => {setEndGame(true)}, 2000) : setEndGame(false);
        setTimeout(() => {
            setUserHasSelected(false);
        }, 2000);
    }, [userChoice, computerChoice, endGame])

    return (
        <div className="container">
            <Score params={{userScore, computerScore}} />
            <Row>
                {!endGame ? <>
                    <Col lg={8} sm={12} >
                        {!userHasSelected ?
                            <>
                                <h2>Rock, Paper, Scissors - choose!</h2>
                                <img src="/rock.png" alt="rock" onClick={handleSelect} />
                                <img src="/paper.png" alt="paper" onClick={handleSelect} />
                                <img src="/scissors.png" alt="scissors" onClick={handleSelect} />
                            </> :
                            <>
                                <h2>You chose {userChoice}</h2>
                                <img src={"/" + userChoice + '.png'} alt={userChoice} />
                            </>
                        }
                    </Col>
                    <Col lg={4} sm={12} >
                        {!userHasSelected ?
                            <>
                                <h2>Computer chooses...</h2>
                                <img src="/animated-change.gif" alt="comp-choice" />
                            </>
                            :
                            <>
                                <h2>The computer chose {computerChoice}</h2>
                                <img src={"/" + computerChoice + '.png'} alt={computerChoice} />
                            </>
                        }
                    </Col>
                    <p>{currentMessage}</p>

                </> :
                    <>
                        {winner}
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