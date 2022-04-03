import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="blogs">Blogs</Link>
                <Link to="about">About</Link>
                <Link to="notfound"></Link>
            </div>
        </nav>
    );
};

export default Header;