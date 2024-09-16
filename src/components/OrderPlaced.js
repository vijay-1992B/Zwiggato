import React from "react";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  
    

  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <img className="size-20 pb-2" src="https://clipart-library.com/images/Lcd5doyqi.png" />
      <h1 className="text-xl font-semibold">Order Placed!</h1>
      <h1 className="capitalize py-3">Thank you for your order</h1>
      <p className="font-semibold">Order Id - {Math.floor(100000 + Math.random() * 900000)}</p>
      <Link to={"/"}><button className="mt-6 text-base border px-6 py-2 bg-[#FF5200] text-white font-bold">Go to home</button></Link>
    </div>
  );
};

export default OrderPlaced;
