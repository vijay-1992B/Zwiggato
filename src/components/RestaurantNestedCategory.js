import NestedCategoriesItems from "./NestedCategoriesItems";

const RestaurantNestedCategory = ({ data }) => {
  const { title } = data.card.card;
  const categories = data.card.card.categories;

  return (
    <div className="">
      <div className="flex justify-between border-t-[14px] ">
        <h1 className="font-extrabold pb-4 pt-4 mx-1 ">{title} </h1>
      </div>
      <div className="items">
        {categories.map((item) => (
          <div key={item.title}>
            <div className="flex justify-between cursor-pointer border-b-2 py-3 mx-1 ">
              <span className="font-bold">
                {item.title}
                {"  "}({item.itemCards.length})
              </span>
              <span>
                <i className="ri-arrow-down-s-line text-2xl text-[&#xEA4E]"></i>
              </span>
            </div>

            <NestedCategoriesItems data={item.itemCards} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantNestedCategory;
