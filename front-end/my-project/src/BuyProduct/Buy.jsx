import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Buy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [lstUser, setLstUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/product/get", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("===========response ============", res.data);
        setLstUser(res.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

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
    navigate("/cart", { state: { cart } });
  };

  return (
    <div className="">
      <div className="fixed bottom-4 right-4">
        <button
          onClick={goToCartPage}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          View Cart ({cart.length})
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-24">
        {lstUser &&
          lstUser.map((product) => (
            <div key={product.id} className="mt-[50px]">
              <div className="border w-[330px] rounded-md shadow-lg shadow-black h-[430px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-lg"
                  src={product.solarImage}
                  alt={product.productName}
                />
                <hr className="border" />
                <p className=" ml-[20px] mt-[20px] text-lg font-semibold mb-2">
                  {product.productName}
                </p>
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
              src={selectedProduct.solarImage}
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
