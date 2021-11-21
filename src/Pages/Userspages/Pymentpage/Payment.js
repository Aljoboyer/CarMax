import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkoutform from './Checkoutform';
import { useParams } from 'react-router';
import { Row } from 'react-bootstrap';
import Headerpage from '../../Commonpages/Headerpage/Headerpage';

const stripePromise =  loadStripe('pk_test_51Jw2mpBSwbB9BMbhsyE9VsMWMbgeGoz35VdXDYoB2C1QGFkx7JTaEG4FFXG3pyBkqupeooBX2z3nPu0zERZuO1Tw00ZtAW0Wtx');

const Payment = () => {
    const [paymentdata, setPaymentdata] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/paymentorder/${id}`)
        .then(res => res.json())
        .then(data => setPaymentdata(data))
    },[id])
    return (
    <Row className="container-fluid">
        <Headerpage></Headerpage>
        <h2 className="text-center fw-bolt my-4">{paymentdata.username}Pay Your Bill {paymentdata.price}</h2>
        {
            paymentdata.price && <Elements  stripe={stripePromise}>
            <Checkoutform paymentdata={paymentdata} />
        </Elements>
        }
    </Row>
    );
};

export default Payment;