// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isScrollingDown, setIsScrollingDown] = useState(false);
//   const [lastScrollPos, setLastScrollPos] = useState(0);

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
//   }, [lastScrollPos]);

//   return (
//     <header
//       className={`shadow-lg lg:bg-zinc-900 sticky top-0 transition-transform duration-300 ${
//         isScrollingDown ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <nav className="flex">
//         <ul className="lg:flex lg:gap-[100px] lg:mt-[10px] lg:ml-[120px] md:hidden sm:hidden">
//           {["/", "/about", "/products", "/service", "/blog", "/contacts","/cart"].map(
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

//         {/* login and registration */}

//         <ul className="lg:flex lg:gap-[100px] lg:mt-[25px] text-[20px] lg:ml-[120px] md:hidden sm:hidden">
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
//                 isActive ? "text-white" : "hover:text-white"
//               }`
//             }
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/register"
//             className={({ isActive }) =>
//               `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
//                 isActive ? "text-white" : "hover:text-white"
//               }`
//             }
//           >
//             Register
//           </NavLink>

//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const { isAuthenticated, logout } = useAuth();

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
    // Call your API logout if needed
    logout();
  };

  return (
    <header
      className={`shadow-lg lg:bg-zinc-900 sticky top-0 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex">
        <ul className="lg:flex lg:gap-[100px] lg:mt-[10px] lg:ml-[120px] md:hidden sm:hidden">
          {["/", "/about", "/products", "/service", "/blog", "/contacts", "/cart"].map(
            (path, index) => (
              <li key={index} className="lg:mt-[20px] lg:mb-[20px]">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Auth links */}
        <ul className="lg:flex lg:gap-[100px] lg:mt-[25px] text-[20px] lg:ml-[120px] md:hidden sm:hidden">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="font-bold text-gray-400 transition-all duration-500 cursor-pointer hover:scale-110 hover:text-white"
            >
             
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`
                }
              >
                Register
              </NavLink>

              
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;