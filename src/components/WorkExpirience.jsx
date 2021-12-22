import React, { PureComponent, Suspense, lazy } from 'react';

import { default as data } from '../data/expirience.json';
import '../styles/WorkExpirience.css';
const IframeBanner = lazy(() => import('./IframeBanner'));
class WorkExpirience extends PureComponent {
    render() {
        console.log(data.expirience)
        const bannersSpace = data.expirience.rtbhouse.banners.map((item, index) => {
            if (index > 5) return null;
            const itemArrayUrls = item.url.map((url, index) => {

                return (
                    <Suspense key={'a' + index} fallback={<div>wczytywanie</div>}>
                        <IframeBanner key={"b" + index} loading="lazy" url={url} />
                    </Suspense>
                )
            });
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