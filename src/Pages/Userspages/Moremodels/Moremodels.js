import React from 'react';
import useCarmodel from '../../Commonpages/Hooks/Hook';
import Model from './Model';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Modeltwo from './Modeltwo';
const Moremodels = () => {
    const {maincars} = useCarmodel();

    let cararry = []
    let cararry2 = []
    if(maincars)
    {
        const arrayvalue = Math.ceil(maincars.length / 2)
        const dividearry = maincars.slice(0, arrayvalue)
        const dividearry2 = maincars.slice(arrayvalue, maincars.length)
        cararry = [...dividearry]
        cararry2 = [...dividearry2]
    }
    var settings = {
      arrows:true,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        <div className="container slidecontainer mt-4">
            <h1 className="text-center fw-bold fs-1 collectiontitle">Our Collection</h1>
          { maincars.length === 0 ? <div className="lds-facebook"><div></div><div></div><div></div></div> : 
          <> <Slider className="my-2  p-3 slideone" {...settings}>
          {
              cararry.map(car => <Model key={car._id} car={car} ></Model>)
          }
      </Slider>
      <Slider className=" p-3" {...settings}>
          {
              cararry2.map(car => <Modeltwo key={car._id} car={car} ></Modeltwo>)
          }
      </Slider>
      </> }
        </div>
    );
};

export default Moremodels;
 