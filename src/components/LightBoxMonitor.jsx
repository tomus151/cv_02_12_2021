import React, { useState, useEffect } from 'react';
import LightBox from './LightBox';
import MonitorOverlay from './MonitorOverlay';
import '../styles/LightBoxMonitor.css';
import monitoImage from '../images/screen.svg';
import imagesLibrary from './imagesLibrary';
const LightBoxMonitor = ({ name, click }) => {
    const [imagesArray, setImagesArray] = useState([])
    const [activeImage, setActiveImage] = useState(0)
    const [isOverlayActive, setIsOverlayActive] = useState(true)
    useEffect(() => {
        const changedName = name.toLowerCase().replace(/[-.]/g, '')
        setImagesArray(imagesLibrary[changedName])
    }, [name])
    const handleRemoveOverlay = () => isOverlayActive ? setIsOverlayActive(false) : null;
    const handleChangeLightBoxImage = (e) => {
        e.stopPropagation()
        if (activeImage < imagesArray.length - 1) setActiveImage(prevValue => prevValue + 1)
        else setActiveImage(0);
    }
    const imagesGenerator = imagesArray.map((imageUrl, index) => (
        <img
            key={"lightboxmonitor" + Math.floor(Math.random() * 10000000)}
            className={"lightbox-monitor-image-item lightbox-monitor-image-item-" + index + (index === activeImage ? " active" : "")}
            src={imageUrl}
            alt={`${name}-page`}
        />
    ))
    return (
        <LightBox click={click}>
            <div className="lightbox-monitor-container">
                <img className="lightbox-monitor-image" src={monitoImage} alt="monitor" />
                <div className={"lightbox-monitor-images-container" + (isOverlayActive ? '' : ' active')} onClick={handleChangeLightBoxImage}>
                    {isOverlayActive ? <MonitorOverlay mouseenter={handleRemoveOverlay} /> : null}
                    {imagesGenerator}
                </div>

            </div>
        </LightBox>
    );
}

export default LightBoxMonitor;