import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
import Successmodal from '../../Commonpages/Successmodal/Successmodal';

const Addnewcar = () => {
    const {user} = useAuth();
    const [show, setShow] = useState(false);
    const [formdata, setFormdata] = useState({});
    const [img, setImg] = useState(null);
    const handleClose = () => setShow(false);

    const imageHanlder = (e) => {
        setImg(e.target.files[0])
    }
    
    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }
    const SubmitHanlder = e => {
        e.preventDefault()
        if(!img)
        {
            return
        }
        const cardata = new FormData();
        cardata.append('carname', formdata.carname);
        cardata.append('price', formdata.price);
        cardata.append('img', img);
        cardata.append('descrip', formdata.descrip);
        cardata.append('brand', formdata.brand)
        fetch('https://evening-caverns-02179.herokuapp.com/carmodels',{
            method: 'POST',
            body: cardata
        })
        .then(res => res.json())
        .then(data => {
            if(data)
            {
                setShow(true)
                e.target.reset()
            }
        })
        .catch(error => {
              
            console.error('Error:', error);
          });
        
    }
    return (
        <div className="container-fluid">
            <Row className="loginform algin-items-center justify-content-center p-4">
        <h3 className="navtext fw-bold mb-4 text-center">Add A New Car</h3>
            <form onSubmit={SubmitHanlder}>
            <Row>
            <Form.Floating as={Col} className="mb-3 fw-bold text-primary ">
            <Form.Control
            className="w-100"
            id="floatingInputCustom"
            type="text"
            name="carname"
            onBlur={onblurHandler}
            required
            placeholder="Car Model Name"
            />
            <label htmlFor="floatingInputCustom">Car Model Name</label>
        </Form.Floating>

        <Form.Floating as={Col}  className="mb-3 fw-bold text-primary">
            <Form.Control className="w-100"
            id="floatingPasswordCustom"
            type="number"
            name="price"
            onBlur={onblurHandler}
            placeholder="Car Price"
            />
            <label htmlFor="floatingPasswordCustom">Car Price</label>
        </Form.Floating>     
        </Row>

        <Row>
        <Form.Group as={Col} className="mb-3 fw-bold text-primary">
            <Form.Label>Choose image</Form.Label>
            <Form.Control
            accept="image/*"
              type="file"
              required
              name="img"
              onChange={imageHanlder}
              
            />
            <Form.Control.Feedback type="invalid" tooltip>
              
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Floating as={Col} className="mb-3 fw-bold text-primary">
            <Form.Control as="textarea" className="w-100"
            id="floatingPasswordCustom"
            type="text"
            name="brand"
            onBlur={onblurHandler}
            placeholder="Car Brand Name"
            />
            <label htmlFor="floatingPasswordCustom">Car Brand Name</label>
        </Form.Floating>
        </Row>

        <Form.Floating as={Col} className="mb-3 fw-bold text-primary">
            <Form.Control as="textarea" className="w-100"
            id="floatingPasswordCustom"
            type="text"
            name="descrip"
            onBlur={onblurHandler}
            placeholder="Car Description"
            />
            <label htmlFor="floatingPasswordCustom">Car Description</label>
        </Form.Floating>

        <button type="submit" className="btn btn-info fw-bold rounded my-3 w-50" >Add Car</button>
            </form>
    </Row>

    <Successmodal setShow={setShow} show={show} handleClose={handleClose}>Car Added Successfully</Successmodal>
        </div>
    );
};

export default Addnewcar;