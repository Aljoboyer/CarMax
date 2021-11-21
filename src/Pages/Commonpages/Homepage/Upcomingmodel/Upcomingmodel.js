import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Modelslider from './Modelslider';

const Upcomingmodel = () => {
    return (
       <Row className="justify-content-center">
           <Col lg={7} md={6} sm={12}>
               <Modelslider></Modelslider>
           </Col>
           <Col lg={5} md={6} sm={12} className="upcomdis rounded d-flex align-items-center text-center">
               <Col className="p-4">
               <h2 className="fw-bold">Our Upcoming New Model</h2>
               <h5 className="fw-bold">Book Advance</h5>
               <h4 className="fw-bold">Get <h1>20% Discount</h1></h4>
               <button className="btn rounded advancebtn fw-bold fs-5">Advance Book Now <i className="fas fa-arrow-right"></i></button>
               </Col>
           </Col>
       </Row>
    );
};

export default Upcomingmodel;