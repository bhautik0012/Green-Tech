import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const navigate = useNavigate();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); // State to track payment processing

  const calculateTotalCartPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePayment = () => {
    if (cart.length === 0) return;
    setShowModal(true);
  };

  const confirmPayment = () => {
    setIsProcessing(true); // Start processing
    setTimeout(() => {
      setIsPaymentSuccessful(true); // Payment successful after 4 seconds
      setIsProcessing(false); // Stop processing
      setShowModal(false); // Close the modal
    }, 4000); // 4-second delay
  };

  return (
    <div className="max-w-4xl p-4 mx-auto mt-10 border rounded-md shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 mb-4 border rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-24 h-24 rounded-lg"
              />
              <div className="flex-1 ml-4">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg font-semibold">
                ₹ {(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      )}
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">
          Total: ₹ {calculateTotalCartPrice()}
        </p>
        <button
          onClick={handlePayment}
          className={`px-4 py-2 text-white rounded ${
            cart.length === 0 || isPaymentSuccessful
              ? isPaymentSuccessful
                ? "bg-green-500 cursor-not-allowed" // Green and disabled after success
                : "bg-gray-400 cursor-not-allowed" // Gray and disabled if cart is empty
              : "bg-blue-500 hover:bg-blue-600" // Blue and enabled otherwise
          }`}
          disabled={cart.length === 0 || isPaymentSuccessful}
        >
          {isPaymentSuccessful ? "Payment Successful" : "Pay Now"}
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg">
            <h2 className="mb-4 text-xl font-bold">Confirm Payment</h2>
            <p className="mb-4 text-lg">
              Total Amount: <strong>₹ {calculateTotalCartPrice()}</strong>
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmPayment}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg">
            <h2 className="mb-4 text-xl font-bold">Processing Payment...</h2>
            <p>Please wait while we process your payment.</p>
            <p className="mt-2 text-lg">
              Total Amount: <strong>₹ {calculateTotalCartPrice()}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;