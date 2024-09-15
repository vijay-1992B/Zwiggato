import React, { useEffect } from "react";
import ResCard from "./ResCard";
import { useState } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import WhatsOnYourMind from "./WhatsOnYourMind";

import ShimmerofResCard from "./ShimmerofResCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

import Offline from "./Offline";
import TopBrands from "./TopBrands";
import ItemNotFound from "./ItemNotFound";

const RestaurantList = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);
  const [topBrands, setTopBrands] = useState([]);

  const [womData, setWomData] = useState([]);

  const [isFirstBtnActive, setIsFirstBtnActive] = useState(false);
  const [isSecondBtnActive, setIsSecondBtnActive] = useState(false);
  const [isThirdBtnActive, setIsThirdBtnActive] = useState(false);

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

    setWomData(
      data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );

    setTopBrands(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
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
 
  return listofRestaurants.length == 0 ? (
    <ShimmerofResCard />
  ) : (
    <div className="pl-[200px] pr-[100px]">
      <WhatsOnYourMind data={womData} />
      <TopBrands data={topBrands} />
      <div className=" min-h-[90vh] ">
        <h3 className=" text-2xl mt-10  font-extrabold  ">
          {allData?.cards[2]?.card?.card?.title}
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
            className={` ${
              isFirstBtnActive ? "bg-[#b6b6b6]" : "bg-white"
            } p-2 font-bold text-[14px] text-[#02060c] opacity-[70%] w-[80px] h-[40px] items-center border border-black rounded-[20px]`}
            onClick={() => {
              setFilteredRestaurants(listofRestaurants);
              setIsFirstBtnActive(!isFirstBtnActive);
            }}
          >
            All
          </button>

          <button
            className={` ${
              isSecondBtnActive ? "bg-[#b6b6b6] " : "bg-white"
            } p-2  font-bold text-[14px] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]`}
            onClick={() => {
              const aboveFourPointFiveList = listofRestaurants.filter(
                (restaurants) => restaurants.info.avgRating >= 4.5
              );
              setIsSecondBtnActive(!isSecondBtnActive);
              setIsThirdBtnActive(false);

              setFilteredRestaurants(aboveFourPointFiveList);
              console.log(aboveFourPointFiveList);
            }}
          >
            Rating 4.5+
          </button>

          <button
            className={` p-2 ${
              isThirdBtnActive ? "bg-[#b6b6b6]" : "bg-white"
            } font-bold text-[14px] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]`}
            onClick={() => {
              const aboveFourList = listofRestaurants.filter(
                (restaurants) => restaurants.info.avgRating > 4.0
              );
              setIsThirdBtnActive(!isThirdBtnActive);
              setIsSecondBtnActive(false);

              setFilteredRestaurants(aboveFourList);
              console.log(aboveFourList);
            }}
          >
            Rating 4.0+
          </button>
        </div>

        <div className="flex flex-wrap gap-16 ">
          {filteredRestaurants.length === 0 ? (
            <ItemNotFound />
          ) : (
            filteredRestaurants.map((restaurants, index) => {
              return (
                <Link
                  key={restaurants?.info?.id}
                  to={"/restaurant/" + restaurants?.info?.id}
                >
                  <ResCard resData={restaurants} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
