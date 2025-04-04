// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";


// import {
//   faFacebook,
//   faYoutube,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// function Head() {
//   return (
//     <div>
//       <div className="lg:mt-[20px] lg:ml-[120px] lg:flex md:flex sm:flex md:mt-[20px] sm:mt-[15px]">
//         <div className="md:flex sm:flex">
//           <FontAwesomeIcon
//             className="lg:hidden w-[30px] h-[55px] md:mr-5 sm:mr-3 transition-all cursor-pointer hover:scale-110"
//             icon={faBars}
//             alt="bars"
//           />
//           <h1 className="lg:text-[35px] lg:font-semibold md:text-[30px] md:font-semibold sm:font-bold sm:text-[30px] sm:mt-[6px] md:mt-[5px]">
//             <span className="text-green-800">GREEN</span>TECH
//           </h1>
//         </div>

//         {/* Three dot */}
//         {/* <div className="md:mt-[8px]">
//           <FontAwesomeIcon
//             className="md:w-[40px] md:h-[35px] lg:hidden md:ml-[480px] sm:w-[35px] sm:h-[30px] sm:mt-[6px] sm:ml-[120px] transition-all cursor-pointer hover:scale-110"
//             icon={faEllipsisVertical}
//           />
//         </div> */}

//         <div className="md:block lg:hidden ">
//           <ul className="flex md:gap-5 sm:gap-2 mt-[15px] md:text-[18px] md:ml-[290px] sm:ml-[10px] ">
//             <NavLink
//               to="/login"
//               className={({ isActive }) =>
//                 `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-100 border-black rounded-md border-[1px] md:pl-5 md:pr-5 md:pt-2 md:pb-2 sm:pl-3 sm:pr-3 sm:pb-1 hover:bg-green-400 hover:text-white  ${
//                   isActive ? "text-green-400" : "hover:text-black"
//                 }`
//               }
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/register"
//               className={({ isActive }) =>
//                 `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-100 border-black rounded-md border-[1px] md:pl-5 md:pr-5 md:pt-2 md:pb-2 sm:pl-2 sm:pr-2 sm:pb-1  hover:bg-green-400 hover:text-white ${
//                   isActive ? "text-green-400" : "hover:text-black"
//                 }`
//               }
//             >
//               Register
//             </NavLink>
//           </ul>
//         </div>

//         {/* contact number */}
//         <div className="lg:flex md:hidden sm:hidden">
//           <div className="flex cursor-pointer lg:transition-all hover:text-gray-500 hover:scale-100">
//             <img
//               className="w-[25px] h-[25px] lg:ml-[500px] lg:mt-[20px] lg:transition-all cursor-pointer hover:scale-110"
//               src="phone.png"
//               alt="phone"
//             />
//             <p className="lg:ml-[23px] lg:text-[25px] lg:mt-[13px] ">
//               555-576-356
//             </p>
//           </div>
//           <div className="flex">
//             {/* digital Media */}
//             <div>
//               <div className="lg:flex lg:ml-[260px] gap-5 mt-[15px] flex md:hidden sm:hidden">
//                 <div>
//                   <a
//                     className="text-green-400 hover:text-green-500"
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon
//                       className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
//                       icon={faFacebook}
//                     />
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     className="text-green-400 hover:text-green-500"
//                     href="https://www.youtube.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon
//                       className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
//                       icon={faYoutube}
//                     />
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     className="text-green-400 hover:text-green-500"
//                     href="https://www.linkedin.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FontAwesomeIcon
//                       className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
//                       icon={faLinkedin}
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Head;


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Head() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 lg:hidden md:block">
            <ul className="flex gap-3">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-100 border-black rounded-md border-[1px] p-2 hover:bg-green-400 hover:text-white ${
                    isActive ? "text-green-400" : "hover:text-black"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-100 border-black rounded-md border-[1px] p-2 hover:bg-green-400 hover:text-white ${
                    isActive ? "text-green-400" : "hover:text-black"
                  }`
                }
              >
                Register
              </NavLink>
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="items-center hidden lg:mr-[50px] lg:flex">
          <div className="flex items-center cursor-pointer  lg:mr-[250px] hover:text-gray-500">
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







      
      <div className="sm:hidden md:block lg:hidden">
        <div className="bg-zinc-900 lg:w-auto pb-[15px] pt-[15px] mt-[15px]  items-center">
          <nav className="flex items-center gap-10 ml-[15px] ">
            {["/", "/about", "/products", "/service", "/blog", "/contacts","/cart"].map(
              (path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `font-semibold text-lg duration-500 cursor-pointer ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              )
            )}
          </nav>
        </div>
      </div>

      <div className="sm:block md:hidden lg:hidden">
        <div className="bg-zinc-900 lg:w-auto pb-[15px] pt-[15px] mt-[15px]  items-center">
          <nav className="flex items-center gap-3 ml-2">
            {["/", "/about", "/products", "/service", "/blog", "/contacts","/cart"].map(
              (path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    ` font-extrabold duration-500 text-[10px] cursor-pointer ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Head;


