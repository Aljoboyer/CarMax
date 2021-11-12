import React from 'react';
import { Row } from 'react-bootstrap';
import Headerpage from '../../Commonpages/Headerpage/Headerpage';
import useCarmodel from '../../Commonpages/Hooks/Hook';
import Model from './Model';
const Moremodels = () => {
    const {cars,totalpage,setPageno, pageno} = useCarmodel();

    return (
        <div className="container-fluid">
            <Headerpage></Headerpage>
            <div className="text-center">
            {
               
               [...Array(totalpage).keys()].map(number => <button onClick={() => setPageno(number)} className={number === pageno  ? 'btn btn-primary mx-3' : 'btn btn-warning mx-3'} >Page {number}</button>)
           }
            </div>
          
            {
                cars.length === 0 ? <div className="lds-facebook"><div></div><div></div><div></div></div> : <Row className="justify-content-center mt-3">
                {
                    cars.map(car => <Model key={car._id} car={car} ></Model>)
                }
            </Row>
            }
        </div>
    );
};

export default Moremodels;