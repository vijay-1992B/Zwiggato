import React from "react";
import { Link } from "react-router-dom";

const LocationUnservicable = () => {
  return (
    <div className=" sm:px-8 m-auto xl:w-[90vw] 2xl:w-[80vw] p-4 overflow-hidden">
      <div className="flex flex-col justify-between items-center my-14 sm:mt-10 ">
      <img className="size-60" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png" />
      <h1 className="  sm:text-lg mt-4 mb-1 font-extrabold">Location Unserviceable</h1>
      <p className="w-[360px] text-sm sm:text-md  text-center">We don’t have any services here till now. Try changing location.</p>
      <Link to={"/"}><button className="self-center w-[150px] my-5 px-4 py-2 rounded-md text-white bg-[#CB202D] text-center">Back to home</button></Link>
      </div>
    </div>
  );
};

export default LocationUnservicable;
