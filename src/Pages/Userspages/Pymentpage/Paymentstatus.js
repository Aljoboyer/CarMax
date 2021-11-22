import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';

const Paymentstatus = () => {
    const {user} = useAuth()
    const [paymentstatus, setPaymentstatus] = useState([])
    useEffect(() => {
        fetch(`https://evening-caverns-02179.herokuapp.com/myorder?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => setPaymentstatus(data))
    },[user.email])
    console.log(paymentstatus)
    return (
        <div className="container-fluid">
            <h1 className="fw-bold guraanteetitle my-4">Your Pyment Status</h1>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>Pyment Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                    <tbody>
                       {
                           paymentstatus.map(order => <tr>
                               <td>{order.payment.paymentdate}</td>
                           <td>{order.payment.amount}</td> </tr>)
                       }
                  
                    </tbody> 
                
        </Table>
        </div>
    );
};

export default Paymentstatus;