import React from 'react';
import Skills from './Skills';
import EducationList from './EducationList';
import PersonalProfile from './PersonalProfile';
import WorkExpirience from './WorkExpirience';
import AdditionalSkills from './AdditionalSkills';
import '../styles/ContentContent.css';
const ContentContent = (props) => {
    const { isActive, title } = props
    let classNames = isActive ? ' active' : '';
    return (
        <div className={`list-item-content-container${classNames}`}>
            {title === "Work Experience" && <WorkExpirience />}
            {title === "Skills" && <Skills />}
            {title === "Education" && <EducationList />}
            {title === "Personal Profile" && <PersonalProfile />}
            {title === "Additional Skills" && <AdditionalSkills />}
        </div>
    );
}

export default ContentContent;