import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { QRCode } from "react-qr-code";
import axios from "axios";

function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Individual address state variables
  const [addressLine, setAddressLine] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [solarImage, setSolarImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [isProcessing, setIsProcessing] = useState(false);
  console.log("========Model view ===========", isProcessing);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");
  const [netBankingDetails, setNetBankingDetails] = useState({
    bankName: "",
    accountNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModel, setShowSuccessModel] = useState(false);
  const [addressErrors, setAddressErrors] = useState({});

  const calculateTotalCartPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // const handlePayment = () => {
  //   if (cart.length === 0) return;
  //   setShowModal(true);
  // };

  const validateCardDetails = () => {
    const newErrors = {};
    if (!cardDetails.cardNumber || cardDetails.cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }
    if (
      !cardDetails.expiryDate ||
      !/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)
    ) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }
    if (!cardDetails.cvv || cardDetails.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateUpiId = () => {
    if (!upiId || !/^[\w.-]+@[\w.-]+$/.test(upiId)) {
      setErrors({ ...errors, upiId: "Please enter a valid UPI ID." });
      return false;
    }
    return true;
  };

  const validateNetBankingDetails = () => {
    const newErrors = {};
    if (!netBankingDetails.bankName) {
      newErrors.bankName = "Please select a bank.";
    }
    if (
      !netBankingDetails.accountNumber ||
      netBankingDetails.accountNumber.length < 10
    ) {
      newErrors.accountNumber = "Account number must be at least 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAddress = () => {
    const newErrors = {};
    if (!addressLine.trim()) newErrors.addressLine = "Address is required";
    if (!city.trim()) newErrors.city = "City is required";
    if (!state.trim()) newErrors.state = "State is required";
    if (!pincode || !/^\d{6}$/.test(pincode))
      newErrors.pincode = "Valid 6-digit pincode required";
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber))
      newErrors.phoneNumber = "Valid 10-digit phone number required";

    setAddressErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (cart.length === 0) return;

    if (!validateAddress()) {
      const firstErrorField = document.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setShowModal(true);
  };

  // ... (keep all other existing functions the same)

  const confirmPayment = () => {
    const token = localStorage.getItem("token");
    console.log("token", token);

    console.log("cart", cart);

    const orderItems = cart.map((item) => {
      const {
        productName = "",
        price = 0,
        quantity = 0,
        solarImage,
        _id,
      } = item;
      return {
        name: productName,
        price: price,
        quantity: quantity,
        image: solarImage,
        product: _id,
      };
    });

    const data = {
      shippingInfo: {
        address: addressLine,
        city: city,
        state: state,
        country: country,
        pinCode: pincode,
        phoneNo: phoneNumber,
      },
      orderItems: orderItems,
    };
    console.log("============token =============", token);

    axios
      .post("http://localhost:3001/api/v1/order/new", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // Reset form after submission
        // setAddressLine("");
        // setEmail("");
        // setState("");
        // setCountry("India");
        // setPincode("");
        // setCity("");
        // setPhoneNumber("");
      });

    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    let isValid = true;
    if (selectedPaymentMethod === "card") {
      isValid = validateCardDetails();
    } else if (selectedPaymentMethod === "upi") {
      isValid = validateUpiId();
    } else if (selectedPaymentMethod === "netbanking") {
      isValid = validateNetBankingDetails();
    }

    if (!isValid) {
      const firstErrorField = document.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsProcessing(true);
    setShowModal(false);

    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessModel(true);

      setTimeout(() => {
        setShowSuccessModel(false);
        setIsPaymentSuccessful(true);
      }, 4000);
    }, 4000);
  };

  return (
    <div className="max-w-4xl p-4 mx-auto mt-10 border rounded-md shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 mb-4 border rounded-lg"
              >
                <img
                  src={item.solarImage}
                  alt={item.productName}
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

          {/* Shipping Address Form */}
          <div className="p-4 mt-6 border rounded-lg">
            <h3 className="mb-4 text-lg font-semibold">Shipping Address</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Phone Number*
                </label>
                <input
                  type="text"
                  className={`w-full p-2 border rounded-lg ${
                    addressErrors.phoneNumber ? "border-red-500" : ""
                  }`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {addressErrors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">
                    {addressErrors.phoneNumber}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">
                  Address*
                </label>
                <input
                  type="text"
                  className={`w-full p-2 border rounded-lg ${
                    addressErrors.addressLine ? "border-red-500" : ""
                  }`}
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                />
                {addressErrors.addressLine && (
                  <p className="mt-1 text-sm text-red-500">
                    {addressErrors.addressLine}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">City*</label>
                <input
                  type="text"
                  className={`w-full p-2 border rounded-lg ${
                    addressErrors.city ? "border-red-500" : ""
                  }`}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {addressErrors.city && (
                  <p className="mt-1 text-sm text-red-500">
                    {addressErrors.city}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">State*</label>
                <input
                  type="text"
                  className={`w-full p-2 border rounded-lg ${
                    addressErrors.state ? "border-red-500" : ""
                  }`}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                {addressErrors.state && (
                  <p className="mt-1 text-sm text-red-500">
                    {addressErrors.state}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Pincode*
                </label>
                <input
                  type="text"
                  className={`w-full p-2 border rounded-lg ${
                    addressErrors.pincode ? "border-red-500" : ""
                  }`}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                {addressErrors.pincode && (
                  <p className="mt-1 text-sm text-red-500">
                    {addressErrors.pincode}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Country
                </label>
                <select
                  className="w-full p-2 border rounded-lg"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>
          </div>

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
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={cart.length === 0 || isPaymentSuccessful}
            >
              {isPaymentSuccessful ? "Payment Successful" : "Pay Now"}
            </button>
          </div>
        </>
      )}

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-3xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4 text-2xl font-bold">Select Payment Method</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Payment options */}
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
                <div className="p-3 mb-4 rounded-lg bg-gray-50">
                  <h4 className="font-medium">Shipping to:</h4>
                  <p>{addressLine}</p>
                  <p>
                    {city}, {state} - {pincode}
                  </p>
                  <p>{country}</p>
                  <p>Phone: {phoneNumber}</p>
                </div>

                <h4 className="mb-2 font-medium">Products:</h4>
                <div className="overflow-y-auto max-h-48">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 mb-2 border-b"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.solarImage}
                          alt={item.name}
                          value={solarImage}
                          className="object-cover w-12 h-12 mr-3 rounded-md"
                        />
                        <div>
                          <p
                            className="text-sm font-medium "
                            value={productName}
                          >
                            {item.name}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm" value={quantity}>
                          x{item.quantity}
                        </p>
                        <p className="text-sm font-medium" value={price}>
                          ₹ {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹ {calculateTotalCartPrice()}</span>
                </div>
              </div>
            </div>

            {/* Payment method forms */}
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

            {selectedPaymentMethod === "upi" && (
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold">UPI Details</h3>
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                    <QRCode
                      value={`upi://pay?pa=bhautikgajera0012-1@okicici&pn=Bhautik Gajera&am=${calculateTotalCartPrice()}`}
                      size={200}
                      level="H"
                      includeMargin={true}
                    />
                    <p className="mt-4 text-sm text-gray-600">
                      Scan the QR code to pay using UPI.
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="UPI ID (e.g., example@upi)"
                    className={`w-full p-2 border rounded-lg ${
                      errors.upiId ? "border-red-500" : ""
                    }`}
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                  />
                  {errors.upiId && (
                    <p className="text-sm text-red-500">{errors.upiId}</p>
                  )}
                </div>
              </div>
            )}

            {selectedPaymentMethod === "netbanking" && (
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Net Banking Details
                </h3>
                <form className="space-y-4">
                  <select
                    className={`w-full p-2 border rounded-lg ${
                      errors.bankName ? "border-red-500" : ""
                    }`}
                    value={netBankingDetails.bankName}
                    onChange={(e) =>
                      setNetBankingDetails({
                        ...netBankingDetails,
                        bankName: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="">Select Bank</option>
                    <option value="SBI">State Bank of India</option>
                    <option value="HDFC">HDFC Bank</option>
                    <option value="ICICI">ICICI Bank</option>
                    <option value="Axis">Axis Bank</option>
                    <option value="BOB">BOB</option>
                  </select>
                  {errors.bankName && (
                    <p className="text-sm text-red-500">{errors.bankName}</p>
                  )}
                  <input
                    type="text"
                    placeholder="Account Number"
                    className={`w-full p-2 border rounded-lg ${
                      errors.accountNumber ? "border-red-500" : ""
                    }`}
                    value={netBankingDetails.accountNumber}
                    onChange={(e) =>
                      setNetBankingDetails({
                        ...netBankingDetails,
                        accountNumber: e.target.value,
                      })
                    }
                    required
                  />
                  {errors.accountNumber && (
                    <p className="text-sm text-red-500">
                      {errors.accountNumber}
                    </p>
                  )}
                </form>
              </div>
            )}

            <div className="sticky bottom-0 py-4 bg-white">
              <div className="flex justify-end">
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

      {showSuccessModel && (
        <div className="fixed bottom-4 right-4 animate-slide-in">
          <div className="p-4 text-white bg-green-500 rounded-lg shadow-lg">
            <p className="font-semibold">Payment is Successful!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
