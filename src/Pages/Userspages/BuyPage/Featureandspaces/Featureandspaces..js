import React from 'react';
import {Row, Col} from 'react-bootstrap'
const Featureandspaces = () => {
    return (
       <Row className="container-fluid  mt-4 mb-4 ">
           <Col lg={6} md={6} sm={12} className="p-4 bg-warning rounded">
           <h3 className="fw-bold guraanteetitle"><i className="mx-2 far fa-heart fa-2x"></i> Love Your Car Guarantee</h3> 
            <p className="guraanteetitle"><i className="mx-2 fas fa-check"></i>24-hour test drives</p>
            <p className="guraanteetitle"><i className="mx-2 fas fa-check"></i>30-day money back guarantee(up to 1500 miles)</p>
           </Col>
           <Col lg={6} md={6} sm={12} className="p-4  reviewsec text-warning rounded">
           <h3 className="text-warning fw-bold"><i className="mx-2 fas fa-project-diagram fa-2x"></i>This Car is CarMax Certified</h3>
            <p>Every car we sell undergoes an extensive reconditioning process to meet our high standards. </p>
            <p><i className="mx-2 fas fa-check"></i>No major dents or dings</p>
            <p><i className="mx-2 fas fa-check"></i>Tires and wheels checked 15 ways</p>
            <p><i className="mx-2 fas fa-check"></i>Deep cleaned interior</p>
            <p><i className="mx-2 fas fa-check"></i>No frame or flood damage</p>
           </Col>
       </Row>
    );
};

export default Featureandspaces;