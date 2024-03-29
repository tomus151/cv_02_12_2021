import React, { useState, memo } from 'react';
import IframeLoader from './IframeLoader';
import '../styles/IframeBanner.css';
const IframeBanner = ({ url }) => {
    const [isLoadedIframe, setIsLoadedIframe] = useState(false);
    const handleIframeIsLoaded = () => {
        setIsLoadedIframe(true)
    }
    return (
        <>
            <div className="iframe-container">
                {!isLoadedIframe ? <IframeLoader /> : null}
                <iframe src={url} loading="lazy" onLoad={handleIframeIsLoaded} title="banner"></iframe>
            </div>

        </>
    );
}

export default memo(IframeBanner);