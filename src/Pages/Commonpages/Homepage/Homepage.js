import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Caritems from '../../Userspages/Caritems/Caritems';
import Gureenty from '../Gureentypage/Gureenty';
import Headerpage from '../Headerpage/Headerpage';
import Buycarbylifestyle from './BuycarBylifestyle/Buycarbylifestyle';
import Displayreviews from './Displayreview/Displayreviews';
import './homepage.css'
import Upcomingmodel from './Upcomingmodel/Upcomingmodel';
import Carmaxbenifits from './Carmaxbenifits/Carmaxbenifits'
const Homepage = () => {
    return (
        <div className="container-fluid ">
            <Row className="homepagerow">
            <Headerpage></Headerpage>
            <Row className="align-items-center my-4 p-4">
                <Col className=" p-4 bg-light text-center homecol mt-4 mb-4 rounded" lg={5} sm={12} md={6}>
                    <h1>Love Your Car Guarantee</h1>
                    <h5 className="my-4">24-hr test drives <i className="fab fa-gratipay fa-2x"></i> 30-day returns</h5>
                    <button className="w-50 btn btn-warning text-primary fw-bold my-2">Find Your Car</button>
                </Col>
            </Row>
            </Row>
            <Gureenty></Gureenty>
            <h1 className="navtext fw-bold text-center my-4 fs-1  p-3 rounded">Our  Collection</h1>
            <Caritems></Caritems>
            <Buycarbylifestyle></Buycarbylifestyle>
            <Upcomingmodel></Upcomingmodel>
            <Displayreviews></Displayreviews>
            <Carmaxbenifits></Carmaxbenifits>
        </div>
    );
};

export default Homepage;