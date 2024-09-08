import { useState } from "react";
import { CDN_URL, NO_IMAGE_URL } from "../utils/constants";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const { title } = data?.card?.card;

  const itemCards = data?.card?.card?.itemCards;

  return (
    
     
    <div className="text-base items-center border-t-[14px]">
      <div
        onClick={() => {
          setShowItems(!showItems);
        }}
        className="flex justify-between items-center"
      >
        <h1 className="font-extrabold py-5 px-2">
          {title} ({itemCards.length})
        </h1>
        <span>
          <i className="ri-arrow-down-s-line text-2xl text-[&#xEA4E]"></i>
        </span>
      </div>
      <div className="items ">
        {showItems &&
          itemCards.map((item) => (
            <div className="flex  justify-between py-10 px-2  border-b-2">
              <div className="w-8/12">
                <h1 className="font-bold text-md  ">{item.card.info.name}</h1>
                <div className="flex ">
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
              <div className="w-2/12 ">
                <img
                  className="w-44 h-32 rounded-xl bg-cover  "
                  src={
                    item.card.info.imageId
                      ? CDN_URL + item.card.info.imageId
                      : NO_IMAGE_URL
                  }
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
