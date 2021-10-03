import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="container">
            <div className="menu">
                <Link to='/home' className="dfr-color-a menu-link menu-link-left">Home</Link>
                <Link to='/about' className="dfr-color-a menu-link">About Us</Link>
                <Link to='/courses' className="dfr-color-a menu-link">Courses</Link>
                <Link to='/trainers' className="dfr-color-a menu-link">Our Trainers</Link>
            </div>
        </div>
    );
};

export default Header;