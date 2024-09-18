import { useSelector } from "react-redux";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
// import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = (props) => {
  console.log(props);
  
  const cartItems = useSelector((store) => store.cart.items);
  


  // const status = useOnlineStatus()

 
  return (
    <div className="flex justify-around items-center py-4  mb-5  bg-white shadow-md sticky top-0 z-50 ">
    
      <div className="left-header flex gap-6 items-center">
        <Link to={"/"}>
          <img src={logo} className="w-44 mix-blend-multiply"></img>
        </Link>
       
       
      </div>

      <div className="right-header flex gap-8 text-lg">
        <Link to={"/search"}>
          <i className="ri-search-line"></i> Search
        </Link>

        <Link to={"/offers"}>
          <i className="ri-discount-percent-line"></i> Offers
        </Link>

        <Link to={"/help"}>
          <i className="ri-hand-heart-line"></i> Help
        </Link>

        <Link to={"/signIn"}>
          <i className="ri-user-3-line"></i> Sign In
        </Link>

        <Link to={"/cart"}>
        <i className="ri-shopping-cart-2-line mx-1"></i> Cart <sup className="text-white  text-sm inline-block text-center  size-5 rounded-xl bg-orange-500">{cartItems.length}</sup> 
        </Link>

        {/* <Link to={"/cart"}>
          Status: {status ? "✅" : "🔴"}
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
