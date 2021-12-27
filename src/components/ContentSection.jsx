import parse from 'html-react-parser';
import '../styles/ContentSection.css';
import ContentContent from './ContentContent'
const ContentSection = ({ content, index, click }) => {
    // console.log(content)
    // const { id, info, title, active, image } = content;
    const { id, title, active, image } = content;
    const isClassActive = active ? " active" : '';
    const imageParsed = parse(image)
    return (
        <li
            className={"list-item list-item-" + index + isClassActive}
            onClick={() => click(id)}
        >
            <section>
                <div className="section-title-container">
                    <div className="circle">
                        {image ? imageParsed : null}
                    </div>
                    <h2 className="section-title-text">{title}</h2>
                </div>
                <ContentContent isActive={active} title={title} />
            </section>

        </li>
    );
}

export default ContentSection;