import '../styles/EducationElement.css';
const EducationElement = ({ name, title, description }) => {
    // console.log(description)
    return (
        <li>
            <div className="education-element-container">
                <span className="education-title">
                    {name}
                </span>
                <p className="education-description-container">
                    {title}
                    <br />
                    <br />
                    {description}
                </p>
            </div>
        </li>
    );
}

export default EducationElement;