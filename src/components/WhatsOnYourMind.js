import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CDN_URL } from "../utils/constants";




function WhatsOnYourMind({ data }) {
  console.log(data)
 
  const settings = {
    dots: false,
    bool: true,

    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
 
  };
  return (
    <div className="slider-container border-gray-100 border-b-2  pb-10 cursor-pointer">
      <h1 className="text-2xl font-extrabold pt-5 pb-3 ">
        Inspiration for your first order
      </h1>
      <Slider  {...settings}>
        {data.map((item) => (
          <> 
            <div key={item.id}>
            <img 
              className="size-36 h-48 hover:scale-105"
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
