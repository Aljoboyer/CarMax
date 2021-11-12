import React from 'react';
import { Row } from 'react-bootstrap';
import useCarmodel from '../../Commonpages/Hooks/Hook';
import Caritem from './Caritem';
import './caritems.css'
const Caritems = () => {
    const {maincars} = useCarmodel();
    const regularmodel = maincars.slice(0,6)
    return (
       <>
       
           {
               regularmodel.length === 0 ? <div className="spinnerss mx-auto"></div> :
               <Row className="my-4 container-fluid g-2 justify-content-center">
                   {
                       regularmodel.map(car => <Caritem key={car._id} car={car} ></Caritem>)
                   }
               </Row>
           }
       </>
    );
};

export default Caritems;