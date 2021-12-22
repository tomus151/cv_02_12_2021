import React, { useState, useEffect } from 'react';
import '../styles/IframeLoader.css';
const IframeLoader = () => {
    const [counter, setCounter] = useState(0);
    const [loadedDots, setLoadedDots] = useState(
        [
            {
                id: "l0",
                nr: "0",
                isActive: false
            },
            {
                id: "l1",
                nr: "1",
                isActive: false
            },
            {
                id: "l2",
                nr: "2",
                isActive: false
            },
            {
                id: "l3",
                nr: "3",
                isActive: false
            },
            {
                id: "l4",
                nr: "4",
                isActive: false
            },
        ]
    )
    let timeout;
    function dotChageState() {
        timeout = setTimeout(() => {
            setCounter(prevValue => {
                if (counter < loadedDots.length - 1) {
                    return prevValue + 1;
                } else {
                    return 0;
                }
            })
        }, 300);
    }
    useEffect(() => {
        dotChageState()
        return () => clearTimeout(timeout)
    }, [counter])
    const allDots = loadedDots.map((dot, index) => <div key={`aa${index}`} className={`load-circle load-circle-${dot.nr} ${counter === Number(dot.nr) ? "active" : ''}`} data-id={`${dot.nr}`}></div>)
    // const allDots = loadedDots.map((dot, index) => <div key={`aa${index}`} className={`load-circle load-circle-${dot.nr}`} data-id={`${dot.nr}`}></div>)
    return (
        <div className="loader-container">
            {allDots}
        </div>
    );
}

export default IframeLoader;