import React, { PureComponent } from 'react';
import { default as data } from '../data/expirience.json';
import '../styles/WorkExpirience.css';
import IframeBanner from './IframeBanner';
class WorkExpirience extends PureComponent {
    handleClickcontainer = (e) => {
        e.stopPropagation();
    }
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
        // console.log(data)
        const pagesTextSpace = data.expirience.redingo.commercianlProjectsArrayText.map((item, index) => (
            <div key={"d" + Math.floor(Math.random() * 10000000)} className={`page-text-container page-text-container-${index}`}>
                <a href={item.url} target="_blank" rel="noreferrer">{item.name}</a>
            </div>
        ));
        const pagesToShowSpace = [];

        const works = () => {
            const worksArray = [];
            for (let item in data.expirience) {
                console.log(item)
                const component = (
                    <div key={"e" + Math.floor(Math.random() * 10000000)} className={`${item}-container`} onClick={this.handleClickcontainer}>
                        <h2>{item.toUpperCase()}</h2>
                        <br />
                        {item === "rtbhouse" ? bannersSpace : pagesTextSpace}
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