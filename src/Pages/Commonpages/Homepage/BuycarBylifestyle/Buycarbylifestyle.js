import React from 'react';
import {Row, Col} from 'react-bootstrap';
import commuter from '../../../../images/commuter.png';
import ecofirendly from '../../../../images/eco-friendly.png';
import family from '../../../../images/family.png';
import outdoor from '../../../../images/outdoor.png';
const Buycarbylifestyle = () => {
    return (
        <Row className="justify-content-center p-3 lifestyle mt-4 mb-4">
            <h3 className="text-light text-center fw-bold"><i>Buy Car By Lifestyle</i></h3>
            <Col lg={3} md={6} sm={12}>
                <img src={commuter} alt="" />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <img src={ecofirendly} alt="" />
            </Col>
            <Col lg={3} md={6} sm={12}>
                 <img src={family} alt="" />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <img src={outdoor} alt="" />
            </Col>
        </Row>
    );
};

export default Buycarbylifestyle;