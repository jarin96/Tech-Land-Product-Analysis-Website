import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
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
                <p className='ratings'>{ratings}
                    <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon-color' icon={faStarHalfAlt}></FontAwesomeIcon>
                </p>
            </div>
        </div>
    );
};

export default CustomerReview;