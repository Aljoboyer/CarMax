import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Dashboardmanu from './Dashboardmanu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Dashboardmain from './Dashboardmain'
import Myorders from '../../Userspages/Myorders/Myorders';
import Review from '../../Userspages/Reviewpage/Review';
import Addnewcar from '../../Adminpages/Addnewcar/Addnewcar';
import Manageallcar from '../../Adminpages/Manageallcar/Manageallcar';
import Managecarorder from '../../Adminpages/Managecarorder/Managecarorder';
import Makeadmin from '../../Adminpages/Makeadmin/Makeadmin';
import Adminroute from '../../Adminpages/Adminroute/Adminroute'
import Dashboardnavbar from './Dashboardnavbar';
import Paymentstatus from '../../Userspages/Pymentpage/Paymentstatus';
import Payment from '../../Userspages/Pymentpage/Payment';
const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className="container-fluid">
            <Row>
                <Dashboardnavbar></Dashboardnavbar>
                <Col lg={2} md={4} sm={12} className="bg-primary">
                    <Dashboardmanu></Dashboardmanu>
                </Col>
                <Col lg={10} md={4} sm={12}>
                <Switch>
                    <Route exact path={path}>
                        <Dashboardmain></Dashboardmain>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <Myorders></Myorders>
                    </Route>
                    <Route path={`${path}/paymentstatus`}>
                        <Paymentstatus></Paymentstatus>
                    </Route>
                    
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>


                    <Adminroute path={`${path}/addcar`}>
                        <Addnewcar></Addnewcar>
                    </Adminroute>
                    <Adminroute path={`${path}/managecar`}>
                        <Manageallcar></Manageallcar>
                    </Adminroute>
                    <Adminroute path={`${path}/manageorder`}>
                        <Managecarorder></Managecarorder>
                    </Adminroute>
                    <Adminroute path={`${path}/makeadmin`}>
                        <Makeadmin></Makeadmin>
                    </Adminroute>
                </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;