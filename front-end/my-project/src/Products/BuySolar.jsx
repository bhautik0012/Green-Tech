// create blog page

import React from "react";
import { NavLink } from "react-router-dom";

function BuySolar() {
  return (
    <div>
      <div className="lg:block md:hidden sm:hidden">
        <div className="w-auto bg-cover  text-white bg-center h-[500px] bg-start">
          <p className="text-[30px] ml-[170px] pt-[100px] font-bold">
            UK to start building solar paneled roads
          </p>
          <p className="text-[12px] ml-[170px] mt-[25px]">
            The UK government proved once again that it’s not that conservative.
            By accepting the
          </p>
          <p className="text-[12px] ml-[170px]">
            progressive renewable energy industry, the government planned few
            new highways across
          </p>
          <p className="text-[12px] ml-[170px]">
            the Britain to be equipped with built-in solar panels. That plan
            started with a...
          </p>
          <div className="mt-[60px] ml-[170px]">
            <NavLink to="/Read">
              <button className="pt-2 pb-2 pl-12 border-transparent hover:border-white hover:shadow-md hover:shadow-black pr-12 border rounded-3xl text-[14px] bg-green-500 text-white hover:text-green-500 hover:bg-white duration-500 hover:translate-x-1">
                𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
              </button>
            </NavLink>
          </div>
        </div>
        <p className="text-[25px] ml-[190px] mt-[15px] ">𝐋𝐚𝐭𝐞𝐬𝐭 𝐀𝐫𝐭𝐢𝐜𝐥𝐞𝐬 𝐎𝐧</p>
        <hr className="w-[1170px] ml-[140px] mt-[15px] border-2" />

        {/* details flex  */}
        <div className="flex gap-24">
          <NavLink to="/Click1" >
            <div className="ml-[220px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog1.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝟔.𝟓𝟓 𝐌𝐖 𝐒𝐨𝐥𝐚𝐫 𝐏𝐨𝐰𝐞𝐫 𝐏𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click2">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog2.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝟑.𝟐𝟕 𝐬𝐨𝐥𝐚𝐫 𝐩𝐨𝐰𝐞𝐫 𝐩𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click3">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog3.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐑𝐨𝐨𝐟𝐭𝐨𝐩 𝐬𝐨𝐥𝐚𝐫 𝐩𝐚𝐧𝐞𝐥𝐬
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* second details  */}

        <div className="flex gap-24">
          <NavLink to="/Click4">
            <div className="ml-[220px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog4.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫 𝐬𝐭𝐫𝐞𝐞𝐭 𝐥𝐢𝐠𝐡𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click5">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog5.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫 𝐂𝐚𝐫𝐩𝐨𝐫𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click6">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog6.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫 𝐭𝐫𝐚𝐜𝐤𝐞𝐫 𝐩𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* third details  */}

        <div className="flex gap-24">
          <NavLink to="/Click7">
            <div className="ml-[220px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog7.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐬𝐨𝐥𝐚𝐫 𝐡𝐞𝐚𝐭𝐢𝐧𝐠 𝐩𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click8">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog8.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫-𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐨𝐚𝐭𝐬
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click9">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog9.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫𝐏𝐫𝐨 𝟑𝟎𝟎𝐖
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* middle screen  */}
      <div className="md:block sm:hidden lg:hidden">
        <div className="w-auto bg-cover  text-white bg-center h-[500px] bg-start">
          <p className="text-[30px] ml-[50px] pt-[150px] font-bold">
            UK to start building solar paneled roads
          </p>
          <p className="text-[13px] ml-[50px] mt-[25px]">
            The UK government proved once again that it’s not that conservative.
            By accepting the
          </p>
          <p className="text-[13px] ml-[50px]">
            progressive renewable energy industry, the government planned few
            new highways across
          </p>
          <p className="text-[13px] ml-[50px]">
            the Britain to be equipped with built-in solar panels. That plan
            started with a...
          </p>
          <div className="mt-[60px] ml-[50px]">
            <NavLink to="/Read">
              <button className="pt-2 pb-2 pl-12 border-transparent hover:border-white hover:shadow-md hover:shadow-black pr-12 border rounded-3xl text-[14px] bg-green-500 text-white hover:text-green-500 hover:bg-white duration-500 hover:translate-x-1">
                𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
              </button>
            </NavLink>
          </div>
        </div>

        <p className="text-[25px] ml-[40px] mt-[15px] ">𝐋𝐚𝐭𝐞𝐬𝐭 𝐀𝐫𝐭𝐢𝐜𝐥𝐞𝐬 𝐎𝐧</p>
        <hr className="w-[720px] ml-[25px] mt-[15px] border-2" />

        {/* details flex  */}
        <div className="flex gap-14">
          <NavLink to="/Click1">
            <div className="ml-[45px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog1.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝟔.𝟓𝟓 𝐌𝐖 𝐒𝐨𝐥𝐚𝐫 𝐏𝐨𝐰𝐞𝐫 𝐏𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click2">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src=" public/Blog2.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝟑.𝟐𝟕 𝐬𝐨𝐥𝐚𝐫 𝐩𝐨𝐰𝐞𝐫 𝐩𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* second details  */}

        <div className="flex gap-14">
          <NavLink to="/Click3">
            <div className="ml-[45px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog3.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐑𝐨𝐨𝐟𝐭𝐨𝐩 𝐬𝐨𝐥𝐚𝐫 𝐩𝐚𝐧𝐞𝐥𝐬
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click4">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src=" public/Blog4.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫 𝐬𝐭𝐫𝐞𝐞𝐭 𝐥𝐢𝐠𝐡𝐭
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* third details  */}

        <div className="flex gap-14">
          <NavLink to="/Click5">
            <div className="ml-[45px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog5.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫 𝐂𝐚𝐫𝐩𝐨𝐫𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click6">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog6.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫 𝐭𝐫𝐚𝐜𝐤𝐞𝐫 𝐩𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* four details  */}

        <div className="flex gap-14">
          <NavLink to="/Click7">
            <div className="ml-[45px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog7.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐬𝐨𝐥𝐚𝐫 𝐡𝐞𝐚𝐭𝐢𝐧𝐠 𝐩𝐥𝐚𝐧𝐭
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Click8">
            <div className=" mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src=" public/Blog8.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫-𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐨𝐚𝐭𝐬
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* five details  */}

        <div className="flex gap-14">
          <NavLink to="/Click9">
            <div className="ml-[45px] mt-[50px]">
              <div className="border transition-all hover:scale-105 w-[300px] rounded-md  shadow-lg shadow-black  h-[285px]">
                <img
                  className="w-[340px] h-[240px] rounded-s-md "
                  src="public/Blog9.jpg"
                />
                <p className="text-[16px] ml-[20px] mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                  𝐒𝐨𝐥𝐚𝐫𝐏𝐫𝐨 𝟑𝟎𝟎𝐖
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* small screen  */}

      <div className="sm:block md:hidden lg:hidden">
        <div className="w-auto bg-cover  text-white bg-center h-[500px] bg-start">
          <p className="text-center text-[30px] pt-[80px]">
            𝐔𝐊 𝐭𝐨 𝐬𝐭𝐚𝐫𝐭 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐬𝐨𝐥𝐚𝐫 𝐩𝐚𝐧𝐞𝐥𝐞𝐝 𝐫𝐨𝐚𝐝𝐬
          </p>

          <p className="text-center text-[15px] mt-[25px]">
            The UK government proved once again that it’s not that conservative.
            By accepting the progressive renewable energy industry, the
            government planned few new highways across the Britain to be
            equipped with built-in solar panels. That plan started with a...
          </p>
          <div className="mt-[60px] ml-[110px]">
            <button className="pt-2 pb-2 pl-12 border-transparent hover:border-white hover:shadow-md hover:shadow-black pr-12 border rounded-3xl text-[14px] bg-green-500 text-white hover:text-green-500 hover:bg-white duration-500 hover:translate-x-1">
              𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
            </button>
          </div>
        </div>

        <p className="text-[25px] ml-[40px] mt-[15px] ">𝐋𝐚𝐭𝐞𝐬𝐭 𝐀𝐫𝐭𝐢𝐜𝐥𝐞𝐬 𝐎𝐧</p>
        <hr className="w-[380px] ml-[20px] mb-[50px] mt-[15px] border-2" />

        <NavLink to="/Click1">
          <div className="mt-[50px] p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog1.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝟔.𝟓𝟓 𝐌𝐖 𝐒𝐨𝐥𝐚𝐫 𝐏𝐨𝐰𝐞𝐫 𝐏𝐥𝐚𝐧𝐭
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click2">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog2.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐒𝐨𝐥𝐚𝐫𝐖𝐨𝐫𝐥𝐝 𝐒𝐖 𝟐𝟕𝟎 𝐁𝐥𝐚𝐜𝐤
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click3">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog3.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐑𝐨𝐨𝐟𝐭𝐨𝐩 𝐬𝐨𝐥𝐚𝐫 𝐩𝐚𝐧𝐞𝐥𝐬
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click4">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog4.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐒𝐨𝐥𝐚𝐫 𝐬𝐭𝐫𝐞𝐞𝐭 𝐥𝐢𝐠𝐡𝐭
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click5">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog5.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐒𝐨𝐥𝐚𝐫 𝐂𝐚𝐫𝐩𝐨𝐫𝐭
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click6">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog6.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐒𝐨𝐥𝐚𝐫 𝐭𝐫𝐚𝐜𝐤𝐞𝐫 𝐩𝐥𝐚𝐧𝐭
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click7">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog7.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐬𝐨𝐥𝐚𝐫 𝐡𝐞𝐚𝐭𝐢𝐧𝐠 𝐩𝐥𝐚𝐧𝐭
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click8">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src=" public/Blog8.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐒𝐨𝐥𝐚𝐫-𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐨𝐚𝐭𝐬
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Click9">
          <div className="p-7">
            <div className="border transition-all hover:scale-105 w-auto rounded-md  shadow-lg shadow-black  h-[285px]">
              <img
                className="h-[240px] w-[430px] rounded-s-md "
                src="public/Blog9.jpg"
              />
              <p className="text-[16px] text-center mt-[10px] cursor-pointer hover:text-green-400 duration-500">
                𝐒𝐨𝐥𝐚𝐫𝐏𝐫𝐨 𝟑𝟎𝟎𝐖
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default BuySolar;
