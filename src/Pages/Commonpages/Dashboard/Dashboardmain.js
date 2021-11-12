import React from 'react';
import { Col, Row } from 'react-bootstrap';
import dashboardimg from '../../../images/maindashboard.jpg'
const Dashboardmain = () => {
    return (
        <Row className="justify-content-center">
            <h1 className="text-center navtext fw-bold my-3" >Your Dashboard</h1>
            <Col lg={8} sm={12} md={6} >
                <img className="h-75 w-100"  src={dashboardimg} ></img>
            </Col>
        </Row>
    );
};

export default Dashboardmain;