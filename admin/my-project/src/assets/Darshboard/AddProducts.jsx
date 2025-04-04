// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AddProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [isAddFormOpen, setIsAddFormOpen] = useState(false);
//   const [newProduct, setNewProduct] = useState({
//     solarImage: "",
//     productName: "",
//     price: 0,
//   });

//   // Fetch products from API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         "https://solar-api-d41x.onrender.com/product/add"
//       );
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Add new product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://solar-api-d41x.onrender.com/product/add",
//         newProduct
//       );
//       fetchProducts();
//       setIsAddFormOpen(false);
//       setNewProduct({
//         solarImage: "",
//         productName: "",
//         price: 0,
//       });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   // Delete product
//   const handleDeleteProduct = async (id) => {
//     try {
//       await axios.delete(`https://your-api-endpoint/products/${id}`);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <div className="container p-4 mx-auto">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-2xl font-bold">Product Dashboard</h1>
//         <button
//           onClick={() => setIsAddFormOpen(true)}
//           className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//         >
//           Add New Product
//         </button>
//       </div>

//       {/* Add Product Form Modal */}
//       {isAddFormOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-full max-w-md p-6 bg-white rounded-lg">
//             <h2 className="mb-4 text-xl font-bold">Add New Product</h2>
//             <form onSubmit={handleAddProduct}>
//               <div className="mb-4">
//                 <label className="block mb-2">Image URL</label>
//                 <input
//                   type="file"
//                   value={newProduct.solarImage}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, solarImage: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Product Name</label>
//                 <input
//                   type="text"
//                   value={newProduct.productName}
//                   onChange={(e) =>
//                     setNewProduct({
//                       ...newProduct,
//                       productName: e.target.value,
//                     })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Price</label>
//                 <input
//                   type="number"
//                   value={newProduct.price}
//                   onChange={(e) =>
//                     setNewProduct({
//                       ...newProduct,
//                       price: parseFloat(e.target.value),
//                     })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                   min="0"
//                   step="0.01"
//                 />
//               </div>

//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsAddFormOpen(false)}
//                   className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
//                 >
//                   Add Product
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Products Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="px-4 py-2 border">ID</th>
//               <th className="px-4 py-2 border">Image</th>
//               <th className="px-4 py-2 border">Name</th>
//               <th className="px-4 py-2 border">Price</th>
//               {/* <th className="px-4 py-2 border">Stock</th> */}
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border">{product.id}</td>
//                 <td className="px-4 py-2 border">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="object-cover w-16 h-16"
//                   />
//                 </td>
//                 <td className="px-4 py-2 border">{product.name}</td>
//                 <td className="px-4 py-2 border">
//                   ₹{product.price.toFixed(2)}
//                 </td>

//                 <td className="px-4 py-2 border">
//                   <div className="flex gap-2">
//                     <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteProduct(product.id)}
//                       className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddProducts;













import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const AddProducts = () => {
  const navigate = useNavigate();
  const [solarImage, setSolarImage] = useState(null); // store file
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
      console.log(response.data.status);

      navigate("/productshow");
      // Reset form
      setSolarImage(null);
      setProductName("");
      setPrice("");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div>
      <div className="lg:mt-[0px] pt-20 lg:ml-[580px] md:mt-[80px] md:ml-[200px] sm:ml-[45px] sm:mt-[50px]">
        <div className="lg:pl-6 border rounded-2xl backdrop-blur-sm border-black lg:pt-10 lg:pr-5 md:pl-6 md:pt-10 md:pr-5 sm:p-6 lg:w-[375px] lg:h-[400px] md:w-[367px] md:h-[400px] sm:w-[300px]">
          <div className="font-bold text-cyan-50 text-[30px] mb-[30px] me-8 text-center">
            <h2>Add Product</h2>
          </div>

          <div>
            <input
              className="border-black p-1 rounded placeholder:text-[19px] lg:w-[300px] md:w-[300px] sm:w-[230px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent"
              type="file"
              onChange={(e) => setSolarImage(e.target.files[0])}
              required
            />
          </div>
          <div>
            <input
              className="border-black p-1 rounded lg:w-[300px] md:w-[300px] sm:w-[230px] placeholder:text-[19px] mt-[30px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Product Name"
              required
            />
          </div>

          <div>
            <input
              className="border-black p-1 rounded lg:w-[300px] md:w-[300px] sm:w-[230px] placeholder:text-[19px] mt-[30px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
            />
          </div>

          <div className="lg:flex md:flex sm:flex">
            <div>
              
              <button
                className="lg:pt-2 lg:pb-2 text-cyan-50 lg:pl-3 lg:pr-3 border border-white rounded-md ml-[30px] mt-[20px] sm:pt-2 sm:pb-2 sm:pl-3 sm:pr-3 hover:bg-green-400 duration-500 hover:border-green-400 hover:text-white font-bold"
                onClick={add}
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

