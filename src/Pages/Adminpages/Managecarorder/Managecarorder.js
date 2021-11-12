import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import Deletemodal from '../../Commonpages/Deletemodal/Deletemodal';
import Order from './Order';
const Managecarorder = () => {
    const [allorders, setAllorders] = useState([]);
    const [demo, setDemo] = useState([])

    const [permission, setPermission] = useState(false);
    const handleClose = () => setPermission(false);
    const [isdelete, setIsdelete] = useState(false);
    const [deleteid, setDeleteid] = useState(null)

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
                    setDemo(allorders)
                }
                
            })
        }
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
                        DeleteHanlder={DeleteHanlder}
                        AcceptHanlder={AcceptHanlder}
                        key={allorder._id} allorder={allorder}></Order>)
                   }
                </tbody>
            </Table>

            <Deletemodal DeleteHanlder={DeleteHanlder} deleteid={deleteid} setDeleteid={setDeleteid} setPermission={setPermission} setIsdelete={setIsdelete} permission={permission} handleClose={handleClose} ></Deletemodal>
        </div>
    );
};

export default Managecarorder;