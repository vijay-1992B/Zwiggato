import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ShimmerofResCard from "./ShimmerofResCard";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import Offline from "./Offline";

import RestaurantCategory from "./RestaurantCategory";
import RestaurantNestedCategory from "./RestaurantNestedCategory";

const ResMenu = () => {
  const status = useOnlineStatus();
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // State for categories
  const [categories, setCategories] = useState([]);

  // State for nested categories
  const [nestedCategories, setNestedCategories] = useState([]);

  // State to manage filter (Veg, Non-Veg, or All)
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Set categories after filtering the correct ones from resInfo
    if (resInfo) {
      const filteredCategories =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setCategories(filteredCategories);

      // Set nested categories from resInfo
      const filteredNestedCategories =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      setNestedCategories(filteredNestedCategories);
    }
  }, [resInfo]); // Runs when resInfo changes

  if (resInfo === null) return <ShimmerofResCard />;

  if (resInfo.statusCode === 1 || !resInfo?.data?.cards) return <Error />;

  const {
    avgRatingString,
    name,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  // Handle Veg Filter
  const handleVegFilter = () => {
    setFilter("Veg");
  };

  const handleNonVegFilter = () => {
    setFilter("Non-Veg");
  };

  const handleAllFilter = () => {
    setFilter("All");
  };

  const handleBestSellerFilter = () => setFilter("BestSeller");

  // Filtered Categories based on the selected filter
  const filteredCategories = categories.map((category) => {
    return {
      ...category,
      card: {
        ...category.card,
        card: {
          ...category.card.card,
          itemCards: category.card.card.itemCards.filter((item) => {
            if (filter === "Veg") return item?.card?.info?.isVeg === 1;
            if (filter === "Non-Veg") return item?.card?.info?.isVeg === 0;
            if (filter === "BestSeller") return item?.card?.info?.isBestseller;
            return true; // Show all items if no filter is applied
          }),
        },
      },
    };
  });

  // Filtered Nested Categories based on the selected filter
  const filteredNestedCategories = nestedCategories.map((category) => {
    return {
      ...category,
      card: {
        ...category.card,
        card: {
          ...category.card.card,
          categories: category.card.card.categories.map((subCategory) => {
            return {
              ...subCategory,
              itemCards: subCategory.itemCards.filter((item) => {
                if (filter === "Veg") return item?.card?.info?.isVeg === 1;
                if (filter === "Non-Veg") return item?.card?.info?.isVeg === 0;
                if (filter === "BestSeller")
                  return item?.card?.info?.isBestseller;
                return true; // Show all items if no filter is applied
              }),
            };
          }),
        },
      },
    };
  });

  if (status === false) return <Offline />;

  return (
    <div className="flex flex-col items-center m-auto">
      <div className="infoCard flex justify-center mt-8 md:mt-16 ">
        <div className=" w-screen p-2 sm:p-4 lg:p-0 md:w-[800px] ">
          <div className="">
            <h1 className="text-lg sm:text-2xl pl-3 font-bold bg-white items-start">
              {name}
            </h1>
          </div>
          <div className="md:mt-5 border border-white p-4 rounded-2xl shadow-2xl shadow-[#E7E7EE] ">
            <div className="my-2 font-semibold ">
              <span>
                <i className="ri-star-fill text-[#14883f] text-[15px]  align-top"></i>{" "}
                {avgRatingString}
              </span>
              <span className=" ml-2 mr-3">
                {"(" + totalRatingsString + ") "}{" "}
              </span>
              <span> {costForTwoMessage}</span>
            </div>
            <h3 className=" text-sm my-3 md:my-2 text-[#FF5200] font-semibold underline">
              {cuisines.join(", ")}
            </h3>
            <h3 className=" my-4 md:my-2 font-medium">
              <i className="ri-store-2-line"></i> {"Outlet - "}
              {areaName}
            </h3>
            <div className="my-2 pb-3 border-b font-medium">
              {sla?.slaString ? <i className="ri-time-line mr-1"></i> : null}
              {sla?.slaString ? sla?.slaString.toLowerCase() : null}
            </div>

            <h3 className="text-[#282c3f] opacity-70">
              {feeDetails?.message ? (
                <i className="ri-riding-line mr-2 "></i>
              ) : null}
              {feeDetails?.message
                ? feeDetails?.message.replace("<b>", "").replace("</b>", " ")
                : null}{" "}
            </h3>
          </div>
        </div>
      </div>
      <h1 className=" text-base mt-4 sm:mt-10 opacity-60 font-medium">
        <i className="ri-git-commit-line"></i>MENU
        <i className="ri-git-commit-line"></i>
      </h1>
      <div className="filters  w-screen px-4 lg:p-0 md:w-[800px] mt-12 flex gap-3">
        <button
          onClick={handleAllFilter}
          className={`px-3 py-2 border-2 rounded-lg ${filter === "All" ? "bg-[#b6b6b6] text-white" : ""}`}
        >
          All
        </button>
        <button
          onClick={handleVegFilter}
          className={`px-3 py-2 border-2 rounded-lg ${filter === "Veg" ? "bg-[#1BA672] text-white" : ""}`}
        >
          Veg
        </button>
        <button
          onClick={handleNonVegFilter}
          className={`px-3 py-2 border-2 rounded-lg ${filter === "Non-Veg" ? "bg-[#E43B4F] text-white" : ""}`}
        >
          Non-Veg
        </button>
        <button
          onClick={handleBestSellerFilter}
          className={`px-3 py-2 border-2 rounded-lg ${filter === "BestSeller" ? "bg-[#FF6E5A] text-white" : ""}`}
        >
          BestSeller
        </button>
      </div>
      <div className="accordian w-screen px-4 lg:p-0 md:w-[800px] mt-8">
        {filteredCategories.map((c) => (
          <div key={c.card.card.title}>
            <RestaurantCategory data={c} />

            {filteredNestedCategories.map((c, index) => (
              <div key={index}>
                <RestaurantNestedCategory data={c} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
