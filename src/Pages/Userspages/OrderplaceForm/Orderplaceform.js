import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';

const Orderplaceform = ({buycar}) => {
    const {user} = useAuth()
    
    const [formdata, setFormdata] = useState({email:user.email,username:user.displayName,modelname:buycar.carname});
    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }
    const SubmitHanlder = (e) => {
        formdata.Orderdate = new Date().toLocaleDateString()
        formdata.status = 'Pending';
        formdata.url = buycar.img;
        formdata.price = buycar.price;
        fetch('https://evening-caverns-02179.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(formdata)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            {   
                alert('Ordered SuccesFully')
                e.target.reset()
            }
        })
        e.preventDefault()
    }
    return (
        <Row className="loginform algin-items-center justify-content-center p-4">
        <h3 className="my-4 text-primary">Purchase Your Car</h3>
            <form onSubmit={SubmitHanlder}>
            <Row>
            <Form.Floating as={Col} className="mb-3 fw-bold text-primary ">
            <Form.Control
            className="w-75"
            id="floatingInputCustom"
            type="text"
            name="username"
            onBlur={onblurHandler}
            defaultValue={user.displayName}
            required
            />
            <label htmlFor="floatingInputCustom">Your Name</label>
        </Form.Floating>

        <Form.Floating as={Col}  className="mb-3 fw-bold text-primary">
            <Form.Control className="w-75"
            id="floatingPasswordCustom"
            type="number"
            name="phone"
            onBlur={onblurHandler}
            placeholder="Your Phone No"
            
            />
            <label htmlFor="floatingPasswordCustom">Phone No</label>
        </Form.Floating>     
        </Row>

            <Form.Floating className="mb-3 fw-bold text-primary">
            <Form.Control
            className="w-75"
            id="floatingInputCustom"
            type="email"
            name="email"
            required
            onBlur={onblurHandler}
            defaultValue={user.email}
            />
            <label htmlFor="floatingInputCustom">Your Email address</label>
        </Form.Floating>

        <Form.Floating as={Col} className="mb-3 fw-bold text-primary">
            <Form.Control className="w-75"
            id="floatingPasswordCustom"
            type="text"
            name="modelname"
            onChange={onblurHandler}
            value={formdata.modelname}
            
            />
            <label htmlFor="floatingPasswordCustom">Your Car-Model</label>
        </Form.Floating>
        <Form.Floating as={Col} className="mb-3 fw-bold text-primary">
            <Form.Control className="w-75"
            id="floatingPasswordCustom"
            type="text"
            name="location"
            onBlur={onblurHandler}
            placeholder="Your Location"
            
            />
            <label htmlFor="floatingPasswordCustom">Your Location</label>
        </Form.Floating>

            <Form.Group  as={Col} controlId="formGridState">
        <Form.Label className="mb-3 fw-bold text-primary">Choose payment option</Form.Label>
        <Form.Select name="paymentoption"  onBlur={onblurHandler} defaultValue="Manual Payment">
            <option>Manual Payment</option>
            <option>PayPal</option>
           
        </Form.Select>
        </Form.Group>
        <button type="submit" className="btn btn-info fw-bold rounded my-3 w-50" >Purchase</button>
            </form>
    </Row>
    );
};

export default Orderplaceform;