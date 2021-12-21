import React from 'react';
import '../styles/ContentContent.css'
const ContentContent = (props) => {
    const { isActive } = props
    let classNames = isActive ? ' active' : '';

    return (
        <div className={`list-item-content-container${classNames}`}>
            aaaaaaaaaa <br />
            asdsadasd <br />
            asdasdsadasdasdasd <br />
            asdsadasdasdasdasasd <br />
            asdsadasdas <br />
            divsa <br />
            dsadasd <br />
            a <br />
            sad <br />
            as <br />
            d <br />
            sa <br />
            d <br />
            saddsa <br />
        </div>
    );
}

export default ContentContent;