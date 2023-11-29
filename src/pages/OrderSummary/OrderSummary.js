import Navbar from "@/Components/Navbar/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = (products) => {
  const cartItems = useSelector((state) => state.items);
  const totalAmount = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <>
      <Navbar />
      <div className="bg-white p-8 rounded-md z-10 max-h-screen overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4">Order Summary</h1>
        {cartItems.map((product) => (
          <div key={product.id} className="mb-4">
            <img src={product.image} className="w-14" />
            <p className="font-semibold">{product.title}</p>
            <p className="font-semibold">Quantity: {product.quantity}</p>
            <p className="font-semibold">
              Price: ${product.price * product.quantity}
            </p>
          </div>
        ))}
        <h3 className="font-bold pb-8">Your Total: ${totalAmount}</h3>
        <button className="py-2 px-2 bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-lg w-64">
          Checkout
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
