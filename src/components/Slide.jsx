import '../styles/Slide.css'
const Slide = ({ name, isActive }) => {
    const image = require('../images/technologies/webp/' + name + '.webp');
    return (
        <div className={`skills-image-container ${isActive ? 'active' : ''}`}>
            <img src={image.default} alt={`technology-${name}`} />
        </div>
    );
}

export default Slide;