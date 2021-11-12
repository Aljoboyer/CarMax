import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
const Headerpage = () => {
  const {user,LogoutUser} = useAuth();

  const LogoutHandler = () => {
    LogoutUser()
  }
    return (
        <Navbar  collapseOnSelect expand="lg" bg="" variant="">
        <Container className="p-4">
        <Navbar.Brand as={Link} to="/" className="navtext fw-bold fs-1">CarMax</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ><i className="fas fa-sliders-h"></i></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navtext fw-bold fs-6 ms-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/moremodels" className="navtext fw-bold fs-6 ms-4">More Car Models</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="navtext fw-bold fs-6 ms-4">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            {
              user.email ? <button onClick={LogoutHandler} className="btn btn-info text-dark fw-bold rounded" >Log-Out</button> :    <Nav.Link as={Link} to="/login" className="navtext fw-bold fs-5 bg-warning rounded">Login</Nav.Link>
            }
          </Nav>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Headerpage;