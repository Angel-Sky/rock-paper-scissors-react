import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GameOver({ params }) {
    return (
        <>
            {params >= 3 ?
                <p>You Win!</p> :
                <p>Computer Wins!</p>
            }
            <Link to="/">
                <Button variant="dark">Start Over</Button>
            </Link>
        </>
    )
}

export default GameOver;