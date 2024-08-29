import React from "react";
import ResCard from "./ResCard";
import resList from "../utils/mockData";

const RestaurantList = () => {
  return (
    <div className="pl-[200px] pr-[200px] py-10 ">
      <h3 className=" text-2xl  font-extrabold">
        Restaurants with online food delivery
      </h3>

      <button>Filter</button>

      <div className="flex flex-wrap">
        {resList.map((Restaurants)=> {return <ResCard data = {Restaurants} />}
          )}  

        {/* <ResCard data={resList[0]} />
        <ResCard data={resList[1]} />
        <ResCard data={resList[3]} />
        <ResCard data={resList[4]} />
        <ResCard data={resList[5]} /> */}
      </div>
    </div>
  );
};

export default RestaurantList;
