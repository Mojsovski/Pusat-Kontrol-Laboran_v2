import React from "react";
import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";

import iconPlotLaboran from "../../../assets/icons/icon1.svg";
import logoBandwidth from "../../../assets/icons/jaringan.svg";

function Home() {
  return (
    <div className="bg-stone-300">
      <Sidebar />
      <Navbar title="Menu Utama" />
      <div className=" px-5 py-28 pl-14 sm:ml-[266px]  flex flex-col gap-5  bg-[#C4C4C4]">
        {/* card 1*/}
        <div className="px-5 py-3 flex gap-5 ">
          <div className="w-96 h-72 p-8 bg-neutral-300 rounded-3xl flex-col shadow relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={iconPlotLaboran} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">
                Anda laboran ruang
              </div>
            </div>
            <div className="h-32 text-center text-8xl flex justify-center items-center ">
              D.2.I
            </div>
            <div className="h-10 text-center text-base flex justify-center items-center ">
              Shift : Siang (14.00-21.00)
            </div>
            <div className="h-9 flex justify-center items-center">
              <div className="w-36 h-7 py-1 rounded-2xl bg-[#07AC22]">
                <div className=" text-center text-white text-sm flex items-center justify-center ">
                  sudah presensi
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-96 h-72 p-8 bg-neutral-300 rounded-3xl flex-col shadow relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={logoBandwidth} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">
                Bandwidth saat ini
              </div>
            </div>
            <div className="flex flex-row justify-center pt-5">
              <div className="h-32 text-center text-9xl flex justify-center ">
                15
              </div>
              <div className="mb-1 text-center text-base flex justify-center items-end  ">
                Mbps
              </div>
            </div>
            <div className="pt-6 flex justify-center items-center ">
              <div className="w-36 h-7 py-1 rounded-2xl bg-[#07AC22]">
                <div className=" text-center text-white text-sm flex items-center justify-center ">
                  internet hidup
                </div>
              </div>
            </div>
          </div>
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
