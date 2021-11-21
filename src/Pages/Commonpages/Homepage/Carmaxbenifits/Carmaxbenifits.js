import React from 'react';
import {Row, Col} from 'react-bootstrap';
import nationwide from '../../../../images/nationwidelocation.png';
import guareente from '../../../../images/Guaranteed.png';
import reduced from '../../../../images/$50 reduced deductible.png';
const Carmaxbenifits = () => {
    return (
        <Row className="container-fluid text-center justify-content-center gy-2 gx-2">
            <h3 className="guraanteetitle fw-bold my-4 pt-4"><i>CarMax customers get great benefits!</i></h3>
            <Col lg={4} md={6} sm={12}>
                <img className="w-50 h-50" src={nationwide} alt="" />
                <p className="fw-bold guraanteetitle">Nationwide locations</p>
                <p  className="text-muted">We've partnered with RepairPal to provide you even more options when and where you need service.</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img className="w-50 h-50" src={guareente} alt="" />
            <p className="fw-bold guraanteetitle">Guaranteed repairs</p>
            <p  className="text-muted">Backed by a minimum 12,000-mile/12-month (whichever comes first) limited warranty for qualifying repairs.*</p>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img className="w-50 h-50" src={reduced} alt="" />
            <p className="fw-bold guraanteetitle">$50 reduced deductible**</p>
            <p className="text-muted">A special benefit for our MaxCare® customers that applies to both CarMax Service Center® and RepairPal Certified® Shops.</p>
            </Col>
        </Row>
    );
};

export default Carmaxbenifits;