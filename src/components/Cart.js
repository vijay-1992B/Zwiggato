import { useSelector } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="min-h-[60vh]  flex justify-center items-center ">
      <div className="container flex justify-center items-center gap-8 ">
        <div className="left w-5/12 max-h-[70vh] overflow-auto scroll ">
          <h1 className="text-2xl font-semibold ">Cart</h1>

          {cartItems.map((item) => (
            <div className="flex my-10 py-4 pr-8  ">
              <div className=" ">
                <img
                  className="bg-cover w-36 h-32 rounded-[6%] object-cover   pr-4 "
                  src={CDN_URL + item.card.info.imageId}
                />
              </div>
              <div className="w-full">
                <h1 className="font-bold ">{item.card.info.name}</h1>
                <h1 className="py-2 font-normal">
                  {item.card.info.description.split(" ").slice(0, 8).join(" ")}
                  ...
                </h1>
                <h1 className="font-semibold ">
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </h1>
                <div className="flex justify-between items-center pt-2">
                  <span>Counter</span>
                  <button className="border px-4 py-2 rounded-lg text-sm border-orange-600 text-orange-600">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right border-2 w-4/12 h-[50vh] flex flex-col p-9 shadow-lg">
          <h1 className="text-2xl font-semibold ">Order Summary</h1>
          <div>Price</div>
          <div>Discount</div>
          <div>Delivery Charges</div>
          <div>You will save </div>
          <div>Total Amount</div>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
