import React from 'react';
import '../styles/ContentContent.css';
import WorkExpirience from './WorkExpirience'
const ContentContent = (props) => {
    const { isActive } = props
    let classNames = isActive ? ' active' : '';

    return (
        <div className={`list-item-content-container${classNames}`}>
            <WorkExpirience />
        </div>
    );
}

export default ContentContent;