import React, { useState, useEffect } from 'react';
import IframeLoader from './IframeLoader';
import LightBoxMonitor from './LightBoxMonitor';
import MonitorOverlay from './MonitorOverlay';
import monitorImage from '../images/screen.svg';
import swdHpMini from '../images/pages/mini_homepage/swd.mini.home.png';
import euroklimaHpMini from '../images/pages/mini_homepage/euroklima.mini.home.png';
import kitleHpMini from '../images/pages/mini_homepage/kitle.pl.mini.home.png';
import biomedpharmaHpMini from '../images/pages/mini_homepage/biomedpharma.mini.home.png';
import '../styles/Monitor.css';
const Monitor = ({ name, imagesHomeMini, index }) => {
    const [image, setImage] = useState('');
    const [isOverlayActive, setIsOverlayActive] = useState(true)
    const [isImageLoaded, setIsImageLoaded] = useState(true)
    const [isLightBoxOpen, setIsightBoxOpen] = useState(false)
    useEffect(() => {
        if (imagesHomeMini === 'swd.mini.home.png') setImage(swdHpMini);
        else if (imagesHomeMini === 'euroklima.mini.home.png') setImage(euroklimaHpMini);
        else if (imagesHomeMini === 'kitle.pl.mini.home.png') setImage(kitleHpMini);
        else if (imagesHomeMini === 'biomedpharma.mini.home.png') setImage(biomedpharmaHpMini);
    }, [imagesHomeMini])
    const handleRemoveOverlay = () => isOverlayActive ? setIsOverlayActive(false) : null;
    const handleImageLoaded = () => setIsImageLoaded(false);
    const handleShowLightBox = () => {
        document.body.style.overflow = 'hidden';
        setIsightBoxOpen(true)
    }
    const handleHideLightBox = () => {
        document.body.style.overflow = '';
        setIsightBoxOpen(false)
    };
    return (
        <div className="expirience-monitor-container">
            {isLightBoxOpen ? <LightBoxMonitor name={name} click={handleHideLightBox} /> : null}
            <img className="expirience-monitor-image" src={monitorImage} alt="monitor" />
            <div className={"monitor-content-container monitor-content-container-" + index}>
                {
                    isImageLoaded ?
                        <IframeLoader />
                        :
                        null
                }
                <img className="monitor-content-image" loading="lazy" src={image} alt={`${name}-homepage`} onLoad={handleImageLoaded} onClick={handleShowLightBox} />
            </div>
            {
                isOverlayActive ?
                    <MonitorOverlay mouseenter={handleRemoveOverlay} />
                    :
                    null
            }
        </div>
    );
}

export default Monitor;