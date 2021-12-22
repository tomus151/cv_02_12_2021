import Raect, { PureComponent } from 'react';
import { default as data } from '../data/expirience.json';
import '../styles/WorkExpirience.css';
class WorkExpirience extends PureComponent {
    render() {
        console.log(data.expirience)
        const bannersSpace = data.expirience.rtbhouse.banners.map(item => {
            const itemArrayUrls = item.url.map(url => <iframe src={url} loading='lazy' title="1"></iframe>);
            return (
                <div className="banner-container">
                    <h4>{item.name}</h4>
                    {itemArrayUrls}
                </div>

            )
        })
        return (
            <>
                <div class="rtbhouse-container">
                    {bannersSpace}
                </div>
                <div class="redingo-container">

                </div>
            </>
        );
    }

}

export default WorkExpirience;