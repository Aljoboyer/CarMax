import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCarmodel from '../../Commonpages/Hooks/Hook';
import Caritem from './Caritem';
import './caritems.css'
const Caritems = () => {
    const {maincars} = useCarmodel();
    const regularmodel = maincars.slice(0,4)
    return (
       <>
       
           {
               regularmodel.length === 0 ? <div className="spinnerss mx-auto"></div> :
               <Row className="my-4 text-center container-fluid g-2 justify-content-center">
                   {
                       regularmodel.map(car => <Caritem key={car._id} car={car} ></Caritem>)
                   }
                  <Link to="/carshop"><button className="seemorbtn btn fs-5 my-4">See More Collection <i className="fas fa-angle-double-right"></i></button></Link>
               </Row>
           }
       </>
    );
};

export default Caritems;