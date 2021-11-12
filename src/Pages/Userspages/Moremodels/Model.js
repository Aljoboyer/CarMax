import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Model = ({car}) => {
    const {_id,img,carname,price,descrip} = car
    return (
        <Col lg={6} md={6} sm={12}>
        <Row className="gx-3">
            <Col lg={6} md={6} sm={12}>
                 <img className="w-100 h-75 rounded" src={img} alt="" />
            </Col>
            <Col lg={6} md={6} sm={12} className="carrow">
                 <h3>{carname}</h3>
                 <h6 className="text-primary fw-bold">$ {price}</h6>
                 <p>{descrip}</p>
                 <Link to={`/buypage/${_id}`} ><button className="btn btn-warning fw-bold text-primary w-75 mb-4">Buy Now</button></Link>
            </Col>
         </Row>
    </Col>
    );
};

export default Model;