import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
const Displayreview = ({review}) => {
    return (
        <Col lg={3} md={6} sm={12} className="carrow p-3">
            <h6 className="text-muted text-primary fw-bold"><i className="fas fa-user-alt fa-2x"></i> {review.customername}</h6>
            <h5 className="">{review.reviews}</h5>
            <Rating   
            initialRating={review.rates}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
                readonly></Rating>
        </Col>
    );
};

export default Displayreview;