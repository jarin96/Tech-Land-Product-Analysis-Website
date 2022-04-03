import React from 'react';

const HomeReview = (props) => {
    const { name, img, review, ratings } = props.review;
    return (
        <div>
            <h1>This is home review: {name}</h1>
            {/* <img src={img} alt="" />
            <p>{review}</p>
            <p>{ratings} stars</p> */}
        </div>
    );
};

export default HomeReview;