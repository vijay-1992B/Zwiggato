import React from "react";
import { CDN_URL } from "../utils/constants";

const ResCard = (prop) => {
  console.log(prop);

  return (
    <div>
      <img className="w-32" src={CDN_URL + prop.data.cloudinaryImageId}></img>
      <h4>{prop.data.name}</h4>
      <h5>{prop.data.avgRating}</h5>
      <h5>{prop.data.deliveryTime}mins</h5>

      <p>{prop.data.areaName}</p>
    </div>
  );
};

export default ResCard;
