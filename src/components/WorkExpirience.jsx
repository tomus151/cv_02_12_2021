import React, { PureComponent } from 'react';

import { default as data } from '../data/expirience.json';
import '../styles/WorkExpirience.css';
import IframeBanner from './IframeBanner';
class WorkExpirience extends PureComponent {
    render() {
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
                    {itemArrayUrls}
                </div>

            )
        })
        return (
            <>
                <div className="rtbhouse-container">
                    {bannersSpace}
                </div>
                <div className="redingo-container">

                </div>
            </>
        );
    }

}

export default WorkExpirience;