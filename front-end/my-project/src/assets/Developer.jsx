import React from "react";
import { NavLink } from "react-router-dom";

function Developer() {
  return (
    <div>
      <div className="lg:text-[30px] font-semibold lg:text-center  lg:mt-[120px] md:text-[25px] md:text-center md:mt-[80px] sm:text-center sm:text-[18px] sm:mt-[50px]">
        <p>OUR CUSTOMERS ENJOY THE SUNNY SIDE</p>
        <p>
          {" "}
          OF THEIR <span className="text-green-500">
            {" "}
            ENERGY CONSUMPTION
          </span>{" "}
          BILLS.
        </p>
      </div>
      <div>
        <img
          className="rounded-full lg:ml-[700px] lg:mt-[80px] md:ml-[320px] md:mt-[50px] sm:mt-[40px] sm:ml-[135px]"
          src="D.jpg"
        />

        <p className="lg:font-semibold md:font-semibold lg:text-[32px] md:text-[20px] text-center lg:mt-[28px] md:mt-[35px] sm:mt-[30px] sm:font-bold sm:text-[20px]">
          ORLANDO KEEN
        </p>

        <p className="text-center lg:text-[15px] font-semibold text-gray-500 lg:mt-[10px] md:mt-[10px] sm:mt-[10px] sm:text-[15px]">
          Web Developer At <span className="text-green-500">OpenWorld</span>
        </p>

        <p className="font-semibold lg:mt-[60px] text-gray-500 lg:text-[18px] lg:text-center md:text-center md:mt-[40px] sm:text-center sm:mt-[30px]">
          "Immediately After Purchasing And Installing These Solar Panels At My
          Office Rooftop, I,Ve Seen
        </p>
        <p className="font-semibold text-gray-500 lg:text-[18px] lg:text-center md:text-center sm:text-center">
          Tremendous Cuts In Energy That Our Company Consumes!"
        </p>
      </div>

      <div className="lg:flex lg:gap-[10px] lg:mt-[150px] md:mt-[100px] sm:mt-[70px]">
        <div className="flex  lg:ml-[150px]">
          <div>
            <img
              className="rounded-full md:ml-[200px]  sm:ml-[50px] lg:ml-[0px]"
              src="Photographer.jpg"
            />
          </div>
          <div className=" lg:ml-[15px]  lg:mt-[15px] md:mt-[15px] md:ml-[20px] sm:ml-[70px] sm:mt-[15px]">
            <p className="font-semibold">MARKUS BREITBART</p>
            <p className="italic lg:text-gray-400">Freelance Photographer</p>

            <div className="text-gray-400 lg:text-[13px] lg:font-bold lg:mt-[40px] md:mt-[30px] sm:mt-[30px] md:ml-[-100px] sm:ml-[-30px]   lg:ml-[0px] ">
              <p>I Have A Pretty Big House That Consumes A Sizable</p>
              <p>Amount Of Energy Each Month. With The Help Of These</p>
              <p>Solar Panels, I’ve Been Able To Make Great Cuts To My</p>
              <p>Monthly Bills!</p>
            </div>
          </div>
        </div>

        <div className="flex lg:mt-[0px] md:mt-[90px] sm:mt-[90px]">
          <div>
            <img
              className="rounded-full md:ml-[200px]  sm:ml-[50px] lg:ml-[0px]"
              src="CEO.jpg"
            />
          </div>
          <div className=" lg:ml-[15px]  lg:mt-[15px] md:mt-[15px] md:ml-[20px] sm:ml-[70px] sm:mt-[15px]">
            <p className="font-semibold">THOMAS JOHNSON</p>
            <p className="italic lg:text-gray-400">
              CEO at <span className="italic text-green-400">BigInfoDev</span>
            </p>

            <div className="text-gray-400 lg:text-[13px] lg:font-bold lg:mt-[40px] md:mt-[30px] sm:mt-[30px] md:ml-[-100px] sm:ml-[-30px]   lg:ml-[0px] ">
              <p>Installing a solar panel atop of our office building</p>
              <p>was a great decision! We’ve managed to cover all</p>
              <p>our office needs (which houses 50 computers). All</p>
              <p>thanks to a pair of powerful (320W) solar panels,</p>
              <p>manufactured by Green Tech!</p>
            </div>
          </div>
        </div>

        <div className="flex lg:mt-[0px] md:mt-[90px] sm:mt-[90px]">
          <div>
            <img
              className="rounded-full md:ml-[200px]  sm:ml-[50px] lg:ml-[0px]"
              src="Web.jpg"
            />
          </div>
          <div className=" lg:ml-[15px]  lg:mt-[15px] md:mt-[15px] md:ml-[20px] sm:ml-[70px] sm:mt-[15px]">
            <p className="font-semibold">JANE NICHOLSON</p>
            <p className="italic lg:text-gray-400">Web Designer</p>

            <div className="text-gray-400 lg:text-[13px] lg:font-bold lg:mt-[40px] md:mt-[30px] sm:mt-[30px] md:ml-[-100px] sm:ml-[-30px]   lg:ml-[0px] ">
              <p>Everyone I dealt with at the Green Tech</p>
              <p>company, from a salesperson and office staff to the</p>
              <p>installation crew has been incredibly helpful and</p>
              <p>enthusiastic. I will definitely be recommending</p>
              <p>GreenTech to all of my friends and colleagues!</p>
            </div>
          </div>
        </div>
      </div>


      <div className="lg:block md:hidden sm:hidden">
        <div className="bg-Bg mt-[130px] mb-[20px] bg-center bg-cover h-[600px]">
          <div className="flex">
            <div className="mt-[100px] ml-[200px]">
              <img className="w-[400px] h-[390px]" src="Graph.png" />
            </div>
            <div className="pt-[180px] ml-[250px]">
              <p className="text-white text-[25px]">
                𝐖𝐞'𝐫𝐞 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐭𝐨 𝐩𝐫𝐨𝐯𝐢𝐝𝐢𝐧𝐠{" "}
              </p>
              <p className="text-white text-[25px]"> 𝐟𝐫𝐞𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 </p>
              <p className="text-white mt-[25px]">
                Just after we'll put the solar panels up on your roof, you
              </p>
              <p className="text-white">
                can count on our free customer support!
              </p>

              <div className="mt-[40px]">
               <NavLink to="/Contacts">
               <button className="pt-1 pb-1 pl-10 pr-10 font-semibold text-white duration-500 bg-green-400 border border-transparent rounded-3xl hover:bg-green-500 ">
                  GET QUOTE
                </button>
               </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:block sm:hidden">
        <div className="bg-Bg mt-[130px] mb-[20px] bg-center bg-cover h-[600px]">
          <div className="flex">
            <div className="mt-[100px] ml-[10px]">
              <img className="w-[400px] h-[390px]" src="Graph.png" />
            </div>
            <div className="pt-[180px] ml-[70px]">
              <p className="text-white text-[25px]">
                𝐖𝐞'𝐫𝐞 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐭𝐨 𝐩𝐫𝐨𝐯𝐢𝐝𝐢𝐧𝐠{" "}
              </p>
              <p className="text-white text-[25px]"> 𝐟𝐫𝐞𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 </p>
              <p className="text-white mt-[25px]">
                Just after we'll put the solar panels up on your roof, you
              </p>
              <p className="text-white">
                can count on our free customer support!
              </p>

              <div className="mt-[40px]">
                <NavLink to="/Contacts">
                <button className="pt-1 pb-1 pl-10 pr-10 font-semibold text-white duration-500 bg-green-400 border border-transparent rounded-3xl hover:bg-green-500 ">
                  GET QUOTE
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden sm:block">
        <div className="bg-Bg mt-[130px] mb-[20px] bg-center bg-cover h-[800px]">
          <div className="">
            <div className="pt-[65px]">
              <img className="w-[400px] h-[390px]" src="Graph.png" />
            </div>
            <div className="pt-[50px] text-center">
              <p className="text-white text-[25px]">
                𝐖𝐞'𝐫𝐞 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐭𝐨 𝐩𝐫𝐨𝐯𝐢𝐝𝐢𝐧𝐠
              </p>
              <p className="text-white text-[25px]"> 𝐟𝐫𝐞𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 </p>
              <p className="text-white mt-[25px]">
                Just after we'll put the solar panels up on your roof, you
              </p>
              <p className="text-white">
                can count on our free customer support!
              </p>

              <div className="mt-[40px]">
                <NavLink to="/Contacts">
                <button className="pt-1 pb-1 pl-10 pr-10 font-semibold text-white duration-500 bg-green-400 border border-transparent rounded-3xl hover:bg-green-500 ">
                  GET QUOTE
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
