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

  const [lat, setLat] = useState(28.7041);
  const [lng, setLng] = useState(77.1025);

  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLng(coords.longitude);
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };

  const fetchData = async () => {
    const raw = await fetch(RESTAURANT_LIST_API + `lat=${lat}&lng=${lng}`);

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
  }, [lat, lng]);

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
    <div className="pl-[200px] pr-[100px]">
      <div className="location flex gap-2 my-5 items-center justify-start">
        <button
          className="px-4 py-2 border-2 rounded-md hover:bg-gray-400 hover:text-white "
          onClick={() => getUserCoordinates()}
        >
          <i class="ri-map-pin-line mr-1"></i> Your Location
        </button>
        <button
          className="px-4 py-2 border-2 rounded-md hover:bg-gray-400 hover:text-white"
          onClick={() => setLat(12.9715987) || setLng(77.5945627)}
        >
          Bangalore
        </button>
        <button
          className="px-4 py-2 border-2 rounded-md hover:bg-gray-400 hover:text-white"
          onClick={() => setLat(22.7196) || setLng(75.8577)}
        >
          Indore
        </button>

        <button
          className="px-4 py-2 border-2 rounded-md hover:bg-gray-400 hover:text-white"
          onClick={() => setLat(19.076) || setLng(72.8777)}
        >
          Mumbai
        </button>
      </div>

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
            } p-2 hover:bg-[#b6b6b6] font-bold text-[14px] text-[#02060c] opacity-[70%] w-[80px] h-[40px] items-center border border-black rounded-[20px]`}
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
            } p-2 hover:bg-[#b6b6b6]  font-bold text-[14px] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]`}
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
            } font-bold text-[14px] hover:bg-[#b6b6b6] text-[#02060c] opacity-[70%] w-[130px] h-[40px] items-center border border-black rounded-[20px]`}
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
