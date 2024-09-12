import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CDN_URL } from "../utils/constants";

function WhatsOnYourMind({ data }) {
  console.log(data);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container border-b-2  pb-10 ">
      <h1 className="text-2xl font-extrabold py-5 ">Inspiration for your first order</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <>
            <img
              className="size-40"
              src={CDN_URL + item.imageId}
              alt={item.description}
            />
            {/* <h3>{item.description}</h3> */}
          </>
        ))}
        {/* <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div> */}
      </Slider>
    </div>
  );
}

export default WhatsOnYourMind;
