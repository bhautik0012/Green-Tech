// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Table from "react-bootstrap/Table";

// const ProductTable = () => {
//   const [lstUser, setLstUser] = useState(null);

//   const deldata = (id) => {
//     axios.delete("http://localhost:3001/product/delete/" + id, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     axios.get("http://localhost:3001/product/get").then((res) => {
//       setLstUser(res.data.data);
//     });
//   };

//   useEffect(() => {
//     axios.get("http://localhost:3001/product/get")
    
//     .then((res) => {
//       setLstUser(res.data.data);
//       console.log(res.data);
//     });
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundImage: `url('./public/admin1.jpg')`,
//         minHeight: "100vh",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         padding: "20px 0",
//       }}
//     >
//       <div className="container">
//         <h2 className="mb-4 text-center text-white fw-normal">USER DATA</h2>

//         <div className="table-responsive">
//           <Table striped bordered hover className="text-center">
//             <thead className="text-white bg-primary">
//               <tr>
//                 <th>#</th>
//                 <th>solarImage</th>
//                 <th>productName</th>
//                 <th>price</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {lstUser &&
//                 lstUser.map((item, index) => (
//                   <tr key={item._id}>
//                     <td>{index + 1}</td>
//                     <td>
//                       <img
//                         src={item.solarImage}
//                         alt="Product"
//                         style={{ width: "50px", height: "auto" }}
//                       />
//                     </td>
//                     <td>{item.productName}</td>
//                     <td>{item.price}</td>
//                     <td>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => deldata(item._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductTable;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3001/product/delete/${id}`)
      .then(() => {
        axios.get("http://localhost:3001/product/get")
          .then((res) => {
            setProducts(res.data.data);
          });
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/product/get")
      .then((res) => {
        setProducts(res.data.data);
      });
  }, []);

  return (
    <div 
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ 
        backgroundImage: "url('./public/admin1.jpg')",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply"
      }}
    >
      <div className="container px-4 py-8 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-white">PRODUCT LIST</h2>

        <div className="flex justify-end mb-4">
          <Link 
            to="/add-product" 
            className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add Product
          </Link>
          
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-600">
              <tr>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                  #
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-center text-white uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 bg-opacity-80">
              {products.map((product, index) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12">
                        <img 
                          className="object-cover w-full h-full rounded" 
                          src={product.solarImage} 
                          alt={product.productName} 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.productName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">₹{product.price}</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;