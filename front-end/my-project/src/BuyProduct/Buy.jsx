import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Buy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const products = [
    // Your products array here

    {
            id: 1,
            name: "𝐋𝐔𝐌 𝟐𝟒𝟓𝟒𝟓𝐌-𝐃𝐂𝐑 (𝐁𝐢𝐟𝐚𝐜𝐢𝐚𝐥)",
            price: 25250.0,
            image: "public/Solarplat1.jpg",
          },
          {
            id: 2,
            name: "𝟓𝟓𝟎𝐖/𝟐𝟒𝐕 𝐌𝐨𝐧𝐨 𝐏𝐞𝐫𝐜 𝐇𝐚𝐥𝐟𝐜𝐮𝐭 𝐒𝐨𝐥𝐚𝐫 𝐏𝐚𝐧𝐞𝐥",
            price: 17000.0,
            image: "public/Solarplat2.jpg",
          },
          {
            id: 3,
            name: " 𝟑𝟑𝟓𝐖/𝟐𝟒𝐕 𝐏𝐨𝐥𝐲𝐜𝐫𝐲𝐬𝐭𝐚𝐥𝐥𝐢𝐧𝐞 𝐒𝐨𝐥𝐚𝐫 𝐏𝐚𝐧𝐞𝐥",
            price: 24000.0,
            image: "public/Solarplat3.jpg",
          },
          {
            id: 4,
            name: "  𝟏𝟕𝟎𝐖/𝟏𝟐𝐕 𝐏𝐨𝐥𝐲𝐜𝐫𝐲𝐬𝐭𝐚𝐥𝐥𝐢𝐧𝐞 𝐒𝐨𝐥𝐚𝐫 𝐏𝐚𝐧𝐞𝐥",
            price: 6500.0,
            image: "public/Solarplat4.jpg",
          },
          {
            id: 5,
            name: "𝐋𝐔𝐌 𝟐𝟒𝟓𝟓𝟎𝐌 (𝐁𝐢𝐟𝐚𝐜𝐢𝐚𝐥)- 𝐍𝐨𝐧 𝐃𝐂𝐑",
            price: 18000.0,
            image: "public/Solarplat5.jpg",
          },
          {
            id: 6,
            name: "𝐋𝐔𝐌 𝟐𝟒𝟓𝟒𝟎𝐌-𝐃𝐂𝐑 (𝐌𝐨𝐧𝐨-𝐅𝐚𝐜𝐢𝐚𝐥)",
            price: 24000.0,
            image: "public/Solarplat6.jpg",
          },
          {
            id: 7,
            name: "  𝐋𝐔𝐌 𝟐𝟒𝟓𝟒𝟎𝐌- 𝐃𝐂𝐑 (𝐁𝐢𝐟𝐚𝐜𝐢𝐚𝐥)",
            price: 25000.0,
            image: "public/Solarplat7.jpg",
          },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCart = () => {
    const updatedCart = [...cart, { ...selectedProduct, quantity }];
    setCart(updatedCart);
    setIsModalOpen(false);
    // alert("Item added to cart!"); // Optional: Notify user
  };

  const goToCartPage = () => {
    navigate("/cart", { state: { cart } }); // Navigate to Cart Page with cart data
  };

  return (
    <div className="">
      {/* View Cart Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={goToCartPage}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          View Cart ({cart.length})
        </button>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-24">
        {products.map((product) => (
          <div key={product.id} className="mt-[50px]">
            <div className="border w-[330px] rounded-md shadow-lg shadow-black h-[430px]">
              <img
                className="w-[340px] h-[240px] rounded-s-lg"
                src={product.image}
                alt={product.name}
              />
              <hr className="border" />
              <p className="text-[16px] ml-[20px] mt-[20px]">{product.name}</p>
              <p className="text-[18px] ml-[20px] mt-[10px]">
                ₹ {product.price.toLocaleString("en-IN")} (𝐈𝐧𝐜𝐥𝐮𝐬𝐢𝐯𝐞 𝐨𝐟 𝐚𝐥𝐥
                𝐭𝐚𝐱𝐞𝐬)
              </p>
              <div className="ml-[120px] mt-[25px] ">
                <button
                  onClick={() => openModal(product)}
                  className="pt-2 pb-2 pl-4 pr-4 transition-all duration-100 bg-green-400 border rounded-lg cursor-pointer hover:text-gray-600 hover:scale-105"
                >
                  𝐁𝐮𝐲 𝐍𝐨𝐰
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg relative">
            <h2 className="mb-4 text-xl font-bold">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-[150px] object-cover rounded mb-4"
            />
            <div className="mb-4">
              <label className="block mb-2 text-lg">Quantity:</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-lg font-semibold bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-[100px] text-center text-lg font-semibold border rounded"
                  min="1"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-lg font-semibold bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-lg font-semibold">
              Total Price: ₹ {(selectedProduct.price * quantity).toFixed(2)}{" "}
              (Inclusive of all taxes)
            </p>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={addToCart}
                className="px-4 py-2 text-white bg-green-400 rounded hover:bg-green-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buy;