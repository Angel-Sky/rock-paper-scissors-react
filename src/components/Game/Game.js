import { useEffect, useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Game.css';
import Score from './Score';
import InteractionMessages from './InteractionMessages';
import GameOver from './GameOver';

function Game() {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [userChoice, setUserChoice] = useState('');
    const [userHasSelected, setUserHasSelected] = useState(false);
    const [computerChoice, setComputerChoice] = useState('');
    const [possibleАnswers] = useState(['rock', 'paper', 'scissors']);
    const [currentMessage, setCurrentMessage] = useState('');
    const [endGame, setEndGame] = useState(false);
    const refUserScore = useRef(userScore);
    const refCompScore = useRef(computerScore);

    function updateUserScore(newScore) {
        refUserScore.current = newScore;
        setUserScore(newScore);
    }

    function updateCompScore(newScore) {
        refCompScore.current = newScore;
        setComputerScore(newScore);
    }

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
            updateUserScore(userScore + 1)
            setCurrentMessage('Point for you!');
        } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'rock')) {
            updateCompScore(computerScore + 1);
            setCurrentMessage('Point for the computer!');
        }
    }

    useEffect(() => {
        checkWhoWinsTheRound();
        if (refCompScore.current === 3 || refUserScore.current === 3) {
            setEndGame(true);
        }
        setTimeout(() => {
            setUserHasSelected(false);
        }, 2000);
    }, [userChoice, computerChoice, endGame])

    return (
        <div className="container">
            <Score params={{ userScore: refUserScore.current, computerScore: refCompScore.current }} />
            <Row>
                {!endGame ?
                    <>
                        {!userHasSelected ?
                            <>
                                <Col lg={8} sm={12} >
                                    <h2>Rock, Paper, Scissors - choose!</h2>
                                    <img src="/rock.png" alt="rock" onClick={handleSelect} />
                                    <img src="/paper.png" alt="paper" onClick={handleSelect} />
                                    <img src="/scissors.png" alt="scissors" onClick={handleSelect} />
                                </Col>
                                <Col lg={4} sm={12} >
                                    <h2>Computer chooses...</h2>
                                    <img src="/animated-change.gif" alt="comp-choice" />
                                </Col>
                            </> :
                            <InteractionMessages userChoice={userChoice} computerChoice={computerChoice} currentMessage={currentMessage}/>
                        }
                    </>
                    :
                    <GameOver userScore={refUserScore.current} />
                }
            </Row>
        </div>
    )
}

export default Game;