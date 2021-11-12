import React, { useState } from 'react';

const Myorder = ({order,DeleteHanlder}) => {
    
    return (
                <tr>
                    <td className="w-25"><img className="w-50 h-75" src={order.url} alt="" /></td>
                    <td>{order.modelname}</td>
                    <td>{order.price}</td>
                    <td>{order.status}</td>
                    <td><button onClick={() => DeleteHanlder(order._id,true)} className="btn btn-danger text-light">Cancel Order</button></td>
                </tr>
    );
};

export default Myorder;