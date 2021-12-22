import parse from 'html-react-parser';
import '../styles/ContentSection.css';
import ContentContent from './ContentContent'
const ContentSection = ({ content, index, click }) => {
    // console.log(content)
    const { id, info, title, active, image } = content;
    const isClassActive = active ? " active" : '';
    console.log(image)
    const imageParse = parse(image)
    return (
        <li
            className={"list-item list-item-" + index + isClassActive}
            onClick={() => click(id)}
        >
            <section>
                <div className="section-title-container">
                    <div className="circle">
                        {image ? <img src={`data:image/svg+xml;utf8,${image}`} alt="" /> : null}
                        {imageParse}
                    </div>
                    <h2 className="section-title-text">{title}</h2>
                </div>
                <ContentContent isActive={active} aa="aaa" title={title} />
            </section>

        </li>
    );
}

export default ContentSection;