import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const Model = ({car}) => {
    const {_id,imgBuffer,carname,price,descrip} = car
    return (
     <Card style={{ width: '16rem' }}>
     <Card.Img variant="top" src={`data:image/png;base64,${imgBuffer}`} />
     <Card.Body>
       <Card.Title><h4>{carname}</h4></Card.Title>
       <Card.Text>
             <h6 className="text-primary fw-bold">$ {price}</h6>
             {descrip.slice(0, 150)}
       </Card.Text>
       <Link to={`/buypage/${_id}`} ><button className="btn btn-warning fw-bold text-primary w-75 mb-4">Buy Now</button></Link>
     </Card.Body>
   </Card>
    );
};

export default Model;