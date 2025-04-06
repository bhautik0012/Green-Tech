import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "../Auth/AuthContext";

function Head() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with your auth logic
  const { isAuthenticated, logout, user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".auth-dropdown-container")) {
        setShowAuthDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    logout();
    setShowAuthDropdown(false);
  };

  return (
    <div className="lg:mt-[20px] lg:ml-[120px] md:mt-[20px] sm:mt-[15px]">
      <div className="items-center justify-between lg:flex md:flex sm:flex">
        <div className="flex items-center">
          <FontAwesomeIcon
            className="lg:hidden w-[30px] h-[55px] md:mr-5 sm:mr-3 transition-all cursor-pointer hover:scale-110"
            icon={isMenuOpen ? faTimes : faBars}
            onClick={toggleMenu}
            alt="menu"
            aria-label="Toggle Menu"
          />
          <h1 className="lg:text-[35px] lg:font-semibold md:text-[30px] md:font-semibold sm:font-bold sm:text-[30px] sm:mt-[6px] md:mt-[5px]">
            <span className="text-green-800">GREEN</span>TECH
          </h1>
        </div>

        {/* Mobile Sidebar Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={toggleMenu}
            ></div>

            {/* Sidebar */}
            <div className="relative z-50 w-64 h-full bg-white shadow-lg">
              <div className="flex flex-col h-full p-4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-green-800">Menu</h2>
                  <div className="flex items-center">
                    {/* Mobile User Icon */}
                    <div className="relative mr-4 auth-dropdown-container">
                      <button
                        onClick={() => setShowAuthDropdown(!showAuthDropdown)}
                        className={`flex items-center justify-center w-10 h-10 font-bold text-white transition-all rounded-full ${
                          isAuthenticated
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-gray-700 hover:bg-gray-600"
                        }`}
                        aria-label="User menu"
                      >
                        {isAuthenticated ? (
                          user?.email?.charAt(0).toUpperCase() || "B"
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Dropdown Menu */}
                      {showAuthDropdown && (
                        <div className="absolute right-0 z-50 w-48 py-1 mt-2 border rounded-md shadow-lg bg-zinc-800 border-zinc-700">
                          {isAuthenticated ? (
                            <button
                              onClick={handleLogout}
                              className="block w-full px-4 py-2 text-sm text-left text-gray-300 hover:bg-zinc-700 hover:text-white"
                            >
                              Sign Out
                            </button>
                          ) : (
                            <>
                              <NavLink
                                to="/login"
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700 hover:text-white"
                                onClick={() => {
                                  setShowAuthDropdown(false);
                                  toggleMenu();
                                }}
                              >
                                Login
                              </NavLink>
                              <NavLink
                                to="/register"
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700 hover:text-white"
                                onClick={() => {
                                  setShowAuthDropdown(false);
                                  toggleMenu();
                                }}
                              >
                                Register
                              </NavLink>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={toggleMenu}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                  </div>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-4">
                    {[
                      "/",
                      "/about",
                      "/products",
                      "/service",
                      "/blog",
                      "/contacts",
                      "/cart",
                    ].map((path, index) => (
                      <li key={index}>
                        <NavLink
                          to={path}
                          onClick={toggleMenu}
                          className={({ isActive }) =>
                            `block px-4 py-2 rounded-md text-lg font-medium ${
                              isActive
                                ? "bg-green-100 text-green-800"
                                : "text-gray-700 hover:bg-gray-100"
                            }`
                          }
                        >
                          {path.slice(1).toUpperCase() || "HOME"}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex justify-center gap-4 pt-4 mt-auto">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-6 h-6 text-green-600 hover:text-green-800"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="w-6 h-6 text-green-600 hover:text-green-800"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-6 h-6 text-green-600 hover:text-green-800"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="items-center hidden lg:mr-[50px] lg:flex">
          <div className="flex items-center cursor-pointer lg:mr-[250px] hover:text-gray-500">
            <img
              className="w-[25px] h-[25px] mr-2 transition-all cursor-pointer hover:scale-110"
              src="phone.png"
              alt="phone"
              aria-label="Contact Phone"
            />
            <p className="text-[25px]">555-576-356</p>
          </div>

          <div className="flex gap-5 lg:mr-[20px]">
            <a
              className="text-green-400 hover:text-green-500"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                className="w-[30px] h-[30px] transition-all cursor-pointer hover:scale-110"
                icon={faFacebook}
              />
            </a>
            <a
              className="text-green-400 hover:text-green-500"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon
                className="w-[30px] h-[30px] transition-all cursor-pointer hover:scale-110"
                icon={faYoutube}
              />
            </a>
            <a
              className="text-green-400 hover:text-green-500"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                className="w-[30px] h-[30px] transition-all cursor-pointer hover:scale-110"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
