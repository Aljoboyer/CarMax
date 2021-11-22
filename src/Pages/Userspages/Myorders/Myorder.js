import React, { useState } from 'react';
import { Link , useRouteMatch} from 'react-router-dom';

const Myorder = ({order,DeleteHanlder}) => {
    const { path, url } = useRouteMatch();
    return (
    <tr>
        <td className="w-25"><img className="w-50 h-75" src={order.url} alt="" /></td>
        <td>{order.modelname}</td>
        <td>{order.price}</td>
        <td>{order.status}</td>
        <td>{order.paymentoption}</td>
        <td> { order.paymentoption
 === 'Online' ? <>  {order.payment ? <p className="fw-bold text-success">PAID</p> : <><Link to={`/payment/${order._id}`}><button className="btn btn-dark text-warning mx-2">Payment</button></Link><button onClick={() => DeleteHanlder(order._id,true)} className="btn btn-danger text-light">Cancel Order</button></>}</> : <button onClick={() => DeleteHanlder(order._id,true)} className="btn btn-danger text-light">Cancel Order</button>} </td>
    </tr>
    );
};

export default Myorder;