import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/Arrow.css'

const Arrow = () => {
    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scroll}  id="Arrow">
            <FaArrowUp size={30} />
        </button>
    );
};

export default Arrow;
