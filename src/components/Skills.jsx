import { useState, useEffect } from 'react';
import technologies from '../data/technologiesData.json';
import Slide from './Slide';
import '../styles/Skills.css';
const Skills = () => {
    const [elementWithClassActive, setElementWithClassActive] = useState(0)
    const siderItems = technologies.technologies.map((item, index) => <Slide key={index} name={item} isActive={index === elementWithClassActive ? true : false} />)
    let timeout;
    function changeActiveTechnology() {
        timeout = setTimeout(() => {
            setElementWithClassActive(prevValue => {
                if (elementWithClassActive < technologies.technologies.length - 1) {
                    return prevValue + 1;
                } else {
                    return 0;
                }
            })
        }, 400);
    }
    useEffect(() => {
        changeActiveTechnology()
        return () => clearTimeout(timeout)
    })
    return (
        <div className="skills-slider-wrapper">
            <span className="skills-title">Technologies:</span>
            <div className="skills-items-container">
                {siderItems}
            </div>
        </div>
    );
}

export default Skills;