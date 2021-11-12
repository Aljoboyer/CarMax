import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Displayreview from './Displayreview';

const Displayreviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://evening-caverns-02179.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    
    return (
        <div className="container-fluid">
            <h1 className=" text-center fw-bold navtext pt-4 mb-2">Our Honorable Customer Review</h1>
        <Row className="justify-content-center gap-2 mt-4">
            {
                reviews.map(review => <Displayreview key={review._id} review={review} ></Displayreview>)
            }
        </Row>
        </div>
    );
};

export default Displayreviews;