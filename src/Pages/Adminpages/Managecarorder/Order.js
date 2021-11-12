import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Order = ({allorder,AcceptHanlder,RejectHanlder}) => {
    return (
        <tr>
            <td>{allorder.username}</td>
            <td>{allorder.modelname}</td>
            <td>{allorder.price}</td>
            <td>{allorder.Orderdate}</td>
            <td>{allorder.paymentoption}</td>
            <td>{allorder.status}</td>
            <td><Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Order Action
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => AcceptHanlder(allorder._id)} className="fw-bold text-parimary">Approved</Dropdown.Item>
                    <Dropdown.Item onClick={() => RejectHanlder(allorder._id)} className="fw-bold text-danger">Reject</Dropdown.Item>                </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
    );
};

export default Order;