import NestedCategoriesItems from "./NestedCategoriesItems";

const RestaurantNestedCategory = ({ data }) => {
  const { title } = data.card.card;
  const categories = data.card.card.categories;

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="font-extrabold">{title}</h1>
        <span>🔽</span>
      </div>
      <div className="items">
        {categories.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <NestedCategoriesItems data={item.itemCards} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantNestedCategory;
