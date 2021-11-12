import React from 'react';
import {Col, Row} from 'react-bootstrap';
import error from '../../../images/error.jpg'
import {Link} from 'react-router-dom';
import Headerpage from '../Headerpage/Headerpage';
const Notfound = () => {
    return (
        <div className="container-fluid">
            <Row className="justify-content-center">
                <Col lg={7} md={10} sm={12}>
                    <img className="h-50 w-100" src={error} alt="" />
                    <Link to="/"><button className="btn btn-dark text-warning p-3 fw-bold mt-4">Go To Home</button></Link>
                </Col>
            </Row>
        </div>
    );
};

export default Notfound;