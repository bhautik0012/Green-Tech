import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const API_BASE = "https://solar-api-d41x.onrender.com";
const LIST_URL = `${API_BASE}/user/all-user`;

const Viewdata = () => {
  const [lstUser, setLstUser] = useState([]);

  const deldata = async (id) => {
    try {
      setLstUser((prev) => prev.filter((u) => u._id !== id));
      await axios.delete(`${API_BASE}/user/delete/${id}`);
      const res = await axios.get(LIST_URL);
      setLstUser(res.data.data || []);
    } catch (error) {
      console.log(error);
      try {
        const res = await axios.get(LIST_URL);
        setLstUser(res.data.data || []);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/user/all-user").then((res) => {
      setLstUser(res.data.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gradient-to-br from-amber-50 via-white to-green-50 py-6 md:py-10">
      <div className="container">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">User Management</h2>
          <p className="mt-2 text-gray-600">View, update, and delete registered users.</p>
        </div>

        <div className="table-responsive animate-fade-in-up">
          <Table striped bordered hover className="text-center align-middle shadow-sm rounded overflow-hidden">
            <thead className="bg-success text-white thead-shimmer">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Age</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {lstUser &&
                lstUser.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`transition-all hover:bg-green-50 hover:shadow-md hover:[transform:scale(1.01)] ${index % 2 === 0 ? 'animate-stagger-left' : 'animate-stagger-right'}`}
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td className="text-truncate" style={{ maxWidth: "220px" }}>
                      {item.email}
                    </td>
                    <td>{item.mobile}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                    <td className="d-flex flex-wrap gap-2 justify-content-center">
                      <Link
                        to={`/updatedata/${item._id}`}
                        className="btn btn-success btn-sm shadow-sm transition-transform hover:[transform:translateY(-1px)]"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-outline-danger btn-sm shadow-sm transition-transform hover:[transform:translateY(-1px)]"
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
          background-image: linear-gradient(90deg, rgba(25,135,84,1) 0%, rgba(25,135,84,0.85) 40%, rgba(255,255,255,0.25) 50%, rgba(25,135,84,0.85) 60%, rgba(25,135,84,1) 100%);
          background-size: 200% 100%;
          animation: shimmer 2.2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Viewdata;
