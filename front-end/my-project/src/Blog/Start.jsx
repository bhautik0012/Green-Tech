// create product page

import React from "react";
import { NavLink } from "react-router-dom";

function Start() {
  return (
    <div>
      <div className="lg:block sm:hidden md:hidden">
        <div className="w-auto h-[500px] bg-cover bg-center bg-Buy">
          <p className="font-bold  text-[35px] pt-[130px] pl-[150px]">
            𝐁𝐔𝐘 𝐀 <span className="text-green-500">𝐒𝐌𝐀𝐋𝐋 𝐒𝐎𝐋𝐀𝐑</span> 𝐏𝐀𝐍𝐄𝐋...
          </p>
          <p className=" text-[20px] pl-[150px] mt-[10px]">
            ...and get a 2nd one for free! Applicable till the end of the week
            only!
          </p>

          <NavLink to="/Buy">
            <button className="pt-2 pb-2 pl-10 pr-10 text-white duration-500 bg-green-500 border border-transparent hover:translate-x-1 rounded-3xl hover:bg-white hover:text-green-500 ml-[150px] mt-[50px]">
              𝐁𝐔𝐘 𝐍𝐎𝐖
            </button>
          </NavLink>
        </div>

        <p className="text-[25px] ml-[220px] mt-[15px] ">𝐁𝐑𝐎𝐖𝐒𝐄 𝐁𝐘</p>
        <hr className="w-[1150px] ml-[200px] mt-[15px] border-2" />

        {/* first row  */}

        <div className="flex gap-16 ml-[190px] mt-[60px]">
          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐀𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞𝐬 𝐨𝐟 𝐨𝐮𝐫 𝐬𝐨𝐥𝐚𝐫 𝐏𝐀𝐍𝐄𝐋𝐒</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>In short, our panels absorb the sun’s energy,</p>
                <p>then channelling it through discreetly placed</p>
                <p>wires to an inverter. There it is being converted</p>
                <p>to electricity which eventually powers ...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐁𝐫𝐢𝐧𝐠𝐢𝐧𝐠 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐬𝐨𝐥𝐚𝐫 𝐩𝐚𝐧𝐞𝐥𝐬 𝐢𝐟 𝐲𝐨𝐮’𝐫𝐞 𝐦𝐨𝐯𝐢𝐧𝐠?</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Moving to another location while being an</p>
                <p>owner of the solar panel, can seem a tricky</p>
                <p>business. But first thing you’ll need to do...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m3 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>
                𝟓 𝐡𝐨𝐮𝐬𝐞𝐡𝐨𝐥𝐝 𝐚𝐩𝐩𝐥𝐢𝐚𝐧𝐜𝐞𝐬 𝐰𝐡𝐢𝐜𝐡 𝐞𝐧𝐞𝐫𝐠𝐲 𝐜𝐨𝐧𝐬𝐮𝐦𝐩𝐭𝐢𝐨𝐧 𝐜𝐚𝐧 𝐞𝐚𝐬𝐢𝐥𝐲 𝐛𝐞
                𝐫𝐞𝐝𝐮𝐜𝐞𝐝
              </p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Even with renewable energy being much</p>
                <p>cheaper, than the regular electricity, it’s always</p>
                <p>nice to cut the end price even more ...</p>
              </div>
            </div>
          </div>
        </div>

        {/* second row  */}

        <div className="flex gap-16 ml-[190px] mt-[50px]">
          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m4 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐂𝐨𝐮𝐧𝐭𝐝𝐨𝐰𝐧 𝐭𝐨 𝐜𝐥𝐢𝐦𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐚𝐥𝐤𝐬 𝐢𝐧 𝐏𝐚𝐫𝐢𝐬</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Summer is getting closer day by day and so is</p>
                <p>the crucial United Nations Framework</p>
                <p>Convention on Climate Change (UNFCCC)...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐓𝐮𝐫𝐧𝐢𝐧𝐠 𝐋𝐨𝐰 - 𝐈𝐧𝐜𝐨𝐦𝐞 𝐍𝐞𝐢𝐠𝐡𝐛𝐨𝐫𝐡𝐨𝐨𝐝𝐬 𝐭𝐨 𝐒𝐨𝐥𝐚𝐫 𝐏𝐨𝐰𝐞𝐫</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>In Northeast Washington, D.C., neighborhood</p>
                <p>where you can still get a house for less than</p>
                <p>$100,000, one owner recently gave his ...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐂𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝐦𝐨𝐫𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐮𝐧</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Light from the sun is our most abundant source</p>
                <p>of renewable energy, and learning how best to</p>
                <p>harvest this radiation is key for the world’s</p>
                <p>power needs. Researchers at ...</p>
              </div>
            </div>
          </div>
        </div>

        {/* third row  */}

        <div className="flex gap-16 ml-[190px] mt-[50px]">
          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐒𝐓𝐎𝐑𝐈𝐍𝐆 𝐒𝐎𝐋𝐀𝐑 𝐄𝐍𝐄𝐑𝐆𝐘</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Solar energy can be stored by converting it into</p>
                <p>hydrogen. But current methods are too</p>
                <p>expensive and don't last long. Using</p>
                <p>commercially available solar cells and none...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>
                𝐒𝐨𝐥𝐚𝐫 𝐂𝐞𝐥𝐥 𝐈𝐬 𝐌𝐨𝐫𝐞 𝐄𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐭, 𝐂𝐨𝐬𝐭𝐬 𝐋𝐞𝐬𝐬 𝐓𝐡𝐚𝐧 𝐈𝐭𝐬 𝐂𝐨𝐮𝐧𝐭𝐞𝐫𝐩𝐚𝐫𝐭𝐬
              </p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>A team of researchers has developed a new</p>
                <p>solar cell that combines two different layers of</p>
                <p>sunlight-absorbing material to harvest a ...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m3 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[15px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐄𝐮𝐫𝐨𝐩𝐞'𝐬 𝐋𝐚𝐫𝐠𝐞𝐬𝐭 𝐒𝐨𝐥𝐚𝐫 𝐅𝐚𝐫𝐦 𝐏𝐨𝐰𝐞𝐫𝐬 𝐔𝐩</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>More than 23,000 solar photovoltaic panels</p>
                <p>located near the Queen Elizabeth II reservoir</p>
                <p>woutside of London are powered up to ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle screen  */}

      <div className=" md:block lg:hidden sm:hidden">
        <div className="w-auto h-[500px] bg-cover bg-center bg-Buy">
          <p className="font-bold  text-[35px] pt-[130px] pl-[30px]">
            𝐁𝐔𝐘 𝐀 <span className="text-green-500">𝐒𝐌𝐀𝐋𝐋 𝐒𝐎𝐋𝐀𝐑</span> 𝐏𝐀𝐍𝐄𝐋...
          </p>
          <p className=" text-[20px] pl-[30px] mt-[10px]">
            ...and get a 2nd one for free! Applicable till the end of the week
            only!
          </p>

          <NavLink to="/Buy">
            <button className="pt-2 pb-2 pl-10 pr-10 text-white duration-500 bg-green-500 border border-transparent hover:translate-x-1 rounded-3xl hover:bg-white hover:text-green-500 ml-[30px] mt-[50px]">
              𝐁𝐔𝐘 𝐍𝐎𝐖
            </button>
          </NavLink>
        </div>

        <p className="text-[25px] ml-[40px] mt-[15px] ">𝐁𝐑𝐎𝐖𝐒𝐄 𝐁𝐘</p>
        <hr className="w-[350px] ml-[25px] mt-[15px] border-2" />

        {/* first row  */}

        <div className="flex gap-12 ml-[40px] mt-[40px]">
          <div className="w-[300px] border rounded-md    border-transparent shadow-black shadow-lg">
            <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[300px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐀𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞𝐬 𝐨𝐟 𝐨𝐮𝐫 𝐬𝐨𝐥𝐚𝐫 𝐏𝐀𝐍𝐄𝐋𝐒</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>In short, our panels absorb the sun’s energy,</p>
                <p>then channelling it through discreetly placed</p>
                <p>wires to an inverter. There it is being converted</p>
                <p>to electricity which eventually powers ...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐁𝐫𝐢𝐧𝐠𝐢𝐧𝐠 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐬𝐨𝐥𝐚𝐫 𝐩𝐚𝐧𝐞𝐥𝐬 𝐢𝐟 𝐲𝐨𝐮’𝐫𝐞 𝐦𝐨𝐯𝐢𝐧𝐠?</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Moving to another location while being an</p>
                <p>owner of the solar panel, can seem a tricky</p>
                <p>business. But first thing you’ll need to do...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-12 ml-[40px] mt-[40px]">
          <div className="w-[300px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m3 bg-center rounded-t-md bg-cover w-[300px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>
                {" "}
                𝟓 𝐡𝐨𝐮𝐬𝐞𝐡𝐨𝐥𝐝 𝐚𝐩𝐩𝐥𝐢𝐚𝐧𝐜𝐞𝐬 𝐰𝐡𝐢𝐜𝐡 𝐞𝐧𝐞𝐫𝐠𝐲 𝐜𝐨𝐧𝐬𝐮𝐦𝐩𝐭𝐢𝐨𝐧 𝐜𝐚𝐧 𝐞𝐚𝐬𝐢𝐥𝐲 𝐛𝐞
                𝐫𝐞𝐝𝐮𝐜𝐞𝐝
              </p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Even with renewable energy being much</p>
                <p>cheaper, than the regular electricity, it’s always</p>
                <p>nice to cut the end price even more ...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m4 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐂𝐨𝐮𝐧𝐭𝐝𝐨𝐰𝐧 𝐭𝐨 𝐜𝐥𝐢𝐦𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐚𝐥𝐤𝐬 𝐢𝐧 𝐏𝐚𝐫𝐢𝐬</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Summer is getting closer day by day and so is</p>
                <p>the crucial United Nations Framework</p>
                <p>Convention on Climate Change (UNFCCC)...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-12 ml-[40px] mt-[40px]">
          <div className="w-[300px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[300px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐓𝐮𝐫𝐧𝐢𝐧𝐠 𝐋𝐨𝐰 - 𝐈𝐧𝐜𝐨𝐦𝐞 𝐍𝐞𝐢𝐠𝐡𝐛𝐨𝐫𝐡𝐨𝐨𝐝𝐬 𝐭𝐨 𝐒𝐨𝐥𝐚𝐫 𝐏𝐨𝐰𝐞𝐫</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>In Northeast Washington, D.C., neighborhood</p>
                <p>where you can still get a house for less than</p>
                <p>$100,000, one owner recently gave his ...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐂𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝐦𝐨𝐫𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐮𝐧</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Light from the sun is our most abundant source</p>
                <p>of renewable energy, and learning how best to</p>
                <p>harvest this radiation is key for the world’s</p>
                <p>power needs. Researchers at ...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-12 ml-[40px] mt-[40px]">
          <div className="w-[300px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[300px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐒𝐓𝐎𝐑𝐈𝐍𝐆 𝐒𝐎𝐋𝐀𝐑 𝐄𝐍𝐄𝐑𝐆𝐘</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>Solar energy can be stored by converting it into</p>
                <p>hydrogen. But current methods are too</p>
                <p>expensive and don't last long. Using</p>
                <p>commercially available solar cells and none...</p>
              </div>
            </div>
          </div>

          <div className="w-[320px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[320px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>
                {" "}
                𝐒𝐨𝐥𝐚𝐫 𝐂𝐞𝐥𝐥 𝐈𝐬 𝐌𝐨𝐫𝐞 𝐄𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐭, 𝐂𝐨𝐬𝐭𝐬 𝐋𝐞𝐬𝐬 𝐓𝐡𝐚𝐧 𝐈𝐭𝐬 𝐂𝐨𝐮𝐧𝐭𝐞𝐫𝐩𝐚𝐫𝐭𝐬
              </p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>A team of researchers has developed a new</p>
                <p>solar cell that combines two different layers of</p>
                <p>sunlight-absorbing material to harvest a ...</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" ml-[205px] mb-[60px] mt-[40px]">
          <div className="w-[300px] border rounded-md border-transparent shadow-black shadow-lg">
            <div className=" bg-m3 bg-center rounded-t-md bg-cover w-[300px] h-[220px]">
              <button className="pt-[2px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="p-5">
              <p>𝐄𝐮𝐫𝐨𝐩𝐞'𝐬 𝐋𝐚𝐫𝐠𝐞𝐬𝐭 𝐒𝐨𝐥𝐚𝐫 𝐅𝐚𝐫𝐦 𝐏𝐨𝐰𝐞𝐫𝐬 𝐔𝐩</p>
              <div className="text-gray-400 text-[13px] mt-[13px] mb-[15px]">
                <p>More than 23,000 solar photovoltaic panels</p>
                <p>located near the Queen Elizabeth II reservoir</p>
                <p>woutside of London are powered up to ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small screen  */}

      <div className="sm:block md:hidden lg:hidden">
        <div className="w-auto h-[500px] bg-cover bg-center bg-Buy">
          <p className="font-bold  text-[28px] pt-[150px] text-center ">
            𝐁𝐔𝐘 𝐀 <span className="text-green-500">𝐒𝐌𝐀𝐋𝐋 𝐒𝐎𝐋𝐀𝐑</span> 𝐏𝐀𝐍𝐄𝐋...
          </p>
          <p className=" text-[22px] text-center mt-[10px]">
            ...and get a 2nd one for free! Applicable till the end of the week
            only!
          </p>

          <NavLink to="/Buy">
            <button className="pt-2 pb-2 pl-10 pr-10 text-white duration-500 bg-green-500 border border-transparent hover:translate-x-1 rounded-3xl hover:bg-white hover:text-green-500 ml-[130px] mt-[50px]">
              𝐁𝐔𝐘 𝐍𝐎𝐖
            </button>
          </NavLink>
        </div>

        <p className="text-[25px] ml-[40px] mt-[15px] ">𝐋𝐚𝐭𝐞𝐬𝐭 𝐀𝐫𝐭𝐢𝐜𝐥𝐞𝐬 𝐎𝐧</p>
        <hr className="w-[350px] ml-[30px] mt-[15px] border-2" />

        <div>
          <div className="w-[360px] border rounded-md    border-transparent shadow-black shadow-lg  ml-[15px]">
            <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
              <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
                Solar
              </button>
            </div>
            <div className="text-center mt-[20px] mb-[30px]">
              <p className="text-[20px]">𝐀𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞𝐬 𝐨𝐟 𝐨𝐮𝐫 𝐬𝐨𝐥𝐚𝐫 𝐏𝐀𝐍𝐄𝐋𝐒</p>
              <div className="text-gray-400 text-[16px] mt-[15px] mb-[15px]">
                <p className="p-3 text-center">
                  In short, our panels absorb the sun’s energy, then channelling
                  it through discreetly placed wires to an inverter. There it is
                  being converted to electricity which eventually powers ...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[360px] border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">
              𝐁𝐫𝐢𝐧𝐠𝐢𝐧𝐠 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐬𝐨𝐥𝐚𝐫 𝐩𝐚𝐧𝐞𝐥𝐬 𝐢𝐟 𝐲𝐨𝐮’𝐫𝐞 𝐦𝐨𝐯𝐢𝐧𝐠?
            </p>
            <div className="text-gray-400 text-[16px] mt-[15px] mb-[15px]">
              <p className="text-center">
                Moving to another location while being an owner of the solar
                panel, can seem a tricky business. But first thing you’ll need
                to do...
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m3 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">
              𝟓 𝐡𝐨𝐮𝐬𝐞𝐡𝐨𝐥𝐝 𝐚𝐩𝐩𝐥𝐢𝐚𝐧𝐜𝐞𝐬 𝐰𝐡𝐢𝐜𝐡 𝐞𝐧𝐞𝐫𝐠𝐲 𝐜𝐨𝐧𝐬𝐮𝐦𝐩𝐭𝐢𝐨𝐧 𝐜𝐚𝐧 𝐞𝐚𝐬𝐢𝐥𝐲 𝐛𝐞
              𝐫𝐞𝐝𝐮𝐜𝐞𝐝
            </p>
            <div className="text-gray-400 text-center text-[16px] mt-[15px] mb-[15px]">
              <p>
                Even with renewable energy being much cheaper, than the regular
                electricity, it’s always nice to cut the end price even more ...
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m4 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">
              𝐂𝐨𝐮𝐧𝐭𝐝𝐨𝐰𝐧 𝐭𝐨 𝐜𝐥𝐢𝐦𝐚𝐭𝐞 𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐚𝐥𝐤𝐬 𝐢𝐧 𝐏𝐚𝐫𝐢𝐬
            </p>
            <div className="text-gray-400 text-center text-[16px] mt-[15px] mb-[15px]">
              <p>
                Summer is getting closer day by day and so is the crucial United
                Nations Framework Convention on Climate Change (UNFCCC)...
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">
              𝐓𝐮𝐫𝐧𝐢𝐧𝐠 𝐋𝐨𝐰 - 𝐈𝐧𝐜𝐨𝐦𝐞 𝐍𝐞𝐢𝐠𝐡𝐛𝐨𝐫𝐡𝐨𝐨𝐝𝐬 𝐭𝐨 𝐒𝐨𝐥𝐚𝐫 𝐏𝐨𝐰𝐞𝐫
            </p>
            <div className="text-gray-400 text-center text-[16px] mt-[15px] mb-[15px]">
              <p>
                In Northeast Washington, D.C., neighborhood where you can still
                get a house for less than $100,000, one owner recently gave his
                ...
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">𝐂𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝐦𝐨𝐫𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐮𝐧</p>
            <div className="text-gray-400 text-center text-[16px] mt-[15px] mb-[15px]">
              <p>
                Light from the sun is our most abundant source of renewable
                energy, and learning how best to harvest this radiation is key
                for the world’s future power needs. Researchers at ...
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m1 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">𝐒𝐓𝐎𝐑𝐈𝐍𝐆 𝐒𝐎𝐋𝐀𝐑 𝐄𝐍𝐄𝐑𝐆𝐘</p>
            <div className="text-gray-400 text-center text-[16px] mt-[15px] mb-[15px]">
              <p>
                Solar energy can be stored by converting it into hydrogen. But
                current methods are too expensive and don't last long. Using
                commercially available solar cells and none...
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m2 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">
              𝐒𝐨𝐥𝐚𝐫 𝐂𝐞𝐥𝐥 𝐈𝐬 𝐌𝐨𝐫𝐞 𝐄𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐭, 𝐂𝐨𝐬𝐭𝐬 𝐋𝐞𝐬𝐬 𝐓𝐡𝐚𝐧 𝐈𝐭𝐬 𝐂𝐨𝐮𝐧𝐭𝐞𝐫𝐩𝐚𝐫𝐭𝐬
            </p>
            <div className="text-gray-400 text-center text-[16px] mt-[15px] mb-[15px]">
              <p>
                A team of researchers has developed a new solar cell that
                combines two different layers of sunlight-absorbing material to
                harvest a ...
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] mb-[80px]  border rounded-md mt-[50px] border-transparent shadow-black shadow-lg  ml-[15px]">
          <div className=" bg-m3 bg-center rounded-t-md bg-cover w-[360px]  h-[220px] pt-[15px]">
            <button className="pt-[1px] m-3 pb-[2px] pl-5 pr-5 text-[13px] bg-green-400 border border-transparent rounded-md font-semibold text-white">
              Solar
            </button>
          </div>
          <div className="text-center mt-[20px] mb-[30px]">
            <p className="text-[20px]">𝐄𝐮𝐫𝐨𝐩𝐞'𝐬 𝐋𝐚𝐫𝐠𝐞𝐬𝐭 𝐒𝐨𝐥𝐚𝐫 𝐅𝐚𝐫𝐦 𝐏𝐨𝐰𝐞𝐫𝐬 𝐔𝐩</p>
            <div className="text-gray-400 text-center text-[16px] mt-[15px] mb-[15px]">
              <p>
                More than 23,000 solar photovoltaic panels located near the
                Queen Elizabeth II reservoir outside of London are powered up to
                ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
