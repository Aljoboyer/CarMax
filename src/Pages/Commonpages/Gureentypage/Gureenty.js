import React from 'react';
import {Row, Col} from 'react-bootstrap';
import drive from '../../../images/24hrtest.svg';
import thirtyday from '../../../images/30days.svg';
import majorcover from '../../../images/majorcover.svg';
const Gureenty = () => {
    return (
        <Row className="justify-content-center text-center align-items-center">
            <h2 className="guraanteetitle fw-bold my-4">Guarantee AND limited warranty</h2>
            <Col  lg={4} md={6} sm={12}>
                <img className="w-25 h-25" src={drive} alt="" />
            <h4 className="guraanteetitle my-3">24-hour test drives</h4>
            <p>With 24 hours to test it out, you can see if the car you want fits you and your life.</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img className="w-25 h-25" src={thirtyday} alt="" />
                <h4 className="guraanteetitle my-3">30-day returns (up to 1500 miles)</h4>
                <p>Take a full 30 days or 1500 miles to make sure the one you buy is the one you love.</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img className="w-25 h-25" src={majorcover} alt="" />
                <h4 className="guraanteetitle my-3">All major systems covered</h4>
                <p>You’ll drive worry-free for 90 days or 4,000 miles (whichever comes first).*</p>
            </Col>
        </Row>
    );
};

export default Gureenty;