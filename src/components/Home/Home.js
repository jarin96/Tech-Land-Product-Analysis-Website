import React from 'react';
import './Home.css';
import image from './images/laptop.png';
const Home = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1 className='products-color'>Your next Laptop</h1>
                <h1 className='product-color'>Your best Laptop</h1>
                <br />
                <p>Everyday laptops give you the best range of exclusive usability features and a wide color choice.<br></br> They are the best laptops for always-great affordability for everyone.</p>

            </div>
            <div className="product-details">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;