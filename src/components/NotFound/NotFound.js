import React from 'react';
import img from './images/1-10.webp';
const NotFound = () => {
    return (
        <div>
            <h1>404, Page does not found</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;