import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-msg">
                <h1 className="text-center">404 <sup>Oops! You're lost.</sup></h1>
                <p className="text-center">The page you are looking for was not found</p>
            </div>
        </div>
    );
};

export default NotFound;