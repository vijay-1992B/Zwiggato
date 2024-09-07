import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({ data }) => {
  const { title } = data?.card?.card;

  const itemCards = data?.card?.card?.itemCards;

  return (
    <div className="mt-10 pl-1">
      
      <div className="flex justify-between">
        <h1 className="font-extrabold">
          {title} ({itemCards.length})
        </h1>
        <span>
          <i class="ri-arrow-down-s-line text-2xl text-[&#xEA4E]"></i>
        </span>
      </div>
      <div className="items">
        {itemCards.map((item) => (
          <div className="flex  justify-between py-3">
            <div className="w-8/12">
              <h1 className="font-bold text-md  ">{item.card.info.name}</h1>

              <h3 className="font-semibold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h3>

              <div>
                <span className="text-[#1BA672] text-sm ">
                  {item.card.info.ratings.aggregatedRating.rating ? <i class="ri-star-s-fill "></i> : null}
                  {item.card.info.ratings.aggregatedRating.rating ?  item.card.info.ratings.aggregatedRating.rating : null }
                </span>

                <span className="mx-1 text-sm w-1/2">
                  {item.card.info.ratings.aggregatedRating.ratingCountV2 
                    ? "(" + item.card.info.ratings.aggregatedRating.ratingCountV2 + ")"
                    : null}
                </span>
              </div>

              <p>{item.card.info.description}</p>
            </div>
            <div className="w-2/12 ">
              <img
                className="w-44 h-32 rounded-xl bg-cover  "
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
