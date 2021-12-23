import LightBox from './LightBox';
import '../styles/LightBoxMonitor.css';
import monitoImage from '../images/screen.svg';
const LightBoxMonitor = ({ name, click }) => {
    const handleChangeLightBoxImage = (e) => {
        e.stopPropagation()
        return
    }
    return (
        <LightBox click={click}>
            <div className="lightbox-monitor-container">
                <img className="lightbox-monitor-image" src={monitoImage} alt="monitor" />
                <div className="lightbox-monitor-images-container" onClick={handleChangeLightBoxImage}></div>
            </div>
        </LightBox>
    );
}

export default LightBoxMonitor;