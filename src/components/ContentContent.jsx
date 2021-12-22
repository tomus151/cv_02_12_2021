import React from 'react';
import '../styles/ContentContent.css';
import WorkExpirience from './WorkExpirience'
const ContentContent = (props) => {
    const { isActive, title } = props
    // console.log(props)
    let classNames = isActive ? ' active' : '';

    return (
        <div className={`list-item-content-container${classNames}`}>
            {title === "Work Experience" ? <WorkExpirience /> : <div>aaa</div>}
        </div>
    );
}

export default ContentContent;