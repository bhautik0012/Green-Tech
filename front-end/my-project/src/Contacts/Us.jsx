import React from "react";

function Us() {
  return (
    <div>
      <div className="lg:block md:hidden sm:hidden">
        <div>
          <p className="text-[30px] text-center mt-[130px]">𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒 𝐔𝐒</p>
        </div>
        <div className="lg:flex lg:ml-[200px] mb-[-59px]">
          <div className="border border-s-transparent p-14">
            <div className="flex">
              <div>
                <img
                  className="w-[210px] h-[150px] rounded-md"
                  src="public/Contact1.jpg"
                />
              </div>
              <div className="ml-[40px]">
                <p>𝐇𝐐 𝐎𝐟𝐟𝐢𝐜𝐞 (𝐁𝐨𝐬𝐭𝐨𝐧, 𝐌𝐀, 𝐔𝐒𝐀)</p>
                <p className="text-gray-400 text-[12px] mt-[10px]">
                  8949 Kenamar Drive, Suite 101
                </p>
                <p className="text-gray-400 text-[12px]">Boston, MA 92121</p>
                <p className="text-[14px] font-semibold mt-[20px]">
                  Phone:{" "}
                  <span className="text-gray-400 text-[13px] ml-[40px]">
                    555-376-7872
                  </span>
                </p>
                <p className="text-[14px] font-semibold">
                  Fax:{" "}
                  <span className="text-gray-400 text-[13px] ml-[59px]">
                    555-376-7873
                  </span>
                </p>
              </div>
            </div>

            <div className="flex mt-[40px]">
              <div>
                <img
                  className="w-[210px] h-[150px] rounded-md"
                  src="public/Contact2.jpg"
                />
              </div>
              <div className="ml-[40px]">
                <p>𝐓𝐨𝐫𝐨𝐧𝐭𝐨 𝐎𝐟𝐟𝐢𝐜𝐞</p>
                <p className="text-gray-400 text-[12px] mt-[10px]">
                  2000 Finch Avenue West
                </p>
                <p className="text-gray-400 text-[12px]">
                  Toronto, Ontario M3J 2V5
                </p>
                <p className="text-[14px] font-semibold mt-[20px]">
                  Phone:{" "}
                  <span className="text-gray-400 text-[13px] ml-[40px]">
                    555-376-7872
                  </span>
                </p>
                <p className="text-[14px] font-semibold">
                  Fax:{" "}
                  <span className="text-gray-400 text-[13px] ml-[59px]">
                    555-376-7873
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="border ml-[0px] border-e-transparent  p-14">
            <p className="text-center ml-[30px]">
              𝐆𝐄𝐓 𝐀 𝐏𝐑𝐈𝐂𝐈𝐍𝐆 𝐐𝐔𝐎𝐓𝐄 𝐅𝐎𝐑 𝐀 𝐑𝐄𝐒𝐈𝐃𝐄𝐍𝐓𝐈𝐀𝐋 𝐎𝐑 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒 𝐎𝐑
            </p>
            <p className="text-center">𝐒𝐎𝐋𝐀𝐑 𝐏𝐀𝐍𝐄𝐋 𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐀𝐓𝐈𝐎𝐍</p>

            <form>
              <div className="ml-[80px]">
                <input
                  type="text"
                  placeholder="your name"
                  className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 pb-1 italic text-[14px] mt-[40px] border-gray-500 w-[340px] outline-none"
                  required
                />
                <br />
                <input
                  type="email"
                  placeholder="email"
                  className="border text-gray-500 pl-2 pt-1 rounded-md mt-[15px] bg-gray-200 pb-1 italic text-[14px] border-gray-500 w-[340px] outline-none"
                  required
                />
                <br />
                <input
                  type="number"
                  placeholder="number"
                  className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[340px] outline-none"
                  required
                />
                <br />

                <select className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[340px] outline-none">
                  <option>
                    Do you need a residental or commercial system?
                  </option>
                  <option>Residental system</option>
                  <option>Commercial system</option>
                </select>
                <br />

                <select className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[340px] outline-none">
                  <option>What is your average electricity bill?</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                </select>
              </div>
              <div className="mt-[60px] ml-[160px]">
                <button
                  type="submit"
                  className="pt-2 hover:shadow-md hover:shadow-black pb-2 pl-12 pr-12 border rounded-3xl text-[14px] bg-green-500 text-white hover:text-green-500 hover:bg-white duration-500 hover:translate-x-1"
                >
                  𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:block sm:hidden">
        <div>
          <p className="text-center text-[30px] mt-[80px]">𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐔𝐒</p>
        </div>
        <hr className="w-[700px] ml-[35px] mt-[50px]" />
        <div className="flex ml-[90px] mt-[80px]">
          <img
            className="rounded-md"
            src="https://livedemo00.template-help.com/wt_60074/images/home-08-270x180.jpg"
          />

          <div className="ml-[25px] mt-[15px]">
            <p>𝐇𝐐 𝐎𝐟𝐟𝐢𝐜𝐞 (𝐁𝐨𝐬𝐭𝐨𝐧, 𝐌𝐀, 𝐔𝐒𝐀)</p>
            <p className="text-[13px] text-gray-400 mt-[10px]">
              8949 Kenamar Drive, Suite 101 Boston, MA
            </p>
            <p className="text-[13px] text-gray-400">92121</p>

            <p className="text-[14px] font-bold mt-[20px]">
              Phone:{" "}
              <span className="font-semibold text-gray-400 ml-[30px]">
                555-376-7872
              </span>
            </p>
            <p className="text-[14px] font-bold">
              Fax:{" "}
              <span className="font-semibold text-gray-400 ml-[49px]">
                555-376-7872
              </span>
            </p>
          </div>
        </div>

        <div className="flex ml-[90px] mt-[50px]">
          <img
            className="rounded-md"
            src="https://livedemo00.template-help.com/wt_60074/images/home-09-270x180.jpg"
          />

          <div className="ml-[25px] mt-[20px]">
            <p>𝐓𝐨𝐫𝐨𝐧𝐭𝐨 𝐎𝐟𝐟𝐢𝐜𝐞</p>
            <p className="text-[13px] text-gray-400 mt-[10px]">
              2000 Finch Avenue West Toronto, Ontario
            </p>
            <p className="text-[13px] text-gray-400">M3J 2V5</p>

            <p className="text-[14px] font-bold mt-[20px]">
              Phone:{" "}
              <span className="font-semibold text-gray-400 ml-[30px]">
                555-376-7872
              </span>
            </p>
            <p className="text-[14px] font-bold">
              Fax:{" "}
              <span className="font-semibold text-gray-400 ml-[49px]">
                555-376-7872
              </span>
            </p>
          </div>
        </div>

        <div className="text-center text-[18px] mt-[50px]">
          <p>𝐆𝐄𝐓 𝐀 𝐏𝐑𝐈𝐂𝐈𝐍𝐆 𝐐𝐔𝐎𝐓𝐄 𝐅𝐎𝐑 𝐀 𝐑𝐄𝐒𝐈𝐃𝐄𝐍𝐓𝐈𝐀𝐋 𝐎𝐑 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒 𝐒𝐎𝐋𝐀𝐑 𝐏𝐀𝐍𝐄𝐋</p>
          <p>𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐀𝐓𝐈𝐎𝐍</p>
        </div>

        <form>
          <div className="ml-[170px]">
            <input
              type="text"
              placeholder="your name"
              className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 pb-1 italic text-[14px] mt-[40px] border-gray-500 w-[400px] outline-none"
              required
            />
            <br />
            <input
              type="email"
              placeholder="email"
              className="border text-gray-500 pl-2 pt-1 rounded-md mt-[15px] bg-gray-200 pb-1 italic text-[14px] border-gray-500 w-[400px] outline-none"
              required
            />
            <br />
            <input
              type="number"
              placeholder="number"
              className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[400px] outline-none"
              required
            />
            <br />

            <select className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[400px] outline-none">
              <option>Do you need a residental or commercial system?</option>
              <option>Residental system</option>
              <option>Commercial system</option>
            </select>
            <br />

            <select className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[400px] outline-none">
              <option>What is your average electricity bill?</option>
              <option>100</option>
              <option>200</option>
              <option>300</option>
            </select>
          </div>
          <div className="mt-[60px] mb-[40px] ml-[260px]">
            <button
              type="submit"
              className="pt-2 hover:shadow-md hover:shadow-black pb-2 pl-12 pr-12 border rounded-3xl text-[14px] bg-green-500 text-white hover:text-green-500 hover:bg-white duration-500 hover:translate-x-1"
            >
              𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
            </button>
          </div>
        </form>
      </div>










      

      <div className="md:hidden lg:hidden">
        <p className="text-center text-[30px] mt-[80px]">𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐔𝐒</p>

        <div className="text-center">
          <img
            className="w-full p-4 mt-[30px]"
            src="https://livedemo00.template-help.com/wt_60074/images/home-08-270x180.jpg"
          />

          <p className="text-[20px] mt-[20px]">𝐇𝐐 𝐎𝐟𝐟𝐢𝐜𝐞 (𝐁𝐨𝐬𝐭𝐨𝐧, 𝐌𝐀, 𝐔𝐒𝐀)</p>
          <p className="text-gray-400 text-[15px] font-semibold mt-[10px]">
            8949 Kenamar Drive, Suite 101 Boston, MA 92121
          </p>

          <p className="mt-[15px] text-[20px] font-bold">Phone:</p>
          <p className="mt-[6px] text-gray-400">555-376-7872</p>
          <p className="mt-[15px] font-bold text-[20px]">Fax</p>
          <p className="mt-[6px] text-gray-400">555-376-7872</p>
        </div>

        <div className="text-center">
          <img
            className="w-full p-4 mt-[30px]"
            src="https://livedemo00.template-help.com/wt_60074/images/home-09-270x180.jpg"
          />

          <p className="text-[20px] mt-[20px]">𝐇𝐐 𝐎𝐟𝐟𝐢𝐜𝐞 (𝐁𝐨𝐬𝐭𝐨𝐧, 𝐌𝐀, 𝐔𝐒𝐀)</p>
          <p className="text-gray-400 text-[15px] font-semibold mt-[10px]">
            8949 Kenamar Drive, Suite 101 Boston, MA 92121
          </p>

          <p className="mt-[15px] text-[20px] font-bold">Phone:</p>
          <p className="mt-[6px] text-gray-400">555-376-7872</p>
          <p className="mt-[15px] font-bold text-[20px]">Fax</p>
          <p className="mt-[6px] text-gray-400 mb-[50px]">555-376-7872</p>
        </div>

        <div className="text-center text-[17px]">
          <p>𝐆𝐄𝐓 𝐀 𝐏𝐑𝐈𝐂𝐈𝐍𝐆 𝐐𝐔𝐎𝐓𝐄 𝐅𝐎𝐑 𝐀 𝐑𝐄𝐒𝐈𝐃𝐄𝐍𝐓𝐈𝐀𝐋 𝐎𝐑</p>
          
          <p>𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒 𝐒𝐎𝐋𝐀𝐑 𝐏𝐀𝐍𝐄𝐋 𝐈𝐍𝐒𝐓𝐀𝐋𝐋𝐀𝐓𝐈𝐎𝐍</p>
        </div>

        <form>
          <div className="ml-[20px]">
            <input
              type="text"
              placeholder="your name"
              className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 pb-1 italic text-[14px] mt-[40px] border-gray-500 w-[350px] outline-none"
              required
            />
            <br />
            <input
              type="email"
              placeholder="email"
              className="border text-gray-500 pl-2 pt-1 rounded-md mt-[15px] bg-gray-200 pb-1 italic text-[14px] border-gray-500 w-[350px] outline-none"
              required
            />
            <br />
            <input
              type="number"
              placeholder="number"
              className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[350px] outline-none"
              required
            />
            <br />

            <select className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[350px] outline-none">
              <option>Do you need a residental or commercial system?</option>
              <option>Residental system</option>
              <option>Commercial system</option>
            </select>
            <br />

            <select className="border text-gray-500 pl-2 pt-1 rounded-md bg-gray-200 mt-[15px] pb-1 italic text-[14px] border-gray-500 w-[350px] outline-none">
              <option>What is your average electricity bill?</option>
              <option>100</option>
              <option>200</option>
              <option>300</option>
            </select>
          </div>
          <div className="mt-[60px] mb-[40px] ml-[110px]">
            <button
              type="submit"
              className="pt-2 hover:shadow-md hover:shadow-black pb-2 pl-12 pr-12 border rounded-3xl text-[14px] bg-green-500 text-white hover:text-green-500 hover:bg-white duration-500 hover:translate-x-1"
            >
              𝐑𝐄𝐀𝐃 𝐌𝐎𝐑𝐄
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Us;
