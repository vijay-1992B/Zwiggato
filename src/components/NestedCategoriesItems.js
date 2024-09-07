import React from "react";

const NestedCategoriesItems = ({ data }) => {
  const items = data;
  console.log(items);

  return (
    <div className="bg-purple-500">
      {data.map((item) => (
        <div>
          <h1>{item.card.info.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default NestedCategoriesItems;
