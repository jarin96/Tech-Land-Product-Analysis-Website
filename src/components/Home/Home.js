import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import HomeReview from '../HomeReview/HomeReview';
import { faPeopleGroup, faLaptopFile } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import image from './images/laptop.png';
const Home = () => {
    const [reviews, setReviews] = useProducts();

    const navigate = useNavigate();
    const showAllReviewer = () => {
        const path = `/reviews`;
        navigate(path);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1 className='product-colors'> TECH<span className='product-colors2'> LAND </span>
                    <FontAwesomeIcon icon={faLaptopFile}></FontAwesomeIcon>
                </h1>
                <h1 className='products-color'>Your next Laptop</h1>
                <h1 className='product-color'>Your best Laptop</h1>
                <br />
                <p>Everyday laptops give you the best range of exclusive usability features and a wide color choice.<br></br> They are the best laptops for always-great affordability for everyone.</p>

            </div>
            <div className="product-details">
                <img src={image} alt="" />
            </div>
            <div className='reviewers-container'>
                <h1 className='customer text-center'>Customer Reviews <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon> </h1>
                <div className='review-items-container'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview
                            key={review.id}
                            review={review}
                        ></HomeReview>)
                    }
                    <div className="d-grid gap-2 btn-color">
                        <Button onClick={showAllReviewer} variant="primary" size="lg">
                            See ALL Reviews
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;