import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
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
                    <h5> {review}</h5>
                    <p className='ratings'><small>{ratings} <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='icon-color' icon={faStarHalfAlt}></FontAwesomeIcon>
                    </small></p>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;