import Monitor from './Monitor'
const Redingo = ({ data }) => {
    // console.log(data)
    // const { commercialProjectsArrayToShow, commercialProjectsArrayText } = data;
    const { date, position, commercialProjectsArrayToShow } = data;
    const projectsSpaces = commercialProjectsArrayToShow.map(item => <Monitor key={"monitor" + Math.floor(Math.random() * 10000000)} {...item} />)
    return (
        <div>
            <h2 className="experience-work-title">{`${date} - REDINGO`}</h2>
            <h3 className="experience-position-title">{position}</h3>
            <span className="expirience-additional-text">Examples of pages</span>
            <div className="experience-banners-container">
                {projectsSpaces}
                {/* {textProjectSpaces} */}
            </div>
        </div>
    );
}

export default Redingo;