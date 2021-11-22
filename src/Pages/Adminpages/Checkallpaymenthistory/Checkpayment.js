import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Checkpayment = () => {
    const [allorders, setAllorders] = useState([]);

    useEffect(() => {
        fetch('https://evening-caverns-02179.herokuapp.com/allorders')
        .then(res => res.json())
        .then(data => setAllorders(data))
    },[])
    console.log(allorders)
    return (
        <div className="container-fluid">
             <h1 className="navtext fw-bold mb-4 text-center">All Customers Order</h1>
            <Table striped bordered hover responsive="sm" >
                <thead>
                    <tr>
                    <th>Customer Name</th>
                    <th>Model Name</th>
                    <th>Amount</th>
                    <th>Ordered Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allorders.length === 0 ? 'Hi' : <> {
                            allorders.map(allorder =>
                            <tr>
                                <td>{allorder.username}</td>
                                <td>{allorder.modelname}</td>
                                <td>{allorder.payment?.paymentdate}</td>
                                <td>{allorder.payment?.amount}</td>
                            
                            </tr>)
                        }</>
                    }
                   
                </tbody>
            </Table>
        </div>
    );
};

export default Checkpayment;