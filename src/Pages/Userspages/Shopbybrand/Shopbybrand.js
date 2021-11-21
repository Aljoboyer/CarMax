import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import bmw from '../../../images/bmwlogo.png';
import rr from '../../../images/rollroyecelogo.png';
import tesla from '../../../images/teslalogo.png';
import farrari from '../../../images/farrarilogo.jpg';
import Brand from './Brand';

const Shopbybrand = () => {
    const [brandcar, setBrandcar] = useState([]);
    
    const BrandHanlder = brand => {
        fetch(`http://localhost:5000/shopbybrand?brand=${brand}`)
        .then(res => res.json())
        .then(data => setBrandcar(data))
    }
    return (
        <div className="container-fluid">
            <h3 className="text-center fw-bold my-4"><i>Shop By Brand</i></h3>
           <Row className="container text-center">
              <Col lg={3} md={6} sm={12}>
                   <img  onClick={() => BrandHanlder('BMW')} className="imgcls w-50 h-50" src={bmw} alt=""/>
               </Col>
               <Col lg={3} md={6} sm={12}>
                    <img  onClick={() => BrandHanlder('RR')} className="imgcls w-50 h-50" src={rr} alt=""/>
               </Col>
               <Col lg={3} md={6} sm={12}>
                   <img  onClick={() => BrandHanlder('Tesla')} className="imgcls w-50 h-50" src={tesla} alt=""/>
               </Col>
               <Col lg={3} md={6} sm={12}>
                   <img  onClick={() => BrandHanlder('Farrari')} className="imgcls w-50 h-50" src={farrari} alt=""/>
               </Col>
           </Row>
           <Row  className="justify-content-center">
                {
                    brandcar.map(car => <Brand key={car._id} car={car}></Brand>)
                }
           </Row>
        </div>
    );
};

export default Shopbybrand;