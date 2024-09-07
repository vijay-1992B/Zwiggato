const RestaurantCategory = ({ data }) => {
  const { title } = data?.card?.card;

  const itemCards = data?.card?.card?.itemCards;

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="font-extrabold">{title}</h1>
        <span>🔽</span>
      </div>
      <div className="items">
        {itemCards.map((item) => (
          <div>
            <span>{item.card.info.name}</span>

            <span>{item.card.info.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
