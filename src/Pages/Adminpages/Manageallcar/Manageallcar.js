import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Deletemodal from '../../Commonpages/Deletemodal/Deletemodal';
import useCarmodel from '../../Commonpages/Hooks/Hook';
import Car from './Car';

const Manageallcar = () => {
    const {pageno,cars,totalpage,setPageno, setDemocar} = useCarmodel();
    const [permission, setPermission] = useState(false);
    const handleClose = () => setPermission(false);
    const [isdelete, setIsdelete] = useState(false);
    const [deleteid, setDeleteid] = useState(null)
    const [show, setShow] = useState(false)

    const DeleteHanlder = (id,ispermission) => {
        setPermission(ispermission)
        setDeleteid(id)
        setIsdelete(true);
        console.log(id)
        if(isdelete)
        {

            fetch(`https://evening-caverns-02179.herokuapp.com/deletecar/${id}`,{
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                
                if(data.deletedCount)
                {
                   
                    setIsdelete(false)
                    setDemocar(cars)
                }
                
            })
        }
    }
   
    return (
        <div className="container-fluid">
           <h1 className="navtext fw-bold mb-4 text-center">Manage All Car</h1>
           <div className="text-center">
            {
               
               [...Array(totalpage).keys()].map(number => <button onClick={() => setPageno(number)} className={number === pageno  ? 'btn btn-primary mx-3' : 'btn btn-warning mx-3'} >Page {number}</button>)
           }
            </div>
           {
               cars.length === 0 ? <div className="spinnerss mx-auto"></div> : <Row className="justify-content-center mt-4">
               {
                   cars.map(newcar => <Car DeleteHanlder={DeleteHanlder} key={newcar._id} newcar={newcar} ></Car>)
               }
           </Row>
           }

<Deletemodal DeleteHanlder={DeleteHanlder} deleteid={deleteid} setDeleteid={setDeleteid} setPermission={setPermission} setIsdelete={setIsdelete} permission={permission} handleClose={handleClose} ></Deletemodal>
        </div>
    );
};

export default Manageallcar;