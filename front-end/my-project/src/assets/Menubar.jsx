import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

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

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingDown(
        currentScrollPos > lastScrollPos && currentScrollPos > 10
      );
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  const handleLogout = () => {
    logout();
    setShowAuthDropdown(false);
  };

  return (
    <header
      className={`shadow-lg bg-zinc-900 sticky top-0 transition-transform duration-300 z-50 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex items-center justify-between p-4 mx-auto lg:px-8 max-w-7xl">
        {/* Main Navigation Links */}
        <ul className="hidden lg:flex lg:gap-8">
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
                className={({ isActive }) =>
                  `py-5 px-2 transition-all cursor-pointer text-gray-400 font-medium hover:text-white ${
                    isActive ? "text-white border-b-2 border-white" : ""
                  }`
                }
              >
                {path.slice(1).toUpperCase() || "HOME"}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Dropdown Container */}
        <div className="relative ml-4 auth-dropdown-container">
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
                    onClick={() => setShowAuthDropdown(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700 hover:text-white"
                    onClick={() => setShowAuthDropdown(false)}
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
