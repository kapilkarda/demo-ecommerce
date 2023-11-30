import React, { useState, useEffect } from "react";

const CheckoutDetails = ({ closeModal, setIspayemntOpen, isOpen1 }) => {
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pincode || !city || !state || !firstName || !lastName || !address) {
      setErrorMessage("Do not leave any field blank.");
    } else {
      setErrorMessage("");
      setFormSubmitted(true);
      closeModal();
      setIspayemntOpen(true);
      isOpen1(true);
    }
  };
  useEffect(() => {
    if (formSubmitted) {
    }
  }, [formSubmitted]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-slate-300 p-8 rounded-md ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Enter Details</h1>
          <button
            className="text-white bg-red-500 px-4 ml-8 rounded-md"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-10">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name:
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pincode:
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State:
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City:
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Address:
            </label>
            <input
              type="address"
              className="border border-gray-300 p-2 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="text-white bg-red-700 w-44 px-4 py-2 rounded-md"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutDetails;
