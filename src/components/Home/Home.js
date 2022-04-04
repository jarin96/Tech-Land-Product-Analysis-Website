import React from 'react';
import { Button } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import HomeReview from '../HomeReview/HomeReview';
import Review from '../Review/Review';
import './Home.css';
import image from './images/laptop.png';
const Home = () => {
    const [reviews, setReviews] = useProducts();
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
            <div className='reviewers-container'>
                <h1 className='customer text-center'>Customer Review</h1>
                <div className='review-items-container'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview
                            key={review.id}
                            review={review}
                        ></HomeReview>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;