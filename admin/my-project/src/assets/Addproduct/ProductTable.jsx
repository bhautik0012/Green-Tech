import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const ProductTable = () => {
  const [lstUser, setLstUser] = useState(null);

  const deldata = (id) => {
    axios.delete("http://localhost:3001/product/delete/" + id);

    axios.get("http://localhost:3001/product/get").then((res) => {
      setLstUser(res.data.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/product/get").then((res) => {
      setLstUser(res.data.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('./public/admin1.jpg')`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <h2 className="mb-4 text-center text-white fw-normal">USER DATA</h2>

        <div className="table-responsive">
          <Table striped bordered hover className="text-center">
            <thead className="text-white bg-primary">
              <tr>
                <th>#</th>
                <th>solarImage</th>
                <th>productName</th>
                <th>price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {lstUser &&
                lstUser.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.solarImage}
                        alt="Product"
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deldata(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
