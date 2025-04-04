import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Head1() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container px-4 py-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Hamburger Menu Icon - visible on small and medium screens */}
          <button 
            onClick={toggleSidebar}
            className="mr-4 text-green-800 "
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="text-green-800">GREEN</span>TECH
          </h1>
        </div>

        {/* Social Icons - visible on all screens */}
        <div className="flex items-center">
          <div className="flex gap-3 sm:gap-4 md:gap-5">
            <a
              className="text-green-600 transition-all hover:text-green-500 hover:scale-110"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                className="w-6 h-6 sm:w-7 sm:h-7"
                icon={faFacebook}
              />
            </a>
            <a
              className="text-red-500 transition-all hover:text-red-600 hover:scale-110"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon
                className="w-6 h-6 sm:w-7 sm:h-7"
                icon={faYoutube}
              />
            </a>
            <a
              className="text-blue-500 transition-all hover:text-blue-600 hover:scale-110"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                className="w-6 h-6 sm:w-7 sm:h-7"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={toggleSidebar}
          ></div>
          <div className="absolute inset-y-0 left-0 w-64 transition-transform duration-300 ease-in-out transform bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-green-800">Dashboard</h2>
              <button 
                onClick={toggleSidebar} 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="p-4">
              <NavLink
                to="/viewdata"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg mb-2 transition-colors ${
                    isActive ? "bg-green-100 text-green-800" : "hover:bg-gray-100"
                  }`
                }
              >
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                User Data
              </NavLink>
              <NavLink
                to="/add-product"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? "bg-green-100 text-green-800" : "hover:bg-gray-100"
                  }`
                }
              >
                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                Add Product
              </NavLink>

              <NavLink
                to="/productshow"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? "bg-green-100 text-green-800" : "hover:bg-gray-100"
                  }`
                }
              >
                <FontAwesomeIcon className="mr-3" />
                Show Product
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Head1;