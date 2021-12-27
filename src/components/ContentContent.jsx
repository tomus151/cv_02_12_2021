import React from 'react';
import Skills from './Skills'
import '../styles/ContentContent.css';
import WorkExpirience from './WorkExpirience'
const ContentContent = (props) => {
    const { isActive, title } = props
    console.log(title)
    let classNames = isActive ? ' active' : '';

    return (
        <div className={`list-item-content-container${classNames}`}>
            {title === "Work Experience" && <WorkExpirience />}
            {title === "Skills" && <Skills />}
        </div>
    );
}

export default ContentContent;