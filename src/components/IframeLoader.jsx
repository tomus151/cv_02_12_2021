import React, { useState, useEffect, useRef } from 'react';
import '../styles/IframeLoader.css';
const loadedDots =
    [
        {
            id: "l0",
            nr: "0"
        },
        {
            id: "l1",
            nr: "1"
        },
        {
            id: "l2",
            nr: "2"
        },
        {
            id: "l3",
            nr: "3"
        },
        {
            id: "l4",
            nr: "4"
        },
    ]
const IframeLoader = () => {
    const [counter, setCounter] = useState(0);

    let timeout;
    // let timeout1 = useRef(2);
    // console.log(timeout1)
    // console.log(timeout)
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
        // timeout = setTimeout(() => {
        //     setCounter(prevValue => {
        //         if (counter < loadedDots.length - 1) {
        //             return prevValue + 1;
        //         } else {
        //             return 0;
        //         }
        //     })
        // }, 300);
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