import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Auth/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    axios.get("http://localhost:3001/logout").then(function (response) {
      console.log(response.data.status);
      if (response.data.status == "admin logout") {
        alert("logout");
      }
    });
  };

  const login = async () => {
    const data = {
      email: email,
      password: password,
    };
    const result = await authLogin(email, password);

    await axios
      .post("http://localhost:3001/user/login", data, {
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      })
      .then(function (response) {
        // console.log(response.data.status);
        console.log(
          "=========data111=========",
          response?.data?.data?.accessToken
        );

        if (response.data.statusCode == 200) {
          localStorage.setItem("token", response?.data?.data?.accessToken);
          console.log("========login======");
          alert("login success");
          navigate("/");
        } else if (response.data.status == "check email") {
          alert("check details ");
        } else if (response.data.status == "check password") {
          alert("check details ");
        } else if (response.data.status == "already admin login") {
          alert("already admin login ");
        }
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        backgroundImage: `url('./public/admin1.jpg')`,
        height: `600.5px`,
        objectFit: `cover`,
      }}
    >
      <div className="lg:mt-[0px] pt-20 lg:ml-[580px] md:mt-[80px] md:ml-[200px] sm:ml-[45px] sm:mt-[50px]">
        <div className="lg:pl-6 border rounded-2xl backdrop-blur-sm border-black lg:pt-10 lg:pr-5 md:pl-6 md:pt-10 md:pr-5 sm:p-6 lg:w-[375px] lg:h-[400px] md:w-[367px] md:h-[400px] sm:w-[300px]">
          <div className="font-bold text-cyan-50 text-[30px] mb-[30px] me-8 text-center">
            <h2>Login</h2>
          </div>

          {error && (
            <div className="p-2 mb-4 text-red-700 bg-red-100 rounded">
              {error}
            </div>
          )}

          <div>
            <input
              className="border-black p-1 rounded placeholder:text-[19px] lg:w-[300px] md:w-[300px] sm:w-[230px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="border-black p-1 rounded lg:w-[300px] md:w-[300px] sm:w-[230px] placeholder:text-[19px] mt-[30px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="font-semibold text-cyan-50 mt-[20px] md:ml-[180px] lg:ml-[180px] sm:ml-[100px]">
              Forget password?
            </p>
          </div>

          <div className="lg:flex md:flex sm:flex">
            <div>
              <button
                className="lg:pt-2 lg:pb-2 text-cyan-50 lg:pl-3 lg:pr-3 border border-white rounded-md ml-[30px] mt-[20px] sm:pt-2 sm:pb-2 sm:pl-3 sm:pr-3  hover:bg-green-400 duration-500 hover:border-green-400 hover:text-white  font-bold"
                onClick={() => {
                  login();
                }}
              >
                Login Now
              </button>
            </div>
            <div>
              <button
                className="lg:pt-2 text-cyan-50 lg:pb-2 lg:pl-3 lg:pr-3 mt-[20px] border border-white rounded-md ml-[30px] sm:pt-2 sm:pb-2 sm:pl-3 sm:pr-3 hover:bg-green-400 duration-500 hover:border-green-400 hover:text-white font-bold"
                onClick={handleLogout}
              >
                Logout Now
              </button>
            </div>
          </div>

          <div className="text-center text-cyan-50 mt-[30px]">
            <Link to="/register">
              <span className="duration-500 cursor-pointer hover:text-green-400 hover:text-green">
                Create an account!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
