import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <a href="/home">Home</a>
                <a href="/reviews">Reviews</a>
                <a href="/dashboard">Dashboard</a>
                <a href="blogs">Blogs</a>
                <a href="about">About</a>
                <a href="notfound"></a>
            </div>
        </nav>
    );
};

export default Header;