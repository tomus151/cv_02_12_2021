import overlayImage from '../images/clickHandImage.png';
import '../styles/MonitorOverlay.css';
const MonitorOverlay = ({ mouseenter }) => {
    return (
        <div className="monitor-overlay-container" onMouseEnter={mouseenter} onTouchStart={mouseenter}>
            <div className="monitor-overlay-circle">
                <img src={overlayImage} alt="hand" />
            </div>
        </div>
    );
}

export default MonitorOverlay;