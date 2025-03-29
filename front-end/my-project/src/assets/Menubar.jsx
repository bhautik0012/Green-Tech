// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../Auth/AuthContext";

// const Navbar = () => {
//   const [isScrollingDown, setIsScrollingDown] = useState(false);
//   const [lastScrollPos, setLastScrollPos] = useState(0);
//   const { isAuthenticated, logout } = useAuth();

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (currentScrollPos > lastScrollPos) {
//         setIsScrollingDown(true);
//       } else {
//         setIsScrollingDown(false);
//       }
//       setLastScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollPos]);

//   const handleLogout = () => {
//     // Call your API logout if needed
//     logout();
//   };

//   return (
//     <header
//       className={`shadow-lg lg:bg-zinc-900 sticky top-0 transition-transform duration-300 ${
//         isScrollingDown ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <nav className="flex">
//         <ul className="lg:flex lg:gap-[100px] lg:mt-[10px] lg:ml-[120px] md:hidden sm:hidden">
//           {["/", "/about", "/products", "/service", "/blog", "/contacts", "/cart"].map(
//             (path, index) => (
//               <li key={index} className="lg:mt-[20px] lg:mb-[20px]">
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
//                       isActive ? "text-white" : "hover:text-white"
//                     }`
//                   }
//                 >
//                   {path.slice(1).toUpperCase() || "HOME"}
//                 </NavLink>
//               </li>
//             )
//           )}
//         </ul>

//         {/* Auth links */}
//         <ul className="lg:flex lg:gap-[100px] lg:mt-[25px] text-[20px] lg:ml-[120px] md:hidden sm:hidden">
//           {isAuthenticated ? (
//             <button
//               onClick={handleLogout}
//               className="font-bold text-gray-400 transition-all duration-500 cursor-pointer hover:scale-110 hover:text-white"
//             >

//             </button>
//           ) : (
//             <>
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
//                     isActive ? "text-white" : "hover:text-white"
//                   }`
//                 }
//               >
//                 Login
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className={({ isActive }) =>
//                   `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
//                     isActive ? "text-white" : "hover:text-white"
//                   }`
//                 }
//               >
//                 Register
//               </NavLink>

//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../Auth/AuthContext";

// const Navbar = () => {
//   const [isScrollingDown, setIsScrollingDown] = useState(false);
//   const [lastScrollPos, setLastScrollPos] = useState(0);
//   const [showAuthDropdown, setShowAuthDropdown] = useState(false);
//   const { isAuthenticated, logout, user } = useAuth(); // Assuming your auth context provides user info

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       if (currentScrollPos > lastScrollPos) {
//         setIsScrollingDown(true);
//       } else {
//         setIsScrollingDown(false);
//       }
//       setLastScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollPos]);

//   const handleLogout = () => {
//     logout();
//     setShowAuthDropdown(false);
//   };

//   const toggleAuthDropdown = () => {
//     setShowAuthDropdown(!showAuthDropdown);
//   };

//   const closeDropdown = () => {
//     setShowAuthDropdown(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.auth-dropdown-container')) {
//         setShowAuthDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header
//       className={`shadow-lg lg:bg-zinc-900 sticky top-0 transition-transform duration-300 z-50 ${
//         isScrollingDown ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <nav className="flex items-center justify-between p-4 lg:px-8">
//         {/* Main Navigation Links */}
//         <ul className="hidden lg:flex lg:gap-[100px]">
//           {["/", "/about", "/products", "/service", "/blog", "/contacts", "/cart"].map(
//             (path, index) => (
//               <li key={index} className="my-[20px]">
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
//                       isActive ? "text-white" : "hover:text-white"
//                     }`
//                   }
//                 >
//                   {path.slice(1).toUpperCase() || "HOME"}
//                 </NavLink>
//               </li>
//             )
//           )}
//         </ul>

//         {/* Auth Dropdown */}
//         <div className="relative ml-auto auth-dropdown-container">
//           {isAuthenticated ? (
//             <button
//               onClick={toggleAuthDropdown}
//               className="flex items-center justify-center w-10 h-10 font-bold text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
//             >
//               {user?.name?.charAt(0).toUpperCase() || "U"}
//             </button>
//           ) : (
//             <button
//               onClick={toggleAuthDropdown}
//               className="flex items-center justify-center w-10 h-10 font-bold text-white transition-colors bg-gray-700 rounded-full hover:bg-gray-600"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </button>
//           )}

//           {showAuthDropdown && (
//             <div className="absolute right-0 z-50 w-48 py-1 mt-2 rounded-md shadow-lg bg-zinc-800">
//               {isAuthenticated ? (
//                 <>
//                   <div className="px-4 py-2 text-sm text-white border-b border-gray-700">
//                     {user?.email || "User"}
//                   </div>

//                   <button
//                     onClick={handleLogout}
//                     className="block w-full px-4 py-2 text-sm text-left text-gray-400 hover:bg-zinc-700 hover:text-white"
//                   >
//                     Sign Out
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <NavLink
//                     to="/login"
//                     className="block px-4 py-2 text-sm text-gray-400 hover:bg-zinc-700 hover:text-white"
//                     onClick={closeDropdown}
//                   >
//                     Login
//                   </NavLink>
//                   <NavLink
//                     to="/register"
//                     className="block px-4 py-2 text-sm text-gray-400 hover:bg-zinc-700 hover:text-white"
//                     onClick={closeDropdown}
//                   >
//                     Register
//                   </NavLink>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  // ... (keep existing useEffect hooks and scroll logic)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  const handleLogout = () => {
    logout();
    setShowAuthDropdown(false);
  };

  const toggleAuthDropdown = () => {
    setShowAuthDropdown(!showAuthDropdown);
  };

  const closeDropdown = () => {
    setShowAuthDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".auth-dropdown-container")) {
        setShowAuthDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`shadow-lg lg:bg-zinc-900 sticky top-0 transition-transform duration-400 z-50 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex items-center justify-between p-3 lg:px-8">
        {/* Main Navigation Links (keep existing) */}
        <ul className="hidden lg:flex lg:gap-[100px]">
          //{" "}
          {[
            "/",
            "/about",
            "/products",
            "/service",
            "/blog",
            "/contacts",
            "/cart",
          ].map((path, index) => (
            <li key={index} className="my-[15px]">
              {" "}
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`
                }
              >
                {" "}
                {path.slice(1).toUpperCase() || "HOME"}{" "}
              </NavLink>{" "}
            </li>
          ))}{" "}
        </ul>
        {/* Enhanced Auth Dropdown */}
        <div className="relative ml-auto auth-dropdown-container">
          {isAuthenticated ? (
            <button
              onClick={toggleAuthDropdown}
              className="flex items-center justify-center w-10 h-10 font-bold text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
            >
              {user?.name?.charAt(0).toUpperCase() || "B"}
            </button>
          ) : (
            <button
              onClick={toggleAuthDropdown}
              className="flex items-center justify-center w-10 h-10 font-bold text-white transition-colors bg-gray-700 rounded-full hover:bg-gray-600"
            >
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
            </button>
          )}

          {showAuthDropdown && (
            <div className="absolute right-0 z-50 w-56 py-1 mt-2 rounded-md shadow-lg bg-zinc-800">
              {isAuthenticated ? (
                <>
                  <div className="px-4 py-3 border-b border-gray-700">
                    <p className="text-sm font-medium text-white">
                      {user?.name || "User"}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {user?.email || ""}
                    </p>
                  </div>


                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-400 hover:bg-zinc-700 hover:text-white"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <div className="px-4 py-2 text-sm text-center text-gray-400 border-b border-gray-700">
                    Welcome Guest
                  </div>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-400 hover:bg-zinc-700 hover:text-white"
                    onClick={closeDropdown}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-400 hover:bg-zinc-700 hover:text-white"
                    onClick={closeDropdown}
                  >
                    Create Account
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
