import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  //   faEllipsisVertical,
} from "@fortawesome/free-brands-svg-icons";

function Last() {
  return (
    <div>
      <div className=" lg:flex lg:mt-[60px] lg:text-[20px] md:hidden sm:hidden">
        <div className="bg-green-400 lg:w-[380px] lg:h-[400px] pb-[15px]">
          <nav className="flex flex-col items-start lg:items-center lg:mt-[50px]">
            {["/", "/about", "/products", "/service", "/blog", "/contacts"].map(
              (path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `mt-[23px] font-semibold text-lg duration-500 cursor-pointer ${
                      isActive ? "text-white" : "text-gray-900 hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              )
            )}
          </nav>
        </div>

        <div className="flex lg:w-[1150px] lg:h-[400px]  bg-gray-800">
          <div>
            <p className="font-semibold text-white lg:ml-[120px] lg:mt-[80px] font-mono text-[20px]">
              SIGN UP TODAY TO PAY LESS FOR YOUR ENERGY!
            </p>
            <p className="text-gray-500 text-[12px] lg:ml-[120px]">
              Each month we roll out special offers and discounts for our solar
              panels.
            </p>
            {/* <div className="pb-1 pl-2 bg-gray-700 border rounded-md lg:w-[370px] lg:h-[40px] lg:ml-[120px] lg:mt-[30px] flex ">
              <input
                type="email"
                placeholder="Your e-mail"
                className=" bg-gray-700 outline-none rounded-md lg:w-[350px] lg:h-[35px] text-white  placeholder:text-[15px]  "
              />
              <button className="p-3">
                <BsFillSendFill className="transition-all cursor-pointer hover:scale-110" />
              </button>
            </div> */}

            <div className="lg:flex lg:ml-[130px] gap-5 mt-[70px]  flex  md:hidden  sm:hidden">
              <div>
                <a
                  className="text-gray-400 hover:text-white "
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                    icon={faFacebook}
                  />
                </a>
              </div>
              <div>
                <a
                  className="text-gray-400 hover:text-white "
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                    icon={faYoutube}
                  />
                </a>
              </div>
              <div>
                <a
                  className="text-gray-400 hover:text-white "
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                    icon={faLinkedin}
                  />
                </a>
              </div>
            </div>
            <p className="text-white text-[12px] ml-[105px] mt-[60px]">
              Privacy Policy | Terms of use
            </p>
          </div>
          <div className="lg:mt-[80px] lg:ml-[100px]">
            <p className="font-semibold text-white lg:text-[20px]">
              WHO WE ARE
            </p>
            <p className="lg:text-[15px] text-gray-400 lg:mt-[20px]">
              An environmentally conscious renewable energy company
            </p>
            <p className="lg:text-[15px] text-gray-400">
              that offers the most eco-friendly, cost-efficient and high-
            </p>
            <p className="lg:text-[15px] text-gray-400">
              energy generating products and solutions on the solar
            </p>
            <p className="lg:text-[15px] text-gray-400">panels market!</p>
            <div className="flex gap-20 lg:mt-[35px]">
              <img
                className="transition-all hover:scale-110"
                src="asset 8.png"
              />
              <img
                className="transition-all hover:scale-110"
                src="asset 9.png"
              />
            </div>
            <p className="text-gray-400 text-[12px] ml-[-150px] mt-[40px]">
              {" "}
              Copyright ©2024{" "}
              <span className="text-white">Green Tech, Inc</span> All rights
              reserved. Green Tech and GT are trademarks of Green Tech, Inc.
            </p>
          </div>
        </div>
      </div>

      {/* middle screen */}

      <div className="lg:hidden md:block sm:hidden ">
        <div className="bg-green-400 lg:w-auto pb-[15px] pt-[15px] mt-[15px]  items-center">
          <nav className="flex items-center gap-14 ml-[15px] ">
            {["/", "/about", "/products", "/service", "/blog", "/contacts"].map(
              (path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `font-semibold text-lg duration-500 cursor-pointer ${
                      isActive ? "text-white" : "text-gray-900 hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              )
            )}
          </nav>
        </div>
        <div className="bg-gray-800 w-auto pt-[50px] h-[700px]">
          <p className="text-white  text-[23px] font-bold text-center">
            SIGN UP TODAY TO PAY LESS FOR YOUR ENERGY!
          </p>
          <p className="text-[14px] text-gray-400 mt-[10px] text-center">
            Each month we roll out special offers and discounts for our solar
            panels.
          </p>
          {/* <div className="pb-1 pl-2 bg-gray-700 border rounded-md w-[400px] h-[40px] ml-[160px]  mt-[45px] flex ">
            <input
              type="email"
              placeholder="Your e-mail"
              className=" bg-gray-700 outline-none rounded-md w-[500px] h-[35px] text-white  placeholder:text-[15px] "
            />
            <button className="p-3">
              <BsFillSendFill />
            </button>
          </div> */}

          <div className=" ml-[270px] flex gap-8 mt-[60px] ">
            <div>
              <a
                className="text-gray-400 hover:text-white "
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                  icon={faFacebook}
                />
              </a>
            </div>
            <div>
              <a
                className="text-gray-400 hover:text-white "
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                  icon={faYoutube}
                />
              </a>
            </div>
            <div>
              <a
                className="text-gray-400 hover:text-white "
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>

          <p className="text-white ml-[270px] font-bold text-[23px] mt-[50px]">
            WHO WE ARE
          </p>

          <p className="mt-[20px] ml-[60px] text-gray-400">
            An environmentally conscious renewable energy company that offers
            the most eco-
          </p>
          <p className="ml-[65px] text-gray-400">
            friendly, cost-efficient and high-energy generating products and
            solutions on the
          </p>
          <p className="ml-[270px] text-gray-400">solar panels market!</p>

          <div className="flex gap-20 ml-[180px] mt-[60px]">
            <img className="transition-all hover:scale-110" src="asset 8.png" />
            <img className="transition-all hover:scale-110" src="asset 9.png" />
          </div>
          <p className="text-gray-400 text-[12px] ml-[110px] mt-[60px]">
            {" "}
            <span className="text-white">
              Privacy Policy | Terms of use
            </span>{" "}
            Copyright ©2024 <span className="text-white">Green Tech, Inc</span>{" "}
            All rights reserved. Green Tech
          </p>
          <p className="text-gray-400 text-[12px] ml-[230px]">
            and GT are trademarks of Green Tech, Inc.
          </p>
        </div>
      </div>

      {/* small screen */}

      <div className="lg:hidden md:hidden sm:block ">
        <div className="bg-green-400 lg:w-auto lg:h-full pb-[15px] pt-[15px] mt-[15px]  items-center">
          <nav className="lg:ml-[300px] flex flex-col items-center gap-5">
            {["/", "/about", "/products", "/service", "/blog", "/contacts"].map(
              (path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `font-semibold text-lg duration-500 cursor-pointer ${
                      isActive ? "text-white" : "text-gray-900 hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              )
            )}
          </nav>
        </div>
        <div className="bg-gray-800 w-auto pt-[50px] h-[800px]">
          <p className="text-white  text-[23px] font-bold text-center">
            SIGN UP TODAY TO PAY LESS FOR YOUR ENERGY!
          </p>
          <p className="text-[14px] text-gray-400 mt-[10px] text-center">
            Each month we roll out special offers and discounts for our solar
            panels.
          </p>
          {/* <div className="pb-1 pl-2 bg-gray-700 border rounded-md w-[350px] h-[40px] ml-[15px]  mt-[45px] flex ">
            <input
              type="email"
              placeholder="Your e-mail"
              className=" bg-gray-700 outline-none rounded-md w-[350px] h-[35px] text-white  placeholder:text-[15px] "
            />
            <button className="p-3">
              <BsFillSendFill />
            </button>
          </div> */}

          <div className=" ml-[120px] flex gap-8 mt-[60px] ">
            <div>
              <a
                className="text-gray-400 hover:text-white "
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                  icon={faFacebook}
                />
              </a>
            </div>
            <div>
              <a
                className="text-gray-400 hover:text-white "
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                  icon={faYoutube}
                />
              </a>
            </div>
            <div>
              <a
                className="text-gray-400 hover:text-white "
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[30px] h-[30px] lg:transition-all cursor-pointer hover:scale-110"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>

          <p className="text-white ml-[110px] font-bold text-[23px] mt-[50px]">
            WHO WE ARE
          </p>

          <p className="text-[13px] text-gray-400 text-center p-4">
            An environmentally conscious renewable energy company that offers
            the most eco- friendly, cost-efficient and high-energy generating
            products and solutions on the solar panels market!
          </p>

          <div className="flex gap-16 ml-[40px] mt-[40px]">
            <img className="transition-all hover:scale-110" src="asset 8.png" />
            <img className="transition-all hover:scale-110" src="asset 9.png" />
          </div>
          <p className="text-gray-400 text-[9px]  text-center mt-[80px]">
            {" "}
            <span className="text-white">
              Privacy Policy | Terms of use
            </span>{" "}
            Copyright ©2024 <span className="text-white">Green Tech, Inc</span>{" "}
            All rights reserved. Green Tech
          </p>
          <p className="text-gray-400 text-[12px] ml-[0px] text-center">
            and GT are trademarks of Green Tech, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Last;
