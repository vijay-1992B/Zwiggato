import { useDispatch, useSelector } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL, NO_IMAGE_URL } from "../utils/constants";
import {
  clearCart,
  removeItem,
  addItem,
  removeEntireItem,
} from "../utils/slices/cartSlice";
import EmptyCart from "./EmptyCart";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  

  const t = cartItems.map((i) =>
    Math.round(
      ((i?.card?.info.price ? i?.card?.info?.price : i?.card?.info?.defaultPrice
        * i?.count) /
        100) *
        i.count
    )
  );

  let total = 0;
  for (let i = 0; i < t.length; i++) {
    total += t[i];
  }

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ id: item?.card?.info?.id }));
  };

  const handleRemoveEntireItem = (item) => {
    dispatch(removeEntireItem({ id: item?.card?.info?.id }));
  };

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="flex justify-center items-center mt-24 ">
      <div className="container flex justify-center items-center gap-16 ">
        <div className=" cartValue left w-5/12 max-h-[70vh] overflow-auto  h-[65vh]  ">
          <div className="flex justify-between items-center ">
            <h1 className="  text-2xl font-bold ">Cart</h1>
            <btn
              className="border bg-red-700 text-white px-5 py-2 rounded-lg text-sm border-red-700 mr-6 cursor-pointer"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </btn>
          </div>

          {cartItems.map((item) => (
            <div className="flex my-10 py-4 pr-8  ">
              <div className=" ">
                <img
                  className="bg-cover w-36 h-32 rounded-[6%] object-cover   pr-4 "
                  src={
                    item.card.info.imageId
                      ? CDN_URL + item.card.info.imageId
                      : NO_IMAGE_URL
                  }
                />
              </div>
              <div className="w-full">
                <div>
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
                <h1 className="font-bold ">{item.card.info.name}</h1>
                
                </div>
                <h1 className="py-2 font-normal">
                  {item.card.info.description.split(" ").slice(0, 8).join(" ")}
                  ...
                </h1>
                <div className="flex gap-1">
                  <span className="font-semibold ">
                    {" "}
                    ₹
                    {Math.round(
                      item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100
                    ) * item.count}
                  </span>

                  <span>
                    {" "}
                    (
                    {Math.round(
                      item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100
                    )}{" "}
                    x {item.count})
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="border px-4 py-1 rounded  "
                    >
                      -
                    </button>
                    <span className="mx-3 font-semibold">{item.count}</span>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="border px-4 py-1 rounded "
                    >
                      +
                    </button>
                  </span>
                  <button
                    onClick={() => handleRemoveEntireItem(item)}
                    className="border hover:bg-red-700 hover:text-white px-4 py-2 rounded-lg text-sm border-orange-600 text-orange-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right border-2 w-4/12 h-[65vh] flex flex-col justify-between p-9 shadow-lg">
          <h1 className="text-2xl font-semibold ">Order Summary</h1>
          <div className="flex justify-between border-t-2 py-4">
            <span>Price({cartItems.length} items)</span>
            <span className="font-bold text-lg">₹{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount(10%)</span>
            <span className="font-semibold text-lg">
              ₹{Math.round(total * 0.1)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="font-semibold text-lg">
              ₹49
            </span>
          </div>
          <div>
            You will save{" "}
            <span className="font-semibold">₹{Math.round(total * 0.1)}</span> on
            this Order 🎉{" "}
          </div>
          <div className="flex justify-between border-y-2 py-4">
            <span className="text-2xl font-semibold">Total Amount</span>
            <span className="font-bold text-lg">
              ₹{Math.round(total - (total * 0.10) + 49 )}
            </span>
          </div>
          <button  className="px-6 py-3 bg-orange-600 text-white rounded-md font-bold text-xl">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
