import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='reviewers-container'>
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