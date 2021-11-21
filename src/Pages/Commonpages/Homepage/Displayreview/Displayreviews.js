import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Displayreview from './Displayreview';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Displayreviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://evening-caverns-02179.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="container mt-4 reviewsec pb-4 pt-4 mt-4 mb-4 rounded">
        <h3 className="mb-3 text-center fw-bold text-light pt-4 mb-2">Our Honorable Customer Review</h3>

        <Slider {...settings}>
            {
                reviews.map(review => <Displayreview key={review._id} review={review} ></Displayreview>)
            }
        </Slider>
        </div>
    );
};

export default Displayreviews;