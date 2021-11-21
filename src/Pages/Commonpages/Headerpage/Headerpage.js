import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
const Headerpage = () => {
  const {user,LogoutUser,setIsadmin} = useAuth();

  const LogoutHandler = () => {
    setIsadmin(false)
    LogoutUser()
  }
    return (
        <Navbar  collapseOnSelect expand="lg" bg="" variant="">
        <Container className="p-4">
        <Navbar.Brand as={Link} to="/" className="navtext fw-bold fs-1">Car <i className="fas fa-car-alt"></i> Max</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ><i className="fas fa-sliders-h"></i></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navtext fw-bold fs-6 ms-4"><i className="fas fa-home"></i> Home</Nav.Link>
            <Nav.Link as={Link} to="/carshop" className="navtext fw-bold fs-6 ms-4"><i className="fas fa-angle-double-right"></i>CarShop</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="navtext fw-bold fs-6 ms-4"><i className="fas fa-chart-line"></i> Dashboard</Nav.Link>
          </Nav>
          <Nav>
            {
              user.email ? <button onClick={LogoutHandler} className="btn btn-info text-dark fw-bold rounded" >Log-Out <i className="fas fa-sign-out-alt"></i></button> :    <Nav.Link as={Link} to="/login" className="navtext fw-bold fs-5 bg-warning rounded">Login <i className="fas fa-sign-in-alt"></i></Nav.Link>
            }
          </Nav>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Headerpage;