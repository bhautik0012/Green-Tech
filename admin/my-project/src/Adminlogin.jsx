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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-green-600 via-green-500 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 text-white">
          <div className="max-w-md">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                GREEN TECH
              </h1>
              <h2 className="text-3xl font-semibold mb-6 text-green-100">SOLAR</h2>
              <p className="text-lg text-green-100 leading-relaxed">
                Welcome back! Sign in to your admin panel to manage products, orders, and users securely.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Manage inventory and product details</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Review and process orders</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Oversee user accounts and permissions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Access analytics and reports</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Admin Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 bg-white">
        <div className="mx-auto w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-green-600 mb-2">GREEN TECH</h1>
            <h2 className="text-xl font-semibold text-green-500">ADMIN</h2>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Sign In</h2>
            <p className="text-gray-600">Use your admin credentials to continue</p>
          </div>

          {loginError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700 text-sm">{loginError}</p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={login}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: false }); }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">Email is required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: false }); }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your password"
                required
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">Password is required</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Adminlogin;