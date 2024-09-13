import React from "react";
import { CDN_URL, NO_IMAGE_URL } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/slices/cartSlice";
import { Slide, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const NestedCategoriesItems = ({ data, item }) => {
  const [showNestedItems, setNestedShowItems] = useState(false);

  

  const notify = () =>
    toast.success("Item added to cart !", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });

    const dispatch = useDispatch();

  return (
    <div>
      <div
        onClick={() => {
          setNestedShowItems(!showNestedItems);
        }}
        className={`flex justify-between cursor-pointer  py-3 mx-1 ${
          !showNestedItems ? "border-b-2" : null
        } `}
      >
        <span className="font-bold ">
          {item.title}
          {"  "}({item.itemCards.length})
        </span>
        <span>
          <i className="ri-arrow-down-s-line text-2xl text-[&#xEA4E]"></i>
        </span>
      </div>
      {showNestedItems &&
        data.map((item) => (
          <div
            key={item.card.info.name}
            className="flex  justify-between py-8 pb-12  border-b-2 mx-1"
          >
            <div className="w-8/12">
              <div className="flex gap-2 items-end">
                <h1>
                  {item.card.info.itemAttribute.vegClassifier == "VEG" ? (
                    <img
                      className="size-5"
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
                    />
                  ) : (
                    <img
                      className="size-5"
                      src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
                    />
                  )}
                </h1>
                <p className="text-[#FF6E5A] text-sm font-semibold">
                  {item.card.info?.isBestseller ? "Bestseller" : null}
                </p>
              </div>
              <h1 className="font-bold text-md  ">{item.card.info.name}</h1>
              <div className="flex items-center">
                <h3 className="line-through font-semibold opacity-50">
                  {item.card.info.finalPrice
                    ? "₹" + item.card.info.finalPrice / 100
                    : null}
                </h3>
                <h3 className="font-semibold  ">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </h3>

                <span className="ml-2 mr-1  text-[11px] font-bold text-[#1BA672]">
                  {item.card.info.offerTags
                    ? item.card.info.offerTags[0].title
                    : null}
                </span>
                <span className="text-[11px] font-bold text-[#1BA672]">
                  {item.card.info.offerTags
                    ? item.card.info.offerTags[0].subTitle
                    : null}
                </span>
              </div>

              <div className="py-2 font-bold">
                <span className="text-[#1BA672] text-sm ">
                  {item.card.info.ratings.aggregatedRating.rating ? (
                    <i className="ri-star-s-fill "></i>
                  ) : null}
                  {item.card.info.ratings.aggregatedRating.rating
                    ? item.card.info.ratings.aggregatedRating.rating
                    : null}
                </span>

                <span className="mx-1 text-sm w-1/2">
                  {item.card.info.ratings.aggregatedRating.ratingCountV2
                    ? "(" +
                      item.card.info.ratings.aggregatedRating.ratingCountV2 +
                      ")"
                    : null}
                </span>
              </div>

              <p className="text-sm font-medium">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/12 flex flex-col justify-center items-center ">
              <img
                className="w-44 h-32 rounded-lg bg-cover  "
                src={
                  item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : NO_IMAGE_URL
                }
              />
              <div className="w-full" onClick={notify}>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="border border-gray items-center my-1 w-full rounded-lg px-2 py-1 text-lg font-extrabold text-green-600 hover:bg-gray-200"
                >
                  ADD
                </button>
              </div>
            </div>
          
          </div>
        ))}
      
    </div>
    
  );
  <ToastContainer />
};

export default NestedCategoriesItems;
