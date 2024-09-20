import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <img src="https://img.freepik.com/free-vector/male-chef-mixing-flour-eggs-dough-with-whisk-hands-happy-man-apron-preparing-homemade-sweet-dessert-table-home-kitchen-flat-vector-illustration-pastry-cooking-recipe-concept_74855-21965.jpg" />
      <h1 className="text-[#53567E] text-lg font-semibold">Your cart is empty</h1>
      <p className="text-sm mt-1 font-normal">You can go to home page to view more restaurants</p>
      <Link to={"/"}><button className="mt-6 text-base border px-6 py-2 bg-[#FF5200] text-white font-bold">See Restaurants Near You</button></Link>
    </div>
  );
};




export default EmptyCart;
