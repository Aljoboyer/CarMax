import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
import Deletemodal from '../../Commonpages/Deletemodal/Deletemodal';
import Successmodal from '../../Commonpages/Successmodal/Successmodal';
import Myorder from './Myorder';

const Myorders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const [permission, setPermission] = useState(false);
    const handleClose = () => setPermission(false);
    const [isdelete, setIsdelete] = useState(false);
    const [deleteid, setDeleteid] = useState(null)
    const [demo, setDemo] = useState([])
    useEffect(() => {
        fetch(`https://evening-caverns-02179.herokuapp.com/myorder?email=${user.email}`,{
            headers:{
                'authorization':`Bearer ${localStorage.getItem('idtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user.email,orders])
    
    const DeleteHanlder = (id,ispermission) => {
        setPermission(ispermission)
        setDeleteid(id)
        setIsdelete(true);

        if(isdelete)
        {

            fetch(`https://evening-caverns-02179.herokuapp.com/deleteorder/${id}`,{
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                
                if(data.deletedCount)
                {
                   
                    setIsdelete(false)
                    setDemo(orders)
                }
                
            })
        }
    }
    return (
        <div className="container-fluid">
              { orders.length === 0 ? <div className="spinnerss mx-auto"></div> :  
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>Model Image</th>
                        <th>Model Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>PaymentOption</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                       {
                           orders.map(order => <Myorder DeleteHanlder={DeleteHanlder} key={order._id} order={order}></Myorder>)
                       }
                  
                    </tbody> 
                
        </Table>
        }
        <Deletemodal DeleteHanlder={DeleteHanlder} deleteid={deleteid} setDeleteid={setDeleteid} setPermission={setPermission} setIsdelete={setIsdelete} permission={permission} handleClose={handleClose} ></Deletemodal>
        </div>
    );
};

export default Myorders;