import { useState, useEffect } from "react";
import axios from "axios";

const Check = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total amount whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  // Handle item removal
  const token = localStorage.getItem("token");

  const handleRemoveItem = (itemId) => {
    // setCartItems(cartItems.filter((item) => item.id !== itemId));
    axios.delete("http://localhost:3001/api/v1/order/" + itemId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Get payment status color
  const getPaymentStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/api/v1/admin/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("---------------->", res.data?.orders);
        if (res?.data?.orders) {
          setCartItems(res.data.orders);
        }
      });
  }, []);

  return (
    <div className="container px-8 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Your Order Details
      </h1>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-700">
                Order Summary
              </h2>
            </div>

            {cartItems.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cartItems.map((orderDetail) => {
                  console.log("orderDetail----->", orderDetail);
                  const item = orderDetail?.orderItems?.[0];
                  const { address, city, state, country, pinCode, phoneNo } =
                    orderDetail?.shippingInfo || {};

                  const addressText = `${address}, ${city} - ${pinCode}, ${state}, ${country},Phone No :${phoneNo}`;
                  return (
                    <li
                      key={item?._id}
                      className="flex flex-col gap-4 p-4 sm:flex-row"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-20 h-20 rounded-md"
                        />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-gray-600">
                              ₹{item.price?.toFixed(2)}
                            </p>
                            <p>{addressText}</p>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(
                                item.paymentStatus
                              )}`}
                            >
                              {item.paymentStatus}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <button
                            onClick={(e) => handleRemoveItem(orderDetail._id)}
                            className="flex items-center text-red-600 hover:text-red-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {/* Order Summary */}
      </div>
    </div>
  );
};

export default Check;
