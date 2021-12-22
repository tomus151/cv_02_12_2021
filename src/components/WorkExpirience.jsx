import React, { PureComponent } from 'react';
import { default as data } from '../data/expirience.json';
import '../styles/WorkExpirience.css';
import IframeBanner from './IframeBanner';
class WorkExpirience extends PureComponent {
    render() {
        console.log(data)
        const bannersSpace = data.expirience.rtbhouse.banners.map((item, index) => {
            // if (index > 5) return null;
            const itemArrayUrls = item.url.map((url, index) => {
                return (
                    <IframeBanner key={"b" + Math.floor(Math.random() * 10000000)} loading="lazy" url={url} />
                )
            });
            return (
                <div key={"c" + Math.floor(Math.random() * 10000000)} className="banner-container">
                    <h4 className="advertiser-name">{item.name}</h4>
                    <div className="advertiser-banners-container">
                        {itemArrayUrls}
                    </div>
                </div >

            )
        })
        const pagesSpace = [];
        const works = () => {
            const worksArray = [];
            for (let item in data.expirience) {
                console.log('item');
                console.log(item)
                const component = (
                    <div className={`${item}-container`}>
                        <h2>{item.toUpperCase()}</h2>
                        <br />
                        {bannersSpace}
                    </div>
                )
                worksArray.push(component);
            }
            return worksArray
        }
        return (
            <>
                {works()}
                {/* <div className="rtbhouse-container">
                    <h2>aaa</h2>
                    <br />
                    {bannersSpace}
                </div>
                <div className="redingo-container">

                </div> */}
            </>
        );
    }

}

export default WorkExpirience;