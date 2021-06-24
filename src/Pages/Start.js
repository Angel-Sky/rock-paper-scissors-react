import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Start() {
    return (
        <div className="container" id="categories">
            <h1>Start</h1>
            <Link to="/game">
                <Button variant="dark">Start</Button>{' '}
            </Link>
        </div>
    )
}

export default Start;