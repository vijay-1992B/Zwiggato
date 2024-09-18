import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResCard from "./ResCard";
import { CDN_URL } from "../utils/constants";

const TopBrands = ({ data , dataT }) => {
  console.log(data , dataT);
  const settings = {
    dots: true,
    bool: false,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container border-gray-100 border-b-2  pb-10 ">
      <h1 className="text-2xl font-extrabold pt-5 pb-8 ">
        {dataT.cards[1].card.card.header.title}
      </h1>
      <Slider {...settings}>
        {data.map((item) => (
          <>
            <Link key={item?.info?.id} to={"/restaurant/" + item?.info?.id}>
              {/* <img
                className="size-40  object-center rounded-md hover:scale-105"
                src={CDN_URL + item.info.cloudinaryImageId}
              />
              <h1>{item.info.name}</h1> */}

              <ResCard resData={item} />
            </Link>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
