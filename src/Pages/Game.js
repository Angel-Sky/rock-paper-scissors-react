import { useEffect, useState, useRef } from 'react';
import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Score from '../components/Game/Score/Score';
import InteractionMessages from '../components/Game/InteractionMessages/InteractionMessages';
import GameOver from '../components/Game/GameOver/GameOver';
import ComputerChooses from '../components/Game/ComputerChooses/ComputerChooses'
import '../components/Game/Game.css';

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
        // setUserChoice("");
        // setComputerChoice("");
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
        if (refCompScore.current >= 3 || refUserScore.current >= 3) {
            setEndGame(true);
        } else {
            checkWhoWinsTheRound();
        }
        setTimeout(() => {
            setUserChoice(""); //Causes unwanted re-rendering
            setComputerChoice(""); //Causes unwanted re-rendering
            setUserHasSelected(false);
        }, 2000);
    }, [endGame, userChoice, computerChoice])

    return (
        <div className="container">
            <Score params={{ userScore: refUserScore.current, computerScore: refCompScore.current }} />
            <Row id="game-board">
                {!endGame ?
                    <>
                        {!userHasSelected ?
                            <>
                                <Col lg={8} md={8} sm={12} className="text-center" id="user-choices">
                                    <h2>Rock, Paper, Scissors - choose!</h2>
                                    <OverlayTrigger key={'rock'} placement={'top'} overlay={
                                        <Tooltip id={`tooltip-${'top'}`}>Rock</Tooltip>
                                    }>
                                        <img src="/rock.png" alt="rock" onClick={handleSelect} />
                                    </OverlayTrigger>
                                    <OverlayTrigger key={'paper'} placement={'top'} overlay={
                                        <Tooltip id={`tooltip-${'top'}`}>Paper</Tooltip>
                                    }>
                                        <img src="/paper.png" alt="paper" onClick={handleSelect} />
                                    </OverlayTrigger>
                                    <OverlayTrigger key={'scissors'} placement={'top'} overlay={
                                        <Tooltip id={`tooltip-${'top'}`}>Scissors</Tooltip>
                                    }>
                                        <img src="/scissors.png" alt="scissors" onClick={handleSelect} />
                                    </OverlayTrigger>
                                </Col>
                                <ComputerChooses />
                            </> :
                            <InteractionMessages userChoice={userChoice} computerChoice={computerChoice} currentMessage={currentMessage} />
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