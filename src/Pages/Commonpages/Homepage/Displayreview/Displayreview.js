import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
const Displayreview = ({review}) => {
    return (
        <div className="carrow p-3 mx-2 bg-light">
            <h6 className="text-muted text-primary fw-bold"><i className="fas fa-user-alt fa-2x"></i> {review.customername}</h6>
            <h5 className="">{review.reviews}</h5>
            <Rating   
            initialRating={review.rates}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
                readonly></Rating>
        </div>
    );
};

export default Displayreview;