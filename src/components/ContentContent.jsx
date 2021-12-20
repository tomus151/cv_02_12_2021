import React from 'react';
const ContentContent = ({ isActive }) => {
    const classNames = isActive ? ' active' : null
    return (
        <div className={`list-item-content-container${classNames}`}>
            aaaaaaaaaa
        </div>
    );
}

export default ContentContent;