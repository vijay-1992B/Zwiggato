import React, { useEffect } from "react";
import ResCard from "./ResCard";
import { useState } from "react";
import resList from "../utils/mockData";
import ShimmerofResCard from "./ShimmerofResCard";

const RestaurantList = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  const fetchData = async () => {
    const raw = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6186784&lng=77.05335339999999"
    );
    const data = await raw.json();

    setListofRestaurants(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    console.log("Body rendered");
    fetchData();
  }, []);

  return listofRestaurants.length == 0 ? (
    <ShimmerofResCard />
  ) : (
    <div className="pl-[200px] pr-[100px] py-10 ">
     

   

    

      <h3 className=" text-2xl  font-extrabold  ">
        Restaurants with online food delivery
      </h3>

      <div className="filterIcons flex gap-3 mt-5 mb-10">
        <button
          className="p-2 font-bold text-[14px] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]"
          onClick={() => {
            filteredList = listofRestaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4
            );

            setListofRestaurants(filteredList);
          }}
        >
          Rating 4.0+
        </button>

        <button
          className="p-2 font-bold text-[14px] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]"
          onClick={() => {
            alert("Working on it");
          }}
        >
          Pure Veg
        </button>
      </div>

      <div className="flex flex-wrap gap-16 ">
        {listofRestaurants.map((restaurants, index) => {
          return <ResCard key={index} resData={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
