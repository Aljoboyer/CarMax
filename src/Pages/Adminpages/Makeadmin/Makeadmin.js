import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './makeadmin.css';
const Makeadmin = () => {
    const [email, setEmail] = useState('')
    const onblurHandler = e => {
        setEmail(e.target.value)
    }
    const SubmitHandler = e => {      
        fetch(`https://evening-caverns-02179.herokuapp.com/makeadmin?email=${email}`,{
            method: 'PUT',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idtoken')}`,
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount)
            {
                alert('Success')
            }
        })

        e.target.reset()
        e.preventDefault()
    } 
    return (
        <div className="container-fluid maknewadmin rounded">
            <h3 className="navtext fw-bold my-4 pt-4 text-center">Make a New Admin</h3>

            <form onSubmit={SubmitHandler} className="p-4">
            <Form.Floating className="mb-3 text-primary fw-bold">
                    <Form.Control
                    className="w-100"
                    id="floatingInputCustom"
                    type="email"
                    name="email"
                    onBlur={onblurHandler}
                    placeholder="Write Email"
                    />
                    <label htmlFor="floatingInputCustom">Enter Email Whom you want to make Admin</label>
                </Form.Floating>
                <button type="submit" className="p-3 btn btn-info fw-bold fs-5">Add</button>
            </form>
        </div>
    );
};

export default Makeadmin;