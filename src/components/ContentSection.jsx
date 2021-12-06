import '../styles/ContentSection.scss';
const ContentSection = ({ content, index, click }) => {
    console.log(content)
    const { id, info, title, active, image } = content;
    const isClassActive = active ? " active" : '';
    console.log(info, title)
    // const convertedSvg = JSON.parse(image);
    console.log(image)
    return (
        <li
            className={"list-item list-item-" + index + isClassActive}
            onClick={() => click(id)}
        >
            <section>
                <div className="circle">
                    {image ? <img src={`data:image/svg+xml;utf8,${image}`} alt="" /> : null}
                </div>
            </section>

        </li>
    );
}

export default ContentSection;