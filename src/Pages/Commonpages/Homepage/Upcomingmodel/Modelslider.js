import React from 'react';
import {Carousel} from 'react-bootstrap';
import Audi from '../../../../images/audi Q5.jpg.png';
import bhugatti from '../../../../images/bhughatti chiron.jpg';
import lemorgini from '../../../../images/hurracan2.jpg';
const Modelslider = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Audi}
            alt="First slide"
          />
          <Carousel.Caption className="carocap rounded">
            <h3 className="text-warning fw-bold fs-2">Audi Q5 Facelift</h3>
            <p className="text-warning fw-bold">Price $ 520001 EXPECTED LAUNCH DATE 29Nov-2021</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={bhugatti}
            alt="Second slide"
          />
          <Carousel.Caption className="carocap rounded">
            <h2 className="text-warning fw-bold fs-2">Bugatti Chiron</h2>
            <p className="text-warning fw-bold">Price $ 42356 EXPECTED LAUNCH DATE 15December-2021</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lemorgini}
            alt="Third slide"
          />
          <Carousel.Caption className="carocap rounded">
            <h3 className="text-warning fw-bold fs-2">lamborghini huracan</h3>
            <p className="text-warning fw-bold">Price $ 62356 EXPECTED LAUNCH DATE 25December-2021</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Modelslider;