import React from "react";

import RestaurantList from "./RestaurantList";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Body = () => {
  return (
    <>
    
      <RestaurantList />
      <ToastContainer />
    </>
  );
};

export default Body;
