import React from 'react';
import portal from 'images/adventure-time-portal.gif';
import './style.scss';

const Loader = () => (
    <div className="loader">
        <div className="loader-container">
            <img src={portal} alt="" />
        </div>
    </div>
);

export default Loader;
