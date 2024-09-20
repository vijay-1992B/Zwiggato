import NestedCategoriesItems from "./NestedCategoriesItems";
import { useState } from "react";
const RestaurantNestedCategory = ({ data }) => {
  const { title } = data.card.card;
  const categories = data.card.card.categories;

  
  

  return (
    <div className="">
      <div className="flex justify-between border-t-[14px] ">
        <h1  className="font-bold sm:font-extrabold pb-4 pt-4 sm:mx-2 ">{title} </h1>
      </div>
      <div className="items">
        {categories.map((item) => (
          <div key={item.title}>
            

            <NestedCategoriesItems item={item}  data={item.itemCards} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantNestedCategory;
