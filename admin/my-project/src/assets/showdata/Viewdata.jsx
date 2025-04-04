import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Viewdata = () => {
  const [lstUser, setLstUser] = useState(null);

  const deldata = (id) => {
    axios.get("https://solar-api-d41x.onrender.com/delete/" + id);
    axios.get("https://solar-api-d41x.onrender.com").then((res) => {
      setLstUser(res.data.data);
    });
  };

  useEffect(() => {
    axios.get("https://solar-api-d41x.onrender.com").then((res) => {
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
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>City</th>
                <th>Actions</th>
                <th>Order</th>
              </tr>
            </thead>

            <tbody>
              {lstUser &&
                lstUser.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td className="text-truncate" style={{ maxWidth: "150px" }}>
                      {item.email}
                    </td>
                    <td>{item.mobile}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                    <td className="flex-wrap gap-2 d-flex justify-content-center">
                      <Link
                        to={`/updatedata/${item._id}`}
                        className="btn btn-success btn-sm"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deldata(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {" "}
                      <Link
                        to={`/updatedata/${item._id}`}
                        className="btn btn-success btn-sm"
                      >
                        Check
                      </Link>
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

export default Viewdata;
