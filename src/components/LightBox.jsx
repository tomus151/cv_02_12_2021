import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/LightBox.css'
const Ligntbox = ({ children, click }) => {
    return ReactDOM.createPortal((
        <div className="lightbox-container" onClick={click}>
            {children}
        </div>
    ), document.body);
}

export default Ligntbox;