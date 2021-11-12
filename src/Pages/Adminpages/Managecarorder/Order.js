import React from 'react';

const Order = ({allorder,AcceptHanlder,DeleteHanlder}) => {
    return (
        <tr>
            <td>{allorder.username}</td>
            <td>{allorder.modelname}</td>
            <td>{allorder.price}</td>
            <td>{allorder.Orderdate}</td>
            <td>{allorder.paymentoption}</td>
            <td>{allorder.status}</td>
            <td>
                <button onClick={() => AcceptHanlder(allorder._id)}  className="btn btn-success">Shipped</button>
                <button onClick={ () => DeleteHanlder(allorder._id,true)} className="btn btn-danger mb-3" >Delete Model</button>
            </td>
        </tr>
    );
};

export default Order;