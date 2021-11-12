import React, { useEffect, useState } from 'react';
import {Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router';
import Headerpage from '../../Commonpages/Headerpage/Headerpage';
import Orderplaceform from '../OrderplaceForm/Orderplaceform';
const Buypage = () => {
    const [buycar, setBuycar] = useState({});
    const {id} = useParams()
 
    useEffect(() => {
        fetch(`https://evening-caverns-02179.herokuapp.com/carmodels/${id}`)
        .then(res => res.json())
        .then(data => setBuycar(data))
    },[])

    return (
        <div className="container-fluid">
            <Headerpage></Headerpage>
            <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12} className="p-4">
                    <img className="w-75 rounded" src={buycar.img} alt="" />
                    <h3>{buycar.carname}</h3>
                    <h5>{buycar.price}</h5>
                    <p><b className="text-primary">About This Car: </b>{buycar.descrip}</p>
                </Col>
                <Col lg={6} md={6} sm={12} className="justify-content-center">
                    <Orderplaceform buycar={buycar}></Orderplaceform>
                </Col>
            </Row>
        </div>
    );
};

export default Buypage;