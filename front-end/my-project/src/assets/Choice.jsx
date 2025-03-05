import React from "react";
import { NavLink } from "react-router-dom";

function Choice() {
  return (
    <div>
      <div>
        <div className="lg:block md:hidden sm:hidden">
          <div className="bg-center bg-cover w-auto h-[500px] bg-White">
            <p className="text-[30px] pt-[130px] ml-[230px]">
              𝐖𝐡𝐲 <span className="text-green-400 ">𝐆𝐫𝐞𝐞𝐧</span>𝐓𝐞𝐜𝐡?
            </p>
            <div className="text-gray-500 mt-[20px] ml-[230px]">
              <p>After years of experience and more than 500, 000 people</p>
              <p>powered with the help of our solar panels, we think the</p>
              <p>choice is really obvious here!</p>
            </div>
            <div className="mt-[50px] ml-[230px]">
              <NavLink to="/About">
              <button className="pt-2 pb-2 pl-12   hover:shadow-md hover:shadow-black pr-12 border rounded-3xl text-[14px]  text-green-400 border-green-400 hover:text-white hover:bg-green-400  duration-500 hover:translate-x-1">
                𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
              </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* middle screen  */}

        <div className="lg:hidden md:block sm:hidden">
          <div className="bg-center bg-cover w-auto h-[500px] bg-White">
            <p className="text-[30px] pt-[130px] ml-[230px]">
              𝐖𝐡𝐲 <span className="text-green-400 ">𝐆𝐫𝐞𝐞𝐧</span>𝐓𝐞𝐜𝐡?
            </p>
            <div className="text-gray-600 mt-[20px] ml-[230px]">
              <p>After years of experience and more than 500, 000 people</p>
              <p>powered with the help of our solar panels, we think the</p>
              <p>choice is really obvious here!</p>
            </div>
            <div className="mt-[50px] ml-[230px]">
              <NavLink to="/About">
              <button className="pt-2 pb-2 pl-12  hover:shadow-md hover:shadow-black pr-12 border rounded-3xl text-[14px]  text-green-400 border-green-400 hover:text-white hover:bg-green-400  duration-500 hover:translate-x-1">
                𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
              </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* small screen  */}

        <div className="lg:hidden md:hidden sm:block">
          <div className="bg-center bg-cover w-auto h-[500px] bg-White">
            <p className="text-[30px] pt-[130px] ml-[90px]">
              𝐖𝐡𝐲 <span className="text-green-400 ">𝐆𝐫𝐞𝐞𝐧</span>𝐓𝐞𝐜𝐡?
            </p>
            <div className="text-gray-500 mt-[20px] ml-[90px]">
              <p>After years of experience and more than 500, 000 people</p>
              <p>powered with the help of our solar panels, we think the</p>
              <p>choice is really obvious here!</p>
            </div>
            <div className="mt-[50px] ml-[90px]">
             <NavLink to="/About">
             <button className="pt-2 pb-2 pl-12   hover:shadow-md hover:shadow-black pr-12 border rounded-3xl text-[14px]  text-green-400 border-green-400 hover:text-white hover:bg-green-400  duration-500 hover:translate-x-1">
                𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
              </button>
             </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choice;
