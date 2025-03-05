import React from "react";
import { NavLink } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div className="lg:block md:hidden sm:hidden">
        <div>
          <p className="font-bold text-center text-[35px] text-slate-800 lg:mt-[130px]">
            𝐖𝐡𝐨 𝐖𝐞 𝐀𝐫𝐞
          </p>
          <p className="text-center text-gray-400">
            Team of alternative energy specialists
          </p>

          <hr className="w-[1100px] ml-[230px] mt-[50px]" />
          <p className="text-center pl-44 pr-44 text-[20px] mt-[40px] text-gray-400">
            Our company is an end-to-end, customer oriented alternative energy
            company that is centered on marketing, trading, transportation, and
            distribution of solar panels in the US and around the world...
            Firstly, we’re an environmentally friendly renewable energy company
            offering a broad portfolio of technologies, products & solutions to
            our clients globally!
          </p>
        </div>

        <div className="flex gap-2 mt-[130px]">
          <div>
            <img src="public/About1.jpg" />
          </div>
          <div>
            <img src="public/About2.jpg" />
          </div>
          <div>
            <img src="public/About3.jpg" />
          </div>
        </div>

        <div>
          <p className="text-center text-[37px] mt-[70px]">
            𝐖𝐞'𝐫𝐞 𝐭𝐡𝐞 <span className="text-green-500">#𝟏 </span> 𝐬𝐨𝐥𝐚𝐫 𝐞𝐧𝐞𝐫𝐠𝐲 &
            𝐰𝐢𝐧𝐝
          </p>
          <p className="text-center text-[37px] ">
            𝐭𝐮𝐫𝐛𝐢𝐧𝐞𝐬 𝐩𝐫𝐨𝐯𝐢𝐝𝐞𝐫 𝐢𝐧 𝐭𝐡𝐞 𝐒𝐭𝐚𝐭𝐞𝐬!
          </p>

          <hr className="w-[70px] mt-[50px] ml-[712px] border-4" />

          <img
            className="rounded-full ml-[690px] mt-[40px]"
            src="public/Face.jpg"
          />

          <div className=" text-center mt-[20px]">
            <p className="text-[30px]">𝐉𝐨𝐡𝐧 𝐁𝐢𝐬𝐡𝐨𝐩</p>
            <p className="text-[14px] italic">
              Co-Founder of <span className="text-green-400"> GREEN TECH</span>{" "}
            </p>
          </div>
          <div className="text-center pl-60 pr-44 text-[20px] mt-[60px] text-gray-400">
            <p>
              We combine the power of the systems and technologies designed by
              our team of scientists and engineers. All the while using the most
              advanced technologies available, we can deliver more stable and
              efficient energy projects. Our global platform is our strength!
            </p>
          </div>
        </div>

        <div className="w-auto mt-[50px] h-[450px] bg-cover bg-center bg-dark">
          <p className="text-center text-white text-[30px] pt-[150px]">
            𝐀 𝐅𝐞𝐰 𝐅𝐚𝐜𝐭𝐬 𝐀𝐛𝐨𝐮𝐭 𝐆𝐫𝐞𝐞𝐧 𝐓𝐞𝐜𝐡
          </p>

          <div className="flex gap-40 mt-[80px] ml-[200px]">
            <div className="flex items-center">
              <img className="w-[80px] text-green-500" src="Customer.png" />
              <div className="ml-[20px] mt-[10px]">
                <p className="text-white text-[25px]">𝟓𝟎𝟎 𝐓𝐡𝐨𝐮𝐬𝐚𝐧𝐝𝐬</p>
                <p className="text-[21px] text-gray-400 mt-[-5px]">customers</p>
              </div>
            </div>

            <div className="flex items-center">
              <img className="w-[80px] text-green-500" src="WM.png" />
              <div className="ml-[20px] mt-[10px]">
                <p className="text-white text-[25px]">𝟒𝟒,𝟎𝟎𝟎 𝐌𝐖</p>
                <p className="text-[21px] text-gray-400 mt-[-5px]">
                  𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐦𝐨𝐧𝐭𝐡𝐥𝐲
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img className="w-[80px] text-green-500" src="Board2.png" />
              <div className="ml-[20px] mt-[10px]">
                <p className="text-white text-[25px]">𝐍𝐘𝐒𝐄-𝐥𝐢𝐬𝐭𝐞𝐝</p>
                <p className="text-[21px] text-gray-400 mt-[-5px]">company</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[33px] text-center mt-[20px]">
          <p>𝐒𝐖𝐈𝐓𝐇𝐂𝐇 𝐘𝐎𝐔𝐑 𝐄𝐍𝐄𝐑𝐆𝐘 𝐍𝐄𝐄𝐃𝐒 𝐓𝐎</p>
          <p>𝐄𝐅𝐅𝐈𝐂𝐈𝐄𝐍𝐓 𝐒𝐎𝐋𝐀𝐑 𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐈𝐄𝐒!</p>
        </div>

        <div className="flex gap-16 mt-[100px]">
          <div className="flex ml-[80px]">
            <img className="w-[50px] h-[50px] mt-[6px]" src="Mo.png" />
            <div className="ml-[20px] text-gray-400">
              <p>
                Our solar panels allow an advanced energy monitoring with the
                usage of MySolar mobile and tablet app. This means you can
                effectively track your home's energy production from anywhere in
                the world!
              </p>
            </div>
          </div>

          <div className="flex">
            <img className="w-[80px] mt-[6px] h-[50px]" src="Setting.png" />
            <div className="ml-[20px] text-gray-400">
              <p>
                Green Tech's mounting system technologies blend solar panels
                right into your roof to make the aesthetics perfect. You may not
                believe it, but the whole installation process goes down in just
                a few hours...
              </p>
            </div>
          </div>

          <div className="flex">
            <img className="w-[60px] mt-[6px] h-[50px]" src="Done.png" />
            <div className=" ml-[20px] mr-[150px] text-gray-400">
              <p>
                Our solar panels allow an advanced energy monitoring with the
                usage of MySolar mobile and tablet app. This means you can
                effectively track your home's energy production from anywhere in
                the world!
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[1200px] ml-[150px] mt-[50px]" />

        <div>
          <p className="text-center text-[40px] mt-[50px]">
            𝐎𝐮𝐫 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐭𝐞𝐚𝐦
          </p>
        </div>

        <div className="flex ml-[130px] mt-[70px]">
          <div>
            <div className="flex">
              <img className="rounded-full" src="Photographer.jpg" />
              <div className="mt-[10px] ml-[20px]">
                <p>𝐃𝐚𝐯𝐢𝐝 𝐅𝐨𝐬𝐭𝐞𝐫</p>
                <p className="text-gray-400">Managing partner</p>
              </div>
            </div>
            <div className="text-gray-500 ml-[50px] mt-[15px]">
              <p>As a managing partner of our company, David</p>
              <p>Foster nurtures the most responsible approach</p>
              <p>towards energy consumption. He’s been advocating</p>
              <p>renewable energy well since his student years in</p>
              <p>1970s, and as now he’s at the head of our</p>
              <p>enterprise, David does his best to promote the</p>
              <p>green energy usage...</p>
            </div>
          </div>

          <div className="ml-[40px]">
            <div className="flex">
              <img className="rounded-full" src="CEO.jpg" />
              <div className="mt-[10px] ml-[20px]">
                <p>𝐀𝐥𝐛𝐞𝐫𝐭 𝐖𝐢𝐥𝐬𝐨𝐧</p>
                <p className="text-gray-400">Head of Production</p>
              </div>
            </div>
            <div className="text-gray-500 ml-[50px] mt-[15px]">
              <p>It’s his field of duty, that all the stages of</p>
              <p>projecting, assembling and repairing of our solar</p>
              <p>panels models go according to the plan. Also Albert</p>
              <p>is responsible for new solar energy technologies</p>
              <p>development and testing. It’s thanks to Albert that</p>
              <p>our products have such a high energy production</p>
              <p>ratio and at the same time are so cost-efficient.</p>
            </div>
          </div>

          <div className="ml-[40px]">
            <div className="flex">
              <img className="rounded-full" src="Web.jpg" />
              <div className="mt-[10px] ml-[20px]">
                <p>𝐌𝐚𝐫𝐲 𝐁𝐢𝐬𝐡𝐨𝐩</p>
                <p className="text-gray-400">Head of Finances and Strategy</p>
              </div>
            </div>
            <div className="text-gray-500 ml-[50px] mt-[15px]">
              <p>Mary Bishop is the person responsible for the</p>
              <p>fiscal, taxing and accounting aspects of our work, as</p>
              <p>well as for the interactions with capital markets and</p>
              <p>the information technology department. In addition,</p>
              <p>she supervises Green Tech’s overall financial</p>
              <p>strategy and transactional activity. Mary also</p>
              <p>oversees our company’s international development</p>
              <p>opportunities.</p>
            </div>
          </div>
        </div>
        <div className="w-auto mt-[80px] h-[550px] bg-cover   bg-center bg-Laptop">
          <p className="text-center text-gray-100 pt-[130px] text-[35px]">
            𝐄𝐍𝐄𝐑𝐇𝐈𝐙𝐄 𝐘𝐎𝐔𝐑 𝐂𝐀𝐑𝐄𝐄𝐑
          </p>
          <p className="text-center text-gray-100 text-[20px] mt-[50px]">
            The work of our employees can be managerial and office-bound, and
            can take place at the
          </p>
          <p className="text-center text-gray-100 text-[20px]">
            fields, onshore power plants or overseas development positions.
            Regardless of where we work,
          </p>
          <p className="text-center text-gray-100 text-[20px]">
            becoming a part of our team can change your life for the better!
          </p>

          <NavLink to="/Blog">
          <button className="ml-[650px] mt-[50px] border-transparent duration-500 pt-2 pb-2 pl-8 pr-8 font-semibold text-white bg-green-500 border rounded-3xl transition-all hover:translate-x-2 hover:translate-y-2 hover:text-green-400 hover:bg-white">
            LEARN MORE
          </button>
          </NavLink>
        </div>
      </div>

      {/* middle screen  */}
      <div className="md:block lg:hidden sm:hidden">
        <div>
          <p className="font-bold text-center text-[35px] text-slate-800 mt-[80px]">
            𝐖𝐡𝐨 𝐖𝐞 𝐀𝐫𝐞
          </p>
          <p className="text-center text-gray-400">
            Team of alternative energy specialists
          </p>

          <hr className="w-[700px] ml-[30px] mt-[40px]" />

          <div className="text-gray-400 text-[15px] text-center pl-8 pr-8 mt-[30px]">
            <p>
              Our company is an end-to-end, customer oriented alternative energy
              company that is centered on marketing, trading, transportation,
              and distribution of solar panels in the US and around the world...
              Firstly, we’re an environmentally friendly renewable energy
              company offering a broad portfolio of technologies, products &
              solutions to our clients globally!
            </p>
          </div>
        </div>

        <div className="flex mt-[70px]">
          <img
            className="w-[250px] h-[200px] rounded-md"
            src="public/About1.jpg"
          />
          <img
            className="w-[250px] h-[200px] rounded-md"
            src="public/About2.jpg"
          />
          <img
            className="w-[250px] h-[200px] rounded-md"
            src="public/About3.jpg"
          />
        </div>

        <div>
          <p className="text-center text-[30px] mt-[50px]">
            𝐖𝐞'𝐫𝐞 𝐭𝐡𝐞 <span className="text-green-500">#𝟏 </span> 𝐬𝐨𝐥𝐚𝐫 𝐞𝐧𝐞𝐫𝐠𝐲 &
            𝐰𝐢𝐧𝐝
          </p>

          <p className="text-center text-[30px] ">
            𝐭𝐮𝐫𝐛𝐢𝐧𝐞𝐬 𝐩𝐫𝐨𝐯𝐢𝐝𝐞𝐫 𝐢𝐧 𝐭𝐡𝐞 𝐒𝐭𝐚𝐭𝐞𝐬!
          </p>

          <hr className="w-[70px] mt-[50px] ml-[350px] border-4" />

          <img
            className="rounded-full ml-[320px] mt-[50px]"
            src="public/Face.jpg"
          />

          <div className=" text-center mt-[20px]">
            <p className="text-[30px]">𝐉𝐨𝐡𝐧 𝐁𝐢𝐬𝐡𝐨𝐩</p>
            <p className="text-[14px] italic">
              Co-Founder of <span className="text-green-400"> GREEN TECH</span>{" "}
            </p>
          </div>
          <div className="text-center pl-40 pr-40 text-[20px] mt-[60px] text-gray-400">
            <p>
              We combine the power of the systems and technologies designed by
              our team of scientists and engineers. All the while using the most
              advanced technologies available, we can deliver more stable and
              efficient energy projects. Our global platform is our strength!
            </p>
          </div>
        </div>

        <div className="w-[750px] mt-[30px] bg-center bg-cover h-[400px] bg-dark">
          <p className="text-center text-white text-[30px] pt-[120px]">
            𝐀 𝐅𝐞𝐰 𝐅𝐚𝐜𝐭𝐬 𝐀𝐛𝐨𝐮𝐭 𝐆𝐫𝐞𝐞𝐧 𝐓𝐞𝐜𝐡
          </p>

          <div className="flex gap-14  mt-[50px] ml-[30px]">
            <div className="flex items-center">
              <img className="w-[60px] text-green-500" src="Customer.png" />
              <div className="ml-[20px] mt-[10px]">
                <p className="text-white text-[16px]">𝟓𝟎𝟎 𝐓𝐡𝐨𝐮𝐬𝐚𝐧𝐝𝐬</p>
                <p className="text-[13px] text-gray-400 mt-[-5px]">customers</p>
              </div>
            </div>

            <div className="flex items-center">
              <img className="w-[60px] text-green-500" src="WM.png" />
              <div className="ml-[20px] mt-[10px]">
                <p className="text-white text-[16px]">𝟒𝟒,𝟎𝟎𝟎 𝐌𝐖</p>
                <p className="text-[13px] text-gray-400 mt-[-5px]">
                  𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐦𝐨𝐧𝐭𝐡𝐥𝐲
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img className="w-[60px] text-green-500" src="Board2.png" />
              <div className="ml-[20px] mt-[10px]">
                <p className="text-white text-[16px]">𝐍𝐘𝐒𝐄-𝐥𝐢𝐬𝐭𝐞𝐝</p>
                <p className="text-[13px] text-gray-400 mt-[-5px]">company</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[25px] text-center mt-[20px]">
          <p>𝐒𝐖𝐈𝐓𝐇𝐂𝐇 𝐘𝐎𝐔𝐑 𝐄𝐍𝐄𝐑𝐆𝐘 𝐍𝐄𝐄𝐃𝐒 𝐓𝐎 𝐄𝐅𝐅𝐈𝐂𝐈𝐄𝐍𝐓 𝐒𝐎𝐋𝐀𝐑 𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐈𝐄𝐒!</p>
        </div>

        <div className=" mt-[100px]">
          <div className="flex ml-[190px]">
            <img className="w-[50px] h-[50px] mt-[6px]" src="Mo.png" />
            <div className="ml-[20px] pr-[200px] text-gray-400">
              <p>
                Our solar panels allow an advanced energy monitoring with the
                usage of MySolar mobile and tablet app. This means you can
                effectively track your home's energy production from anywhere in
                the world!
              </p>
            </div>
          </div>

          <div className="flex mt-[80px] ml-[190px]">
            <img className="w-[80px] mt-[6px] h-[50px]" src="Setting.png" />
            <div className="ml-[20px] pr-[200px] text-gray-400">
              <p>
                Green Tech's mounting system technologies blend solar panels
                right into your roof to make the aesthetics perfect. You may not
                believe it, but the whole installation process goes down in just
                a few hours...
              </p>
            </div>
          </div>

          <div className="flex ml-[190px] mt-[80px]">
            <img className="w-[60px] mt-[6px] h-[50px]" src="Done.png" />
            <div className=" ml-[20px] mr-[150px] text-gray-400 ">
              <p>
                Our solar panels allow an advanced energy monitoring with the
                usage of MySolar mobile and tablet app. This means you can
                effectively track your home's energy production from anywhere in
                the world!
              </p>
            </div>
          </div>
        </div>

        <hr className="w-[700px] ml-[40px] mt-[50px]" />

        <div>
          <p className="text-center text-[35px] mt-[40px]">
            𝐎𝐮𝐫 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐭𝐞𝐚𝐦
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

        <div className="w-auto mt-[110px] h-[550px] bg-cover   bg-center bg-Laptop">
          <p className="text-center text-gray-100 pt-[150px] text-[35px]">
            𝐄𝐍𝐄𝐑𝐇𝐈𝐙𝐄 𝐘𝐎𝐔𝐑 𝐂𝐀𝐑𝐄𝐄𝐑
          </p>

          <p className="pl-4 pr-4 text-center text-gray-100 mt-[50px]">
            The work of our employees can be managerial and office-bound, and
            can take place at the fields, onshore power plants or overseas
            development positions. Regardless of where we work, becoming a part
            of our team can change your life for the better!
          </p>

          <NavLink to="/Blog">
          <button className="ml-[280px] mt-[60px] border-transparent duration-500 pt-2 pb-2 pl-8 pr-8 font-semibold text-white bg-green-500 border rounded-3xl transition-all hover:translate-x-2 hover:translate-y-2 hover:text-green-400 hover:bg-white">
            LEARN MORE
          </button>
          </NavLink>
        </div>
      </div>

      {/* small screen  */}

      <div className="sm:block md:hidden lg:hidden">
        <div>
          <p className="font-bold text-center text-[35px] text-slate-800 mt-[80px]">
            𝐖𝐡𝐨 𝐖𝐞 𝐀𝐫𝐞
          </p>
          <p className="text-center text-gray-400">
            Team of alternative energy specialists
          </p>

          <hr className="w-[350px] ml-[30px] mt-[40px]" />

          <div>
            <p className="p-5 text-center text-gray-400 mt-[10px]">
              Our company is an end-to-end, customer oriented alternative energy
              company that is centered on marketing, trading, transportation,
              and distribution of solar panels in the US and around the world...
              Firstly, we’re an environmentally friendly renewable energy
              company offering a broad portfolio of technologies, products &
              solutions to our clients globally!
            </p>
          </div>
        </div>

        <div className=" mt-[30px] p-4">
          <img
            className="rounded-md "
            src="public/About1.jpg"
          />
          <img
            className="rounded-md"
            src="public/About2.jpg"
          />
          <img
            className="rounded-md"
            src="public/About3.jpg"
          />
        </div>
        
        <div>
          <p className="text-center text-[25px] mt-[50px]">
            𝐖𝐞'𝐫𝐞 𝐭𝐡𝐞 <span className="text-green-500">#𝟏 </span> 
          </p>
          <p className="text-center text-[25px]">𝐬𝐨𝐥𝐚𝐫 𝐞𝐧𝐞𝐫𝐠𝐲 &
          𝐰𝐢𝐧𝐝</p>

          <p className="text-center text-[25px] ">
            𝐭𝐮𝐫𝐛𝐢𝐧𝐞𝐬 𝐩𝐫𝐨𝐯𝐢𝐝𝐞𝐫 𝐢𝐧 𝐭𝐡𝐞 𝐒𝐭𝐚𝐭𝐞𝐬!
          </p>

          <hr className="w-[70px] mt-[50px] ml-[170px] border-4" />

          <img
            className="rounded-full ml-[140px] mt-[50px]"
            src="public/Face.jpg"
          />

          <div className=" text-center mt-[20px]">
            <p className="text-[30px]">𝐉𝐨𝐡𝐧 𝐁𝐢𝐬𝐡𝐨𝐩</p>
            <p className="text-[14px] italic">
              Co-Founder of <span className="text-green-400"> GREEN TECH</span>{" "}
            </p>
          </div>
          <div className="text-center  text-[20px] mt-[60px] text-gray-400 pl-6 pr-6">
            <p>
              We combine the power of the systems and technologies designed by
              our team of scientists and engineers. All the while using the most
              advanced technologies available, we can deliver more stable and
              efficient energy projects. Our global platform is our strength!
            </p>
          </div>
        </div>


        <div className="w-auto mt-[60px] bg-center bg-cover h-[700px] bg-dark">
          <p className="text-center text-white text-[25px] pt-[80px]">
            𝐀 𝐅𝐞𝐰 𝐅𝐚𝐜𝐭𝐬 𝐀𝐛𝐨𝐮𝐭 𝐆𝐫𝐞𝐞𝐧 𝐓𝐞𝐜𝐡
          </p>

          <div className="mt-[50px] ">
            <div className="items-center">
              <img className="w-[60px] mt-[70px] ml-[175px] text-green-500" src="Customer.png" />
              <div className="text-center mt-[10px]">
                <p className="text-white text-[16px]">𝟓𝟎𝟎 𝐓𝐡𝐨𝐮𝐬𝐚𝐧𝐝𝐬</p>
                <p className="text-[13px] text-gray-400 mt-[-5px]">customers</p>
              </div>
            </div>

            <div className="items-center">
              <img className="w-[60px] mt-[70px] ml-[175px] text-green-500" src="WM.png" />
              <div className="text-center mt-[10px]">
                <p className="text-white text-[16px]">𝟒𝟒,𝟎𝟎𝟎 𝐌𝐖</p>
                <p className="text-[13px] text-gray-400 mt-[-5px]">
                  𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐦𝐨𝐧𝐭𝐡𝐥𝐲
                </p>
              </div>
            </div>

            <div className="items-center ">
              <img className="w-[60px] mt-[70px] ml-[175px] text-green-500" src="Board2.png" />
              <div className="text-center mt-[10px]">
                <p className="text-white text-[16px]">𝐍𝐘𝐒𝐄-𝐥𝐢𝐬𝐭𝐞𝐝</p>
                <p className="text-[13px] text-gray-400 mt-[-5px]">company</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[22px] text-center mt-[40px]">
          <p>𝐒𝐖𝐈𝐓𝐇𝐂𝐇 𝐘𝐎𝐔𝐑 𝐄𝐍𝐄𝐑𝐆𝐘 𝐍𝐄𝐄𝐃𝐒 𝐓𝐎 𝐄𝐅𝐅𝐈𝐂𝐈𝐄𝐍𝐓 𝐒𝐎𝐋𝐀𝐑 𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐈𝐄𝐒!</p>
        </div>  

        <div className=" mt-[50px]">
          <div>
            <img className="w-[50px] h-[50px] mt-[6px] ml-[185px]" src="Mo.png" />
            <div className="pl-8 pr-8 text-center text-gray-400 mt-[20px]">
              <p>
                Our solar panels allow an advanced energy monitoring with the
                usage of MySolar mobile and tablet app. This means you can
                effectively track your home's energy production from anywhere in
                the world!
              </p>
            </div>
          </div>

          <div className="mt-[80px]">
            <img className="w-[60px] mt-[6px] h-[60px] ml-[185px]" src="Setting.png" />
            <div className="pl-8 pr-8 text-center text-gray-400 mt-[20px]">
              <p>
                Green Tech's mounting system technologies blend solar panels
                right into your roof to make the aesthetics perfect. You may not
                believe it, but the whole installation process goes down in just
                a few hours...
              </p>
            </div>
          </div>

          <div className=" mt-[80px]">
            <img className="w-[60px] mt-[6px] h-[50px] ml-[185px]" src="Done.png" />
            <div className="pl-8 pr-8 text-center text-gray-400 mt-[20px]">
              <p>
                Our solar panels allow an advanced energy monitoring with the
                usage of MySolar mobile and tablet app. This means you can
                effectively track your home's energy production from anywhere in
                the world!
              </p>
            </div>
          </div>
        </div>      

        <hr className="w-[350px] ml-[25px] mt-[50px]" />

        <div>
          <p className="text-center text-[30px] mt-[40px]">
            𝐎𝐮𝐫 𝐞𝐱𝐞𝐜𝐮𝐭𝐢𝐯𝐞 𝐭𝐞𝐚𝐦
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

        <div className="w-auto mt-[110px] h-[550px] bg-cover   bg-center bg-Laptop">
          <p className="text-center text-gray-100 pt-[150px] text-[30px]">
            𝐄𝐍𝐄𝐑𝐇𝐈𝐙𝐄 𝐘𝐎𝐔𝐑 𝐂𝐀𝐑𝐄𝐄𝐑
          </p>

          <p className="pl-6 pr-6 text-center text-gray-100 mt-[50px]">
            The work of our employees can be managerial and office-bound, and
            can take place at the fields, onshore power plants or overseas
            development positions. Regardless of where we work, becoming a part
            of our team can change your life for the better!
          </p>

          <NavLink to="/Blog">
          <button className="ml-[120px] mt-[60px] border-transparent duration-500 pt-2 pb-2 pl-8 pr-8 font-semibold text-white bg-green-500 border rounded-3xl transition-all hover:translate-x-2 hover:translate-y-2 hover:text-green-400 hover:bg-white">
            LEARN MORE
          </button>
          </NavLink>
        </div>


      </div>
    </div>
  );
}

export default Portfolio;
