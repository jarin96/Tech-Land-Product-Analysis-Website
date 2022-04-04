import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useProducts();
    return (
        <div className='reviewers-container'>
            <h1 className='p-3'>What Our Customers Say!</h1>
            <div className="review-container">
                {
                    reviews.map(review => <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Review;