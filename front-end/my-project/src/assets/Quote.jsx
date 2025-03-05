import React from "react";
import { NavLink } from "react-router-dom";

function Quote() {
  return (
    <div>
      <div className="lg:block sm:hidden md:hidden">
        <div className="w-auto h-[500px] bg-cover text-center bg-center bg-Quote ">
          <p className="text-[35px] text-white pl-[200px] pr-[200px] pt-[130px]">
            𝐎𝐔𝐑 𝐂𝐎𝐕𝐄𝐑𝐀𝐆𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐈𝐍 𝐓𝐇𝐄 𝐈𝐍𝐃𝐔𝐒𝐓𝐑𝐘, 𝐖𝐈𝐓𝐇 𝐑𝐄𝐏𝐀𝐈𝐑𝐒 𝐀𝐍𝐃
            𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐈𝐎𝐍 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄 𝐀𝐓 𝐍𝐎 𝐀𝐃𝐃𝐈𝐓𝐈𝐎𝐍𝐀𝐋 𝐂𝐇𝐀𝐑𝐆𝐄
          </p>
          <NavLink to="/Contacts">
          <button className="pt-3 pb-3 border border-transparent border-black pl-9 pr-9 rounded-3xl  ml-[-30px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
            GET A QUOTE
          </button>
          </NavLink>
        </div>
      </div>

      {/* middle screen  */}

      <div className="md:block lg:hidden sm:hidden">
        <div className="w-auto h-[550px] bg-cover text-center bg-center bg-Quote ">
          <p className="text-[35px] text-white pl-[20px] pr-[20px] pt-[130px]">
            𝐎𝐔𝐑 𝐂𝐎𝐕𝐄𝐑𝐀𝐆𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐈𝐍 𝐓𝐇𝐄 𝐈𝐍𝐃𝐔𝐒𝐓𝐑𝐘, 𝐖𝐈𝐓𝐇 𝐑𝐄𝐏𝐀𝐈𝐑𝐒 𝐀𝐍𝐃
            𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐈𝐎𝐍 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄 𝐀𝐓 𝐍𝐎 𝐀𝐃𝐃𝐈𝐓𝐈𝐎𝐍𝐀𝐋 𝐂𝐇𝐀𝐑𝐆𝐄
          </p>
          <NavLink to="/Contacts">
          <button className="pt-3 pb-3 border border-transparent border-black pl-8 pr-8 rounded-3xl  ml-[-30px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
            GET A QUOTE
          </button>
          </NavLink>
        </div>
      </div>

      {/* small screen  */}

      <div className="md:hidden lg:hidden sm:block">
        <div className="w-auto h-[500px] bg-cover text-center bg-center bg-Quote ">
          <p className="text-[25px] text-white text-center pt-[140px]">
            𝐎𝐔𝐑 𝐂𝐎𝐕𝐄𝐑𝐀𝐆𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐈𝐍 𝐓𝐇𝐄 𝐈𝐍𝐃𝐔𝐒𝐓𝐑𝐘, 𝐖𝐈𝐓𝐇 𝐑𝐄𝐏𝐀𝐈𝐑𝐒 𝐀𝐍𝐃
            𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐈𝐎𝐍 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄 𝐀𝐓 𝐍𝐎 𝐀𝐃𝐃𝐈𝐓𝐈𝐎𝐍𝐀𝐋 𝐂𝐇𝐀𝐑𝐆𝐄
          </p>
         <NavLink to="/Contacts">
         <button className="pt-3 pb-3 border border-transparent border-black pl-8 pr-8 rounded-3xl  ml-[-30px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
            GET A QUOTE
          </button>
         </NavLink>
        </div>
      </div>

      {/* white image  */}

      
    </div>
  );
}

export default Quote;
