import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const [loginError, setLoginError] = useState("");

  // Hardcoded valid credentials
  const validCredentials = {
    email: "bhautik0012@gmail.com",
    password: "Bhautik@0012"
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: false, password: false };

    if (!email) {
      newErrors.email = true;
      valid = false;
    }

    if (!password) {
      newErrors.password = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const login = async (e) => {
    e.preventDefault();
    setLoginError("");
    
    if (!validateForm()) {
      return;
    }

    // Check against hardcoded credentials
    if (email === validCredentials.email && password === validCredentials.password) {
      alert("Login success");
      navigate("/viewdata");
    } else {
      setLoginError("Sorry you can not access this data");
    }

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
        <form onSubmit={login} className="lg:pl-6 border rounded-2xl backdrop-blur-sm border-black lg:pt-10 lg:pr-5 md:pl-6 md:pt-10 md:pr-5 sm:p-6 lg:w-[375px] lg:h-[400px] md:w-[367px] md:h-[400px] sm:w-[300px]">
          <div className="font-bold text-cyan-50 text-[30px] mb-[30px] me-8 text-center">
            <h2>Admin Login</h2>
          </div>

          {loginError && (
            <div className="mb-4 text-center text-red-500">
              {loginError}
            </div>
          )}

          <div>
            <input
              className={`border-black p-1 rounded placeholder:text-[19px] lg:w-[300px] md:w-[300px] sm:w-[230px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({...errors, email: false});
              }}
              required
            />
            {errors.email && <p className="text-sm text-red-500">Email is required</p>}
          </div>
          <div>
            <input
              className={`border-black p-1 rounded lg:w-[300px] md:w-[300px] sm:w-[230px] placeholder:text-[19px] mt-[30px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent ${
                errors.password ? "border-red-500" : ""
              }`}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({...errors, password: false});
              }}
              required
            />
            {errors.password && <p className="text-sm text-red-500">Password is required</p>}
          </div>

          <div className="lg:flex md:flex sm:flex">
            <div>
              <button
                type="submit"
                className="lg:pt-2 lg:pb-2 text-cyan-50 lg:pl-3 lg:pr-3 border border-white rounded-md ml-[100px] mt-[50px] sm:pt-2 sm:pb-2 sm:pl-3 sm:pr-3 hover:bg-green-400 duration-500 hover:border-green-400 hover:text-white font-bold"
              >
                Login Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;