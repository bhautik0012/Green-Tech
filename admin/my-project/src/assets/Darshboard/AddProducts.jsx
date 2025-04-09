import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const AddProducts = () => {
  const navigate = useNavigate();
  const [solarImage, setSolarImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const add = async () => {
    const formData = new FormData();
    formData.append("solarImage", solarImage);
    formData.append("productName", productName);
    formData.append("price", price);

    try {
      const response = await axios.post(
        "http://localhost:3001/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("========data========", response.data.status);

      navigate("/productshow");
      setSolarImage(null);
      setProductName("");
      setPrice("");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('./public/admin1.jpg')",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-2xl bg-opacity-90 rounded-xl backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Add New Product
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the details of your new product
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Product Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full transition-all duration-300 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-green-500 hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {solarImage ? (
                      <p className="text-sm text-gray-500">{solarImage.name}</p>
                    ) : (
                      <>
                        <svg
                          className="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    className="opacity-0"
                    onChange={(e) => setSolarImage(e.target.files[0])}
                    required
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                className="w-full px-4 py-2 transition-all border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm"></span>
                </div>
                <input
                  type="number"
                  className="block w-full py-2 pr-12 transition-all border border-gray-300 rounded-md pl-7 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">IND</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={add}
                className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-green-600 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
