import '../styles/ContentSection.css';
import ContentContent from './ContentContent'
const ContentSection = ({ content, index, click }) => {
    console.log(content)
    const { id, info, title, active, image } = content;
    const isClassActive = active ? " active" : '';
    console.log(info, title)
    return (
        <li
            className={"list-item list-item-" + index + isClassActive}
            onClick={() => click(id)}
        >
            <section>
                <div className="section-title-container">
                    <div className="circle">
                        {image ? <img src={`data:image/svg+xml;utf8,${image}`} alt="" /> : null}

                    </div>
                    <h2 className="section-title-text">{title}</h2>
                </div>
                <ContentContent isActive={active} />
            </section>

        </li>
    );
}

export default ContentSection;