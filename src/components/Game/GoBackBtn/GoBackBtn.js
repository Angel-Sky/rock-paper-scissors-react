import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { TiArrowBack } from 'react-icons/ti';
import './GoBackBtn.css';

function GoBackBtn() {
    return (
        <OverlayTrigger key={'btn-back'} placement={'bottom'} overlay={
            <Tooltip id={`tooltip-${'bottom'}`}>Go to home page</Tooltip>
        }>
            <Link id="go-back-btn" to="/"><TiArrowBack /></Link>
        </OverlayTrigger>
    )
}

export default GoBackBtn;