import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GameOver.css';

function GameOver({ userScore }) {
    return (
        <Col lg={12} sm={12} className="text-center">
            {userScore >= 3 ?
                <div>
                    <img src="/user-wins.png" alt="Happy sun for winning the game" />
                    <h2 className="winner-msg">You Win!</h2>
                </div> :
                <div>
                    <img src="/comp-wins.png" alt="Happy computer for winning the game" />
                    <h2 className="winner-msg">The Computer Wins!</h2>
                </div>
            }
            <Link to="/">
                <Button variant="dark">Start Over</Button>
            </Link>
        </Col>
    )
}

export default GameOver;