import '../styles/RedingoProjectsTextList.css'
const RedingoProjectsTextList = ({ url }) => {
    return (
        <li className="expirience-text-project-container-list-item">
            <a href={url} target="_blank" rel="noreferrer">{url}</a>
        </li>
    );
}

export default RedingoProjectsTextList;