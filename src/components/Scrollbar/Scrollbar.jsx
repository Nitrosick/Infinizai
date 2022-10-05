import { useState, useEffect, createRef } from 'react';
import './Scrollbar.css';

export const Scrollbar = ({ scroll }) => {
    const [pageHeight, setPageHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [barHeight, setBarHeight] = useState('0');
    const scrollbar = createRef();

    useEffect(() => {
        setPageHeight(window.document.body.offsetHeight);
        setScrollHeight(scrollbar.current.getBoundingClientRect().height);
        setBarHeight(scrollHeight / (pageHeight / 100) + '%');
        setScrollProgress(scroll / (pageHeight / 100) + '%');
    }, [
        pageHeight,
        scrollHeight,
        setBarHeight,
        scrollbar
    ]);

    return (
        <div ref={scrollbar} className="scrollbar">
            <div
                className="scrollbar_thumb"
                style={{height: barHeight, top: scrollProgress}}></div>
        </div>
    );
};
