import React, { useEffect } from "react";
import ResCard from "./ResCard";
import { useState } from "react";
import resList from "../utils/mockData";
import ShimmerofResCard from "./ShimmerofResCard";

const RestaurantList = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const raw = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6186784&lng=77.05335339999999"
    );
    const data = await raw.json();

    setListofRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    console.log("Body rendered");
    fetchData();
  }, []);

  useEffect(() => {
    const filteredList = listofRestaurants.filter((res) =>
      res.info.cuisines
        .join("")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  }, [searchText]);

  return listofRestaurants.length == 0 ? (
    <ShimmerofResCard />
  ) : (
    <div className="pl-[200px] pr-[100px] py-10 ">
      <h3 className=" text-2xl  font-extrabold  ">
        Restaurants with online food delivery
      </h3>

      <div className="filterIcons flex gap-3 mt-5 mb-10 items-center ">
        <div className="searchBar">
          <input
            placeholder="Search Cuisines"
            className="p-5 mr-2 font-bold text-[14px] text-[#02060c] opacity-[70%] w-[180px] h-[40px] items-center border border-black rounded-[20px]"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
        </div>

        <button
          className="p-2 font-bold text-[14px] text-[#02060c] opacity-[70%] w-[80px] h-[40px] items-center border border-black rounded-[20px]"
          onClick={() => {
            setFilteredRestaurants(listofRestaurants);
          }}
        >
          All
        </button>

        <button
          className=" p-2  font-bold text-[14px] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]"
          onClick={() => {
            filteredList = listofRestaurants.filter(
              (restaurants) => restaurants.info.avgRating >= 4.5
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Rating 4.5+
        </button>

        <button
          className="p-2  font-bold text-[14px] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]"
          onClick={() => {
            filteredList = listofRestaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4.0
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Rating 4.0+
        </button>
      </div>

      <div className="flex flex-wrap gap-16 ">
        {filteredRestaurants.map((restaurants, index) => {
          return <ResCard key={index} resData={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
