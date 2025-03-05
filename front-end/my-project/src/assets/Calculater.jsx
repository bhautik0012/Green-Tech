import React from "react";

function Calculater() {
  return (
    <div className="mb-[130px]">
      <div className="lg:block md:hidden sm:hidden ">
        <div className="flex mt-[120px] gap-48 ml-[200px]">
          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="lg:w-[100px] h-[100px]" src="claculater.png" />
            <p className="ml-[-40px] font-bold mt-[30px]">
              CALCULATE YOUR SAVINGS
            </p>
          </div>
          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="lg:w-[100px] h-[100px]" src="board.png" />
            <p className="ml-[-25px] font-bold mt-[30px]">
              INSTALLATION: HOW IT
            </p>
            <p className="ml-[20px] font-bold">WORKS?</p>
          </div>
          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="lg:w-[100px] h-[100px]" src="policy.png" />
            <p className="ml-[-10px] font-bold mt-[30px]">OUR WARRANTY</p>
            <p className="ml-[25px] font-bold"> POLICY</p>
          </div>
          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="lg:w-[100px] h-[100px]" src="Additonal.png" />
            <p className="ml-[-30px] font-bold mt-[30px]">
              ADDITIONAL POWER FOR
            </p>
            <p className="font-bold"> YOUR NEEDS</p>
          </div>
        </div>
      </div>


      <div className="md:block sm:hidden lg:hidden">
        <div className="flex mt-[120px] gap-16 ml-[50px]">
          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="w-[100px] h-[100px] ml-[5px]" src="claculater.png" />
            <p className="font-bold ml-[10px] mt-[20px]">CALCULATE</p><p className="font-bold">YOUR SAVINGS</p>
          </div>


          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="w-[100px] h-[100px]" src="board.png" />
            <p className="font-bold mt-[20px]">INSTALLATION:</p><p className="font-bold ml-[20px]">HOW IT</p><p className="font-bold ml-[18px]">WORKS?</p>
            
          </div>


          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="lg:w-[100px] h-[100px] ml-[10px]" src="policy.png" />
            <p className="font-bold mt-[20px]">OUR WARRANTY</p><p className="font-bold ml-[30px]">POLICY</p>
          </div>

          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="w-[100px] h-[100px]" src="Additonal.png" />
            <p className="mt-[20px] font-bold">ADDITIONAL</p><p className="font-bold">POWER FOR</p><p className="font-bold">YOUR NEEDS</p>
          </div>
          
        </div>
      </div>




      <div className=" md:hidden lg:hidden">
        <div className=" mt-[120px] text-center ml-[0px]">
          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="w-[100px] h-[100px] ml-[145px] mt-[40px]" src="claculater.png" />
            <p className="font-bold ml-[10px] mt-[20px]">CALCULATE</p><p className="font-bold ml-[10px]">YOUR SAVINGS</p>
          </div>


          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="w-[100px] h-[100px] ml-[145px] mt-[40px]" src="board.png" />
            <p className="font-bold mt-[20px]">INSTALLATION:</p><p className="font-bold ">HOW IT</p><p className="font-bold ">WORKS?</p>
            
          </div>


          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="lg:w-[100px] h-[100px]  ml-[145px] mt-[40px]" src="policy.png" />
            <p className="font-bold mt-[20px]">OUR WARRANTY</p><p className="font-bold">POLICY</p>
          </div>

          <div className="transition-all cursor-pointer hover:scale-110">
            <img className="w-[100px] h-[100px] ml-[145px] mt-[40px]" src="Additonal.png" />
            <p className="mt-[20px] font-bold">ADDITIONAL</p><p className="font-bold">POWER FOR</p><p className="font-bold">YOUR NEEDS</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Calculater;
