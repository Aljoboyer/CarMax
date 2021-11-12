import React from 'react';
import {Col, Row} from 'react-bootstrap' 
const Car = ({newcar,DeleteHanlder}) => {
    const {_id,img,descrip,price,carname} = newcar;
    const newdescrip = descrip.slice(0, 100)
    return (
         <Col lg={6} md={6} sm={12}>
         <Row className="gx-3">
             <Col lg={6} md={6} sm={12}>
                  <img className="w-100 h-75 rounded" src={img} alt="" />
             </Col>
             <Col lg={6} md={6} sm={12}>
                  <h3>{carname}</h3>
                  <h6 className="text-primary fw-bold">$ {price}</h6>
                  <p>{newdescrip}</p>
                  <button onClick={ () => DeleteHanlder(_id,true)} className="btn btn-danger mb-3" >Delete Model</button>
             </Col>
          </Row>
     </Col>
    );
};

export default Car;