import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Headerpage from '../../Commonpages/Headerpage/Headerpage';
import Moremodels from '../Moremodels/Moremodels';
import Shopbybrand from '../Shopbybrand/Shopbybrand';
import './Carshop.css';

const Carshop = () => {
    return (
        <div className="container-fluid">
            <Headerpage></Headerpage>
            <Row className="shoprow d-flex justify-content-center align-items-center">
                <Col className="text-center text-light p-4" lg={9} sm={10} md={12}>
                    <h1>Shop the nation’s largestused car inventory</h1>
                    <p className="fw-bold">Then buy online</p>
                </Col>
            </Row>
            <Shopbybrand></Shopbybrand>
            <Moremodels></Moremodels>
        </div>
    );
};

export default Carshop;