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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50">
      <div className="container px-4 py-8 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-green-700">PRODUCT LIST</h2>

        <div className="flex justify-end mb-4">
          <Link 
            to="/add-product" 
            className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add Product
          </Link>
          
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm animate-fade-in-up">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-600 thead-shimmer">
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
                <tr
                  key={product._id}
                  className={`hover:bg-green-50 transition-all ${index % 2 === 0 ? 'animate-stagger-left' : 'animate-stagger-right'}`}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
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
                      className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-transform hover:[transform:translateY(-1px)] shadow-sm"
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
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 500ms ease-out; }

        @keyframes stagger-left {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes stagger-right {
          0% { opacity: 0; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-stagger-left { animation: stagger-left 420ms ease-out both; }
        .animate-stagger-right { animation: stagger-right 420ms ease-out both; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .thead-shimmer {
          background-image: linear-gradient(90deg, rgba(22,163,74,1) 0%, rgba(22,163,74,0.85) 40%, rgba(255,255,255,0.25) 50%, rgba(22,163,74,0.85) 60%, rgba(22,163,74,1) 100%);
          background-size: 200% 100%;
          animation: shimmer 2.2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductTable;