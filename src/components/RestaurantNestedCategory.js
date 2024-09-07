import NestedCategoriesItems from "./NestedCategoriesItems";

const RestaurantNestedCategory = ({ data }) => {
  const { title } = data.card.card;
  const categories = data.card.card.categories;

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="font-extrabold">{title} </h1>
      </div>
      <div className="items">
        {categories.map((item) => (
          <div>
            <div className="flex justify-between">
            <span className="font-semibold">
              {item.title}({item.itemCards.length})
            </span>
            <span>
              <i class="ri-arrow-down-s-line text-2xl text-[&#xEA4E]"></i>
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
