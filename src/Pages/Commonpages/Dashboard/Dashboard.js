import React from 'react';
import {Col, Row} from 'react-bootstrap'
import Headerpage from '../Headerpage/Headerpage';
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
import Payment from '../../Userspages/Pymentpage/Payment';
import Review from '../../Userspages/Reviewpage/Review';
import Addnewcar from '../../Adminpages/Addnewcar/Addnewcar';
import Manageallcar from '../../Adminpages/Manageallcar/Manageallcar';
import Managecarorder from '../../Adminpages/Managecarorder/Managecarorder';
import Makeadmin from '../../Adminpages/Makeadmin/Makeadmin';
const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className="container-fluid">
            <Row>
                <Headerpage></Headerpage>
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
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>


                    <Route path={`${path}/addcar`}>
                        <Addnewcar></Addnewcar>
                    </Route>
                    <Route path={`${path}/managecar`}>
                        <Manageallcar></Manageallcar>
                    </Route>
                    <Route path={`${path}/manageorder`}>
                        <Managecarorder></Managecarorder>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <Makeadmin></Makeadmin>
                    </Route>
                </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;