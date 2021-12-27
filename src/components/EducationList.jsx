import educationData from '../data/educationData.json'
import EducationElement from './EducationElement'
const EducationList = () => {
    const educationList = educationData.map((item, index) => <EducationElement key={`education-${index}`} name={item.name} description={item.description} />)
    return (
        <ul className="education-container">
            {educationList}
        </ul>
    );
}

export default EducationList;