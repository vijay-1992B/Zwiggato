import React from "react";
import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,

    areaName,
    cuisines,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = resData.info;

  return (
    <div className="w-[320px] hover:scale-95 duration-300 ease-in-out ">
      {/* <img
        className="w-[100%] h-[210px] rounded-[30px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        
      ></img> */}

      <div className="relative w-[320px] h-[210px]">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Example"
          className="w-full h-full rounded-2xl object-cover"
        />
        <div className="absolute inset-1 flex items-end justify-right ">
          <h4 className="text-white text-[13px] font-bold bg-[#256FEF] rounded-md py-[3px] px-[5px]">
            {aggregatedDiscountInfoV3?.header
              ? aggregatedDiscountInfoV3?.header
              : null}{" "}
            {aggregatedDiscountInfoV3?.subHeader
              ? aggregatedDiscountInfoV3?.subHeader
              : aggregatedDiscountInfoV3?.discountTag}
          </h4>
        </div>
      </div>

      <div className="pl-1 py-2">
        <div className="topA flex justify-between text-center">
          <h4 className="font-bold text-[18px] text-start">{name}</h4>
          <h4 className="font-semibold text-[18px]">
            {avgRatingString}
            <i className="ri-star-fill text-[#14883f] text-[15px] pl-2 align-top"></i>
          </h4>
        </div>

        <div className="topB flex justify-between">
          <p className="text-[14px] text-[#02060c] opacity-[60%]">
            {cuisines.slice(0, 2).join(" , ")}
          </p>
          <p className="text-[14px] text-[#02060c] opacity-[60%]">
            {costForTwo}
          </p>
        </div>

        <p className="text-[14px] text-[#02060c] opacity-[60%] py-[6px]">
          {areaName.split(" ").slice(0, 2).join(" ")}
        </p>

        <div className="topC flex justify-between">
          <h4 className="font-[400px] text-[14px]">{sla?.slaString}</h4>
          <h4 className="font-[400px] text-[14px]">
            {sla?.lastMileTravel} km{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
