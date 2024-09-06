import React, { useEffect } from "react";
import ResCard from "./ResCard";
import { useState } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";

import ShimmerofResCard from "./ShimmerofResCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

import Offline from "./Offline";

const RestaurantList = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);

  const fetchData = async () => {
    const raw = await fetch(RESTAURANT_LIST_API);
    const data = await raw.json();

    setListofRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setAllData(data?.data);
  };

  useEffect(() => {
    console.log("Body rendered");
    fetchData();
  }, []);

  useEffect(() => {
    const filteredList = listofRestaurants.filter(
      (res) =>
        res.info.name
          .trim()
          .toLowerCase()
          .includes(searchText.trim().toLowerCase()) ||
        res.info.cuisines
          .join("")
          .trim()
          .toLowerCase()
          .includes(searchText.trim().toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  }, [searchText]);

  const status = useOnlineStatus();

  if (status === false) return <Offline />;

  return listofRestaurants.length === 0 ? (
    <ShimmerofResCard />
  ) : (
    <div className="pl-[200px] pr-[100px] py-10 ">
      <h3 className=" text-2xl  font-extrabold  ">
        {console.log(allData)}
        {allData?.cards[1]?.card?.card?.header?.title}
      </h3>

      <div className="filterIcons flex gap-3 mt-5 mb-10 items-center ">
        <div className="searchBar">
          <input
            placeholder="Restaurants/ Cuisines"
            className="p-5 mr-2 font-bold text-[14px] text-[#02060c] opacity-[70%] w-auto h-[40px] items-center border border-black rounded-[20px]"
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
          return (
            <Link
              key={restaurants?.info?.id}
              to={"/restaurant/" + restaurants?.info?.id}
            >
              <ResCard resData={restaurants} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
