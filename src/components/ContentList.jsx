import React, { useState, useEffect } from 'react';
import ContentSection from './ContentSection';
import sectionsData from '../data/sectionsData.json';
import '../styles/ContentList.css';

const ContentList = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        let copyData = [...sectionsData].map(item => {
            item.active = false;
            return item
        })
        setState(copyData)
    }, [])
    const handleSectionClick = (id) => {
        console.log('a')
        const sectionsData = state.map(item => {
            if (item.id === id) item.active = !item.active
            return item
        })
        setState(sectionsData)
    }
    const sections = state.map((section, index) => <ContentSection key={section.id} content={section} index={index} click={handleSectionClick} />)
    return (
        <ul className="section-list">
            {sections}
        </ul>
    )

}
export default ContentList;