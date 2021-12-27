import Monitor from './Monitor';
import RedingoProjectsTextList from './RedingoProjectsTextList';
const Redingo = ({ data }) => {
    const { date, position, commercialProjectsArrayToShow, commercialProjectsArrayText } = data;
    const stopPropagationFunction = (e) => {
        e.stopPropagation()
    }
    const projectsSpaces = commercialProjectsArrayToShow.map((item, index) => <Monitor key={"monitor" + Math.floor(Math.random() * 10000000)} {...item} index={index} />)
    const textProjectSpaces = commercialProjectsArrayText.map(item => <RedingoProjectsTextList url={item.url} />)
    return (
        <div>
            <h2 className="experience-work-title">{`${date} - REDINGO`}</h2>
            <h3 className="experience-position-title">{position}</h3>
            <span className="expirience-additional-text">Examples of pages</span>
            <div className="experience-projects-container" onClick={stopPropagationFunction}>
                {projectsSpaces}
                <br />
            </div>
            <span class="expirience-additional-text">Participation in projects</span>
            <ul className="expirience-text-project-container-list" onClick={stopPropagationFunction}>
                {textProjectSpaces}
            </ul>
        </div>
    );
}

export default Redingo;