import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CDN_URL } from "../utils/constants";

function WhatsOnYourMind({ data }) {
  console.log(data);

  const settings = {
    dots: false,
    bool: true,

    infinite: true,
    speed: 500,
    slidesToShow: 8,

    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,

          
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,

          
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
         

          initialSlide: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container border-gray-100 border-b-2 pb-3 lg:pb-10 lg:mt-10 cursor-pointer">
      <h1 className=" text-lg sm:text-2xl font-extrabold    ">
        Inspiration for your first order
      </h1>
      <Slider {...settings}>
        {data.map((item) => (
          <>
            <div key={item.id}>
              <img
                className=" size-24 h-36 lg:size-40  hover:scale-105"
                src={CDN_URL + item.imageId}
                alt={item.description}
              />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default WhatsOnYourMind;
