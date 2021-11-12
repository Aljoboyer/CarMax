import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import Order from './Order';
const Managecarorder = () => {
    const [allorders, setAllorders] = useState([]);
    const [demo, setDemo] = useState([])
    console.log('allorders',allorders)
    useEffect(() => {
        fetch('https://evening-caverns-02179.herokuapp.com/allorders')
        .then(res => res.json())
        .then(data => setAllorders(data))
    },[demo])

    const AcceptHanlder =  (id)  => {
        fetch(`https://evening-caverns-02179.herokuapp.com/action?id=${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setDemo(allorders)
        })
    }
    const RejectHanlder = id => {
        fetch(`https://evening-caverns-02179.herokuapp.com/reject?id=${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setDemo(allorders)
        })
    }
    return (
        <div className="container-fluid">
            <h1 className="navtext fw-bold mb-4 text-center">All Customers Order</h1>
            <Table striped bordered hover responsive="sm" >
                <thead>
                    <tr>
                    <th>Customer Name</th>
                    <th>Ordered Model</th>
                    <th>Price</th>
                    <th>Ordered Date</th>
                    <th>Selected Payment Method</th>
                    <th>status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       allorders.map(allorder => <Order
                        AcceptHanlder={AcceptHanlder}
                        RejectHanlder={RejectHanlder}
                        key={allorder._id} allorder={allorder}></Order>)
                   }
                </tbody>
            </Table>
        </div>
    );
};

export default Managecarorder;