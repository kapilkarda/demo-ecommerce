import Navbar from "@/Components/Navbar/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutModal from "./CheckoutDetails";
import CheckoutDetails from "./CheckoutDetails";
import ModalPayment from "./CheckoutPayment";
import CheckoutPayment from "./CheckoutPayment";

const OrderSummary = (products) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen1, setIsopen1] = useState(false);
  const [isOpen2, setIsopen2] = useState(false);
  const [isOpen3, setIsopen3] = useState(false);

  const [ispayemntOpen, setIspayemntOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const cartItems = useSelector((state) => state?.cart_data?.items);
  const totalAmount = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const handleCheckout = () => {
    setIsModalOpen(true);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePaymentCheckout = () => {
    setIspayemntOpen(true);
  };

  const handlePaymentCloseModal = () => {
    setIspayemntOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="bg-white p-8 rounded-md z-10 max-h-screen overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4">Order Summary</h1>
        {cartItems.map((product) => (
          <div key={product?.id} className="mb-10">
            <img src={product?.image} className="w-14" />
            <p className="font-semibold">{product?.title}</p>
            <p className="font-semibold">Quantity: {product?.quantity}</p>
            <p className="font-semibold">
              Price: ${product?.price * product?.quantity}
            </p>
          </div>
        ))}
        <h3 className="font-bold pb-8">Your Total: ${totalAmount}</h3>
        <button
          onClick={handleCheckout}
          className="py-2 px-2 bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-lg w-64"
        >
          Checkout
        </button>
        {isModalOpen && (
          <CheckoutDetails
            isOpen={isModalOpen}
            isOpen1={setIsopen1}
            closeModal={handleCloseModal}
            setIspayemntOpen={setIspayemntOpen}
          />
        )}

        {ispayemntOpen && (
          <CheckoutPayment
            isOpen={isOpen1}
            isOpen2={setIsopen2}
            isOpen3={isModalOpen}
            setIsAlert={setIsAlert}
            closeModal={handlePaymentCloseModal}
          />
        )}
      </div>
    </>
  );
};

export default OrderSummary;
