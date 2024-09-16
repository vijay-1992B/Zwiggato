import React, { useState } from 'react';

// Modal Component to show order confirmation
const OrderModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Order Placed!</h2>
        <p>Your order has been placed successfully.</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const OrderButton = ({data}) => {
  // State to track if the order is placed
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Function to handle button click
 
  // Function to handle closing the modal
  const closeModal = () => {
    setOrderPlaced(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={placeOrder}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Place Order
      </button>
      
      {orderPlaced && <OrderModal onClose={closeModal} />}
    </div>
  );
};

export default OrderButton;
