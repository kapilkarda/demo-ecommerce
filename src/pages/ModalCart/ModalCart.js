import Link from "next/link";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCartItem, updateQty } from "../Redux/Action/CartAction";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ModalCart = ({ closeModal, products, quantity }) => {
  const cartItems = useSelector((state) => state?.cart_data?.items);
  const dispatch = useDispatch();
  const [editQuantity, setEditQuantity] = useState({});
  const [isEdit, setIsEdit] = useState({});

  const removeProduct = (productId) => {
    dispatch(removeFromCartItem(productId));
  };

  const handleEditClick = (productId) => {
    setIsEdit({ ...isEdit, [productId]: !isEdit[productId] || 0 });
  };
  const handleCheckClick = (productId) => {
    const quantity = editQuantity[productId] || 0;
    dispatch(updateQty(productId, quantity));
    setIsEdit({ ...isEdit, [productId]: false });
  };

  return (
    <div className="bg-white p-8 rounded-md z-10  max-h-screen overflow-y-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
        <div>
          <button
            className="text-white bg-red-500 px-4 py-2 ml-8 rounded-md"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      </div>
      <div className="">
        {cartItems.length ? (
          <>
            {cartItems &&
              cartItems.map((products) => (
                <>
                  <div className="flex mb-8">
                    <img
                      src={products.image}
                      className="w-20 h-24 object-center rounded border border-gray-200 mb-4"
                    />
                    <div className="ml-4 w-full">
                      <h3 className="text-2xl font-bold mb-2">
                        {products.title}
                      </h3>
                      <div className="flex justify-between">
                        <p className="text-xl font-bold mb-4">
                          ${products.price}
                        </p>
                        <MdDelete
                          className="mt-1"
                          onClick={() => removeProduct(products.id)}
                        />
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <label className="font-semibold mb-2">
                            Quantity:{" "}
                            {isEdit[products.id] ? (
                              <input
                                type="number"
                                value={
                                  editQuantity[products.id] || products.quantity
                                }
                                onChange={(e) =>
                                  setEditQuantity({
                                    ...editQuantity,
                                    [products.id]: e.target.value,
                                  })
                                }
                                className="border border-gray-300 w-16 p-1 text-center"
                              />
                            ) : (
                              <span className="font-bold">
                                {" "}
                                {products.quantity}
                              </span>
                            )}
                          </label>

                          <br></br>
                          <label className=" font-semibold mb-4">
                            {" "}
                            Price:{" "}
                            <span className="font-bold">
                              ${products.price * products.quantity}
                            </span>
                          </label>
                        </div>

                        {isEdit[products.id] ? (
                          <FaCheck
                            className="text-green-500 cursor-pointer mt-2"
                            onClick={() => handleCheckClick(products.id)}
                          />
                        ) : (
                          <FaEdit
                            className="text-gray-500 cursor-pointer"
                            onClick={() => handleEditClick(products.id)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            <div className="">
              <Link href="/OrderSummary/OrderSummary">
                <button
                  type="button"
                  className="text-white bg-red-500 font-medium rounded-lg text-sm py-2.5 mt-auto  block w-40 mx-auto "
                >
                  Confirm Order
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default ModalCart;
