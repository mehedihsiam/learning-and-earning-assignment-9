import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className="footer">
            <p className="text-center">CopyRight {element} LNE Tutorial Industry || 2021</p>
        </div>
    );
};

export default Footer;