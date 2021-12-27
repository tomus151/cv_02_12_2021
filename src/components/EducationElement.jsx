import '../styles/EducationElement.css';
const EducationElement = ({ name, title, description }) => {
    // console.log(description)
    return (
        <li>
            <div className="education-element-container">
                <span className="education-title">
                    {[title, name]}
                </span>
                <p className="education-description-container">
                    {description}
                </p>
            </div>
        </li>
    );
}

export default EducationElement;