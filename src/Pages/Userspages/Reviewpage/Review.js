import React, { useState } from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Context/useAuth';
import './Review.css';

const Review = () => {
    const {user} = useAuth()
    const [reviews, setReviews] = useState('')
    const [rates, setRates] = useState(0)

    const ReviewHandler = e => {
        setReviews(e.target.value)
    }
    const SubmitHandler = e => {
        const newreview = {reviews,rates, customername:user.displayName}

        fetch('https://evening-caverns-02179.herokuapp.com/reviews',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newreview)
        })
        .then(res => res.json())
        .then(data => {
            e.target.reset()
        })
        e.preventDefault()
    }
    return (
        <div className="container-fluid addreview p-4 rounded">
            <Row>
                <Col lg={4} className="ms-auto">
                <h6 className=" fw-bold">Give Your Rating</h6>
              <Rating   
            initialRating={0}
            emptySymbol="far fa-star fa-2x"
            fullSymbol="fas fa-star fa-2x"
            onChange={(rate) => setRates(rate)}></Rating>
                </Col>
            </Row>
            <Form onSubmit={SubmitHandler}>
            <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold fs-5">Send Your Review</Form.Label>
                <Form.Control onBlur={ReviewHandler}  as="textarea" type="text" placeholder="Your Review" />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Send</button>
            </Form>
        </div>
    );
};

export default Review;