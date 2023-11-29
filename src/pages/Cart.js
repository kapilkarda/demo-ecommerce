// Cart.js
import React from "react";

const Cart = ({ cart, isOpen, onClose, count }) => {
  console.log("Cart Data:", cart);
  return (
    <div
      className={`fixed bottom-0 right-0 m-4 p-4 bg-white shadow-md rounded-md ${
        isOpen ? "block" : "hidden"
      } max-h-[80vh] overflow-y-auto`}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <button
          className="text-white bg-red-500 px-4 py-2 ml-8 rounded-md"
          onClick={onClose}
        >
          X
        </button>
      </div>
      {cart?.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2 flex">
              <img src={item.image} className="w-10" />
              <div className="ml-4">
                {item.title}
                <div className="flex justify-between">
                  <div>
                    <p>{item.price}</p>
                  </div>
                  <div className="flex">
                    <button className="text-white bg-red-500 px-2  rounded-md">
                      -
                    </button>
                    <p>{count}</p>
                    <button className="text-white bg-red-500 px-1.5 rounded-md">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
