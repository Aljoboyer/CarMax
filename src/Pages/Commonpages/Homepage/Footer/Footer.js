import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid footer mt-4 rounded">
            <Row className="p-4 my-3">
                <Col lg={4} md={4} sm={12}>
                    <h2 className="fw-bold">CarMax</h2>
                    <i className="fab fa-facebook-square fa-2x"></i>
                    <i className="fab fa-twitter fa-2x ms-3"></i>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <h4 className="fw-bold">Call Us</h4>
                    <i className="fas fa-phone-alt"></i>
                    <p>+99665588</p>
                </Col>
            </Row>
            <Row className="p-4 my-3 ">
                <Col lg={3} md={6} sm={12} className="footerbottom" >
                    <h4>Shop</h4>
                    <li><a href="">Browse By Category</a></li>
                    <li><a href="">View All Inventory</a></li>
                    <li><a href="">Find a Store</a></li>
                </Col>
                <Col lg={3} md={6} sm={12} className="footerbottom">
                <h4>Sell/Trade</h4>
                    <li><a href="">Get Online Offer</a></li>
                </Col>
                <Col lg={3} md={6} sm={12} className="footerbottom">
                    <h4>About</h4>
                    <li><a href="">About CarMax</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Social Responsibility</a></li>
                    <li><a href="">Find a Store</a></li>
                    <li><a href="">CarMax Foundation</a></li>
                    <li><a href="">Media Center</a></li>
                    <li><a href="">Investor Relations</a></li>
                </Col>
                <Col lg={3} md={6} sm={12} className="footerbottom">
                     <h4>More</h4>
                    <li><a href="">Service And Repairs</a></li>
                    <li><a href="">FAQ And Support</a></li>
                    <li><a href="">Research Articles</a></li>
                    <li><a href="">Warranties And MaxCare®</a></li>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;