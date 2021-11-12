import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
const Dashboardmanu = () => {
    const { path, url } = useRouteMatch();
    const {isadmin,user,LogoutUser} = useAuth();
    
    const LogoutHandler = () => {
        LogoutUser()
    }

    return (
    <ListGroup className="mt-3 dashboardlist">
        {
            user.email ? <ListGroup.Item  variant="primary" onClick={LogoutHandler} className="logout fw-bold my-2">Logout</ListGroup.Item> : ''
        }
            <Link to={`${url}`}><ListGroup.Item  variant="primary" className=" fw-bold my-2"><i className="fas fa-chart-line me-2"></i> Dashboard</ListGroup.Item></Link>


        {
            isadmin ? <><Link to={`${url}/addcar`}><ListGroup.Item  variant="primary" className=" fw-bold my-2"><i className="fas fa-registered me-2"></i> Add new Car</ListGroup.Item></Link>
            <Link to={`${url}/managecar`}><ListGroup.Item  variant="primary" className=" fw-bold my-2">Manage All Car</ListGroup.Item></Link>
            <Link to={`${url}/manageorder`}><ListGroup.Item  variant="primary" className=" fw-bold my-2">Manage Car Order</ListGroup.Item></Link>
            <Link to={`${url}/makeadmin`}><ListGroup.Item  variant="primary" className=" fw-bold my-2">Make an Admin</ListGroup.Item></Link></>
            

            :

            <> <Link to={`${url}/myorder`}><ListGroup.Item  variant="primary" className=" fw-bold my-2"><i className="fab fa-first-order me-2"></i> My Order</ListGroup.Item></Link>

            <Link to={`${url}/payment`}><ListGroup.Item  variant="primary" className=" fw-bold"><i className="far fa-money-bill-alt me-2"></i> Payment</ListGroup.Item></Link>
    
            <Link to={`${url}/review`}><ListGroup.Item  variant="primary" className=" fw-bold my-2"><i className="fas fa-registered me-2"></i> Add a Review</ListGroup.Item></Link></>
        }
        
    </ListGroup>
    );
};

export default Dashboardmanu;