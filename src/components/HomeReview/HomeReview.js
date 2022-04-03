import React from 'react';
import './HomeReview.css';

const HomeReview = (props) => {
    const { name, img, review, ratings } = props.review;
    return (
        <div className='reviewer-details'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviewer-info">
                <div className='reviewer-detail-info'>
                    <h3>{name}</h3>
                    <h5>Review: {review}</h5>
                    <p><small>Ratings: {ratings} stars</small></p>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;