import { useSelector } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";





const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  
  
 
  return <div>

    <h1>Cart</h1>
   {cartItems.map((item)=> <div>

     <h1>{item.card.info.name}</h1>
   </div>)}
  
  </div>;
};

export default Cart;
