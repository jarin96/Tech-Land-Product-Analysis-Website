import React from 'react';
import './CustomerReview.css';

const CustomerReview = (props) => {
    const { name, img, review, ratings } = props.review;
    return (
        <div className='reviewer'>
            <img src={img} alt="" />
            <div className='reviewer-info'>
                <p className='reviewer-name'>{name}</p>
                <p>{review}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
        </div>
    );
};

export default CustomerReview;