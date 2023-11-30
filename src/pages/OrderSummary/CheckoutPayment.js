import React, { useState } from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./CheckoutPaymentFormat";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const CheckoutPayment = ({ isOpen, isOpen2, setIsAlert, closeModal }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");
  const router = useRouter();

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    switch (target.name) {
      case "number":
        setNumber(target.value);
        break;
      case "name":
        setName(target.value);
        break;
      case "expiry":
        setExpiry(target.value);
        break;
      case "cvc":
        setCvc(target.value);
        break;
      default:
        break;
    }
  };
  const closePaymentModal = () => {
    closeModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAlert(true);
    isOpen2(true);
    setNumber("");
    setName("");
    setExpiry("");
    setCvc("");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Payement has successfully done!",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(function () {
      router.push("/");
    }, 2000);
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 flex items-center justify-center bg-opacity-50  bg-black`}
    >
      <div className="App-payment bg-slate-300 p-8 rounded-md w-[45%]">
        <div className="flex justify-between">
          <h1 className="font-bold text-center">
            Please Enter your payment details
          </h1>
          <button
            className="text-white bg-red-500 px-4 ml-8 rounded-md"
            onClick={closePaymentModal}
          >
            X
          </button>
        </div>

        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit} className="">
          <div className="form-group mt-2">
            <h2 className="font-bold">Name on card:</h2>
            <input
              type="text"
              name="name"
              className="form-control border border-gray-300 p-2 w-full "
              placeholder="Name"
              pattern="[a-z A-Z-]+"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={name}
            />
          </div>
          <div className="form-group mt-2">
            <h2 className="font-bold">Card Number:</h2>
            <input
              type="tel"
              name="number"
              className="form-control border border-gray-300 p-2 w-full"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              maxLength="19"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={number}
            />
          </div>
          <div className="form-group mt-2 ">
            <h2 className="font-bold">Expiration Date:</h2>
            <input
              type="tel"
              name="expiry"
              className="form-control border border-gray-300 p-2 w-full"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={expiry}
            />
          </div>
          <div className="form-group mt-2">
            <h2 className="font-bold">CVC:</h2>
            <input
              type="tel"
              name="cvc"
              className="form-control border border-gray-300 p-2 w-full"
              placeholder="CVC"
              pattern="\d{3}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cvc}
            />
          </div>

          <div className="form-actions flex justify-center items-center">
            <button
              type="submit"
              className="text-white bg-red-700 w-44 px-4 py-2 mt-6 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CheckoutPayment;
