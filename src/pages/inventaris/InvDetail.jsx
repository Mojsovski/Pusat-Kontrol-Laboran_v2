import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import logoInput from "../../assets/icons/pcinput.svg";
function InvInput() {
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={logoInput} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Input Inventaris</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvInput;
