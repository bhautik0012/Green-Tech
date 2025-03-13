// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function Cart() {
//   const location = useLocation();
//   const cart = location.state?.cart || [];
//   const navigate = useNavigate();
//   const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false); // State to track payment processing

//   const calculateTotalCartPrice = () => {
//     return cart
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   const handlePayment = () => {
//     if (cart.length === 0) return;
//     setShowModal(true);
//   };

//   const confirmPayment = () => {
//     setIsProcessing(true); // Start processing
//     setTimeout(() => {
//       setIsPaymentSuccessful(true); // Payment successful after 4 seconds
//       setIsProcessing(false); // Stop processing
//       setShowModal(false); // Close the modal
//     }, 4000); // 4-second delay
//   };

//   return (
//     <div className="max-w-4xl p-4 mx-auto mt-10 border rounded-md shadow-lg">
//       <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-between p-4 mb-4 border rounded-lg"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="object-cover w-24 h-24 rounded-lg"
//               />
//               <div className="flex-1 ml-4">
//                 <p className="text-lg font-semibold">{item.name}</p>
//                 <p className="text-gray-600">Quantity: {item.quantity}</p>
//               </div>
//               <p className="text-lg font-semibold">
//                 ₹ {(item.price * item.quantity).toFixed(2)}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//       <hr className="my-4" />
//       <div className="flex items-center justify-between">
//         <p className="text-lg font-semibold">
//           Total: ₹ {calculateTotalCartPrice()}
//         </p>
//         <button
//           onClick={handlePayment}
//           className={`px-4 py-2 text-white rounded ${
//             cart.length === 0 || isPaymentSuccessful
//               ? isPaymentSuccessful
//                 ? "bg-green-500 cursor-not-allowed" // Green and disabled after success
//                 : "bg-gray-400 cursor-not-allowed" // Gray and disabled if cart is empty
//               : "bg-blue-500 hover:bg-blue-600" // Blue and enabled otherwise
//           }`}
//           disabled={cart.length === 0 || isPaymentSuccessful}
//         >
//           {isPaymentSuccessful ? "Payment Successful" : "Pay Now"}
//         </button>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-6 bg-white rounded-lg">
//             <h2 className="mb-4 text-xl font-bold">Confirm Payment</h2>
//             <p className="mb-4 text-lg">
//               Total Amount: <strong>₹ {calculateTotalCartPrice()}</strong>
//             </p>
//             <div className="flex justify-end">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmPayment}
//                 className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//               >
//                 Confirm Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isProcessing && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-6 bg-white rounded-lg">
//             <h2 className="mb-4 text-xl font-bold">Processing Payment...</h2>
//             <p>Please wait while we process your payment.</p>
//             <p className="mt-2 text-lg">
//               Total Amount: <strong>₹ {calculateTotalCartPrice()}</strong>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;

// new crete amazon like window model 



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const navigate = useNavigate();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // State for selected payment method
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({}); // State for validation errors

  const calculateTotalCartPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePayment = () => {
    if (cart.length === 0) return;
    setShowModal(true);
  };

  const validateCardDetails = () => {
    const newErrors = {};
    if (!cardDetails.cardNumber || cardDetails.cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }
    if (!cardDetails.expiryDate || !/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }
    if (!cardDetails.cvv || cardDetails.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const confirmPayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (selectedPaymentMethod === "card" && !validateCardDetails()) {
      return; // Stop if card details are invalid
    }

    setIsProcessing(true); // Start processing

    // Simulate payment processing for 4 seconds
    setTimeout(() => {
      setIsPaymentSuccessful(true); // Payment successful
      setIsProcessing(false); // Stop processing
      setShowModal(false); // Close the modal after 4 seconds

      // Navigate to the PurchaseSummary page with cart data
      // navigate("/purchase-summary", { state: { cart } });
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
          <div className="w-full max-w-3xl p-6 bg-white rounded-lg">
            <h2 className="mb-4 text-2xl font-bold">Select Payment Method</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Payment Options */}
              <div>
                <div className="p-4 border rounded-lg">
                  <h3 className="mb-4 text-lg font-semibold">
                    Choose a payment method
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={selectedPaymentMethod === "card"}
                        onChange={() => setSelectedPaymentMethod("card")}
                        className="mr-2"
                        required
                      />
                      <span>Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="netbanking"
                        checked={selectedPaymentMethod === "netbanking"}
                        onChange={() => setSelectedPaymentMethod("netbanking")}
                        className="mr-2"
                        required
                      />
                      <span>Net Banking</span>
                    </label>
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={selectedPaymentMethod === "upi"}
                        onChange={() => setSelectedPaymentMethod("upi")}
                        className="mr-2"
                        required
                      />
                      <span>UPI</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="p-4 border rounded-lg">
                <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between mb-2">
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span>₹ {(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹ {calculateTotalCartPrice()}</span>
                </div>
              </div>
            </div>

            {/* Card Details Form (Visible if Card is selected) */}
            {selectedPaymentMethod === "card" && (
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold">Card Details</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className={`w-full p-2 border rounded-lg ${
                      errors.cardNumber ? "border-red-500" : ""
                    }`}
                    value={cardDetails.cardNumber}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        cardNumber: e.target.value,
                      })
                    }
                    required
                  />
                  {errors.cardNumber && (
                    <p className="text-sm text-red-500">{errors.cardNumber}</p>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Expiry Date (MM/YY)"
                      className={`p-2 border rounded-lg ${
                        errors.expiryDate ? "border-red-500" : ""
                      }`}
                      value={cardDetails.expiryDate}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          expiryDate: e.target.value,
                        })
                      }
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className={`p-2 border rounded-lg ${
                        errors.cvv ? "border-red-500" : ""
                      }`}
                      value={cardDetails.cvv}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, cvv: e.target.value })
                      }
                      required
                    />
                  </div>
                  {errors.expiryDate && (
                    <p className="text-sm text-red-500">{errors.expiryDate}</p>
                  )}
                  {errors.cvv && (
                    <p className="text-sm text-red-500">{errors.cvv}</p>
                  )}
                </form>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmPayment}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
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