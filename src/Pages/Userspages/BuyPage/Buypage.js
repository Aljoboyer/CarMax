import React, { useEffect, useState } from 'react';
import {Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router';
import Headerpage from '../../Commonpages/Headerpage/Headerpage';
import Orderplaceform from '../OrderplaceForm/Orderplaceform';
import Featureandspaces from './Featureandspaces/Featureandspaces.';
const Buypage = () => {
    const [buycar, setBuycar] = useState({});
    const {id} = useParams()
 
    useEffect(() => {
        fetch(`https://evening-caverns-02179.herokuapp.com/carmodels/${id}`)
        .then(res => res.json())
        .then(data => setBuycar(data))
    },[])

    return (
        <div className="container-fluid">
            <Headerpage></Headerpage>
            <Row className="justify-content-center">
                <Col lg={7} md={6} sm={12} className="p-4">
                    <Row>
                    <Col lg={6} md={12} sm={12}>
                        <img className="w-75 rounded"  src={`data:image/jpeg;base64,${buycar.imgBuffer}`} alt="" />
                        <h3>{buycar.carname}</h3>
                        <h5>{buycar.price}</h5>
                        <p><b className="text-primary">About This Car: </b>{buycar.descrip}</p>
                    </Col>
                    <Col  lg={6} md={12} sm={12}>
                    <Row className="featurerow bg-secondary ">
               <h4 className="fw-bold guraanteetitle">Features</h4>
               <Col lg={12} sm={12}>
                <h6 className="fw-bold guraanteetitle my-3">Comfort</h6>
                A/C Seat(s)Air ConditioningFront Seat HeatersLeather SeatsMemory Seat(s)Rear Air Conditioning
               </Col>
               <Col lg={12} sm={12}>
                <h6 className="fw-bold guraanteetitle my-3">Entertainment</h6>
                <p>AM/FM StereoAuxiliary Audio InputCD AudioSatellite Radio ReadySiriusXM Trial AvailableSony Sound SystemSync System</p>
               </Col>
               <Col lg={12} sm={12}>
                <h6 className="fw-bold guraanteetitle my-3">Interior</h6>
                <p>Overhead AirbagsPower Folding Third RowPower LocksPower MirrorsPower Seat(s)Power WindowsSide AirbagsThird Row Seat</p>
               </Col>
               <Col lg={12} sm={12}>
               <h6 className="fw-bold guraanteetitle my-3">Specifications</h6>
                <p>Performance
Torque (ft-lbs)

255 torque@4100rpm

Horsepower

290 horsepower@6500rpm

Fuel Capacity

18.600 gal</p>
               



               </Col>
               <Col lg={12} sm={12}>
               <p className="guraanteetitle"><b >Dimensions</b></p>


197.100" L x 78.900" W x 70.400" H

Wheelbase

112.600"

Front Tire Size (standard)

P255/50R20

Driver Leg Room

40.600"

Driver Head Room

41.400"

Cargo Capacity

21.000 cu ft

Curb Weight

4,697 lbs
               </Col>
           </Row>
                    </Col>
                    </Row>
                </Col>
                <Col  lg={5} md={6} sm={12} className="justify-content-center orderform">
                    <Orderplaceform buycar={buycar}></Orderplaceform>
                </Col>
            </Row>
            <Featureandspaces></Featureandspaces>
        </div>
    );
};

export default Buypage;