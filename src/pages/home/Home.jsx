import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import iconPlotLaboran from "../../assets/icons/icon1.svg";

function Home() {
  return (
    <div className="bg-stone-300">
      <Sidebar />
      <Navbar title="Menu Utama" />
      <div className=" px-5 py-28 pl-14 sm:ml-[266px]  flex flex-col gap-5 relative bg-[#C4C4C4]">
        <div className="px-5 py-3 flex  gap-5">
          <div className="w-96 h-72 p-8 bg-neutral-300 rounded-3xl flex-col shadow ">
            <div className=" h-10 flex flex-row gap-4">
              <img src={iconPlotLaboran} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">
                Anda laboran ruang
              </div>
            </div>
            <div className="h-36 text-center text-8xl flex justify-center items-center ">
              D.2.I
            </div>
            <div className=""></div>
          </div>
          <div className="w-96 h-72 bg-neutral-300 rounded-3xl shadow "></div>
          <div className="w-96 h-72 bg-neutral-300 rounded-3xl shadow "></div>
        </div>
        <div className="px-5 py-3 flex flex-row gap-5">
          <div className="w-[800px] h-72 bg-neutral-300 rounded-3xl shadow "></div>

          <div className="w-96 h-72 bg-neutral-300 rounded-3xl shadow "></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
