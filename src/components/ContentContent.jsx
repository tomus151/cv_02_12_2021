import React from 'react';
import Skills from './Skills';
import EducationList from './EducationList';
import WorkExpirience from './WorkExpirience';
import '../styles/ContentContent.css';
const ContentContent = (props) => {
    const { isActive, title } = props
    let classNames = isActive ? ' active' : '';
    console.log('a')
    return (
        <div className={`list-item-content-container${classNames}`}>
            {title === "Work Experience" && <WorkExpirience />}
            {title === "Skills" && <Skills />}
            {title === "Education" && <EducationList />}
        </div>
    );
}

export default ContentContent;