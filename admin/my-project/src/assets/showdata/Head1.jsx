import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Head1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:mt-[20px] lg:ml-[120px] md:mt-[20px] sm:mt-[15px]">
      <div className="items-center justify-between lg:flex md:flex sm:flex">
        <div className="flex items-center">
          <h1 className="lg:text-[35px] lg:font-semibold md:text-[30px] md:font-semibold sm:font-bold sm:text-[30px] sm:mt-[6px] md:mt-[5px]">
            <span className="text-green-800">GREEN</span>TECH
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="items-center hidden lg:mr-[50px] lg:flex">
         

          <div className="flex gap-5 lg:mr-[20px]">
            <a
              className="text-green-600 hover:text-green-500"
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
              className="text-red-500 hover:text-red-600"
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
              className="text-blue-500 hover:text-blue-600"
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
            {[
              "/",
              "/about",
              "/products",
              "/service",
              "/blog",
              "/contacts",
              "/cart",
            ].map((path, index) => (
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
            ))}
          </nav>
        </div>
      </div>

      <div className="sm:block md:hidden lg:hidden">
        <div className="bg-zinc-900 lg:w-auto pb-[15px] pt-[15px] mt-[15px]  items-center">
          <nav className="flex items-center gap-5 ml-2">
            {[
              "/",
              "/about",
              "/products",
              "/service",
              "/blog",
              "/contacts",
              "/cart",
            ].map((path, index) => (
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
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Head1;
