import { useDispatch, useSelector } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL, NO_IMAGE_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/slices/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    
    dispatch(removeItem({ id: item?.card?.info?.id }));
  };

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="min-h-[60vh]  flex justify-center items-center mt-24 ">
      <div className="container flex justify-center items-center gap-8 ">
        <div className="left w-5/12 max-h-[70vh] overflow-auto scroll min-h-[50vh] ">
          <div className="flex justify-between">
            <h1 className="  text-2xl font-semibold ">Cart</h1>
            <btn
              className="border bg-red-700 text-white px-4 py-1 rounded-lg text-sm border-red-700 mr-6 cursor-pointer"
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
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="border hover:bg-red-700 hover:text-white px-4 py-2 rounded-lg text-sm border-orange-600 text-orange-600"
                  >
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
