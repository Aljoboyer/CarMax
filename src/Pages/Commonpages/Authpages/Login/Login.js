import React, { useState } from 'react';
import '../Authpage.css';
import useAuth from '../../../../Context/useAuth';
import {Row,Col, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Headerpage from '../../Headerpage/Headerpage';
import {useLocation,useHistory} from 'react-router-dom'
const Login = () => {
    const [formdata, setFormdata] = useState({});
    const {LoginUser, user,logerror} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }
    const SubmitHanlder = e => {
        LoginUser(formdata.email,formdata.password,location,history)
        e.target.reset()
        e.preventDefault()
    }
    return (
        <div className="container-fluid">
            <Headerpage></Headerpage>
            <Row className="algin-items-center justify-content-center login">
                <Col lg={7} sm={12} md={8} className="loginform my-4 p-4">
                    <h5 className="text-danger fw-bold">{logerror}</h5>
                <h3 className="my-4 fw-bold">Log in CarMax</h3>
                    <form onSubmit={SubmitHanlder}>
                    <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control
                    className="w-75"
                    id="floatingInputCustom"
                    type="email"
                    name="email"
                    onBlur={onblurHandler}
                    placeholder="Your Email address"
                    />
                    <label className="fw-bold text-primary" htmlFor="floatingInputCustom">Your Email address</label>
                </Form.Floating>
                <Form.Floating className="fw-bold text-primary">
                    <Form.Control className="w-75"
                    id="floatingPasswordCustom"
                    type="password"
                    name="password"
                    onBlur={onblurHandler}
                    placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Your Password</label>
                </Form.Floating>
                <button type="submit" className="btn btn-info fw-bold rounded my-3" >Login</button>
                    </form>

                    <Link className="fw-bold text-info fs-6" to="/register">Are New Here ? Register Please</Link>
                </Col>
            </Row>
        </div>
    );
};

export default Login;