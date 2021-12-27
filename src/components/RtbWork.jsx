import IframeBanner from './IframeBanner';
import '../styles/RtbWork.css';
const RtbWork = ({ data }) => {
    const { banners, date, position } = data;
    const bannersSpace = banners.map((item, index) => {
        const itemArrayUrls = item.url.map(url => {
            return (
                <IframeBanner key={"b" + Math.floor(Math.random() * 10000000)} loading="lazy" url={url} />
            )
        });
        return (
            <div key={"c" + index} className="banner-container">
                <h4 className="advertiser-name">{item.name}</h4>
                <div className="advertiser-banners-container">
                    {itemArrayUrls}
                </div>
            </div >

        )
    })
    return (<div>
        <h2 className="experience-work-title">{`${date} - RTBHOUSE`}</h2>
        <h3 className="experience-position-title">{position}</h3>
        <span className="expirience-additional-text">Examples of banners in my every day work</span>
        <div className="experience-banners-container">
            {bannersSpace}
        </div>
    </div>);
}

export default RtbWork;


