import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { create } from "zustand";

import iconPlotLaboran from "../../assets/icons/icon1.svg";
import logoBandwidth from "../../assets/icons/jaringan.svg";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

function InvHome() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);

  return (
    <div className="h-screen bg-[#C4C4C4] relative ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" px-5 py-28 pl-14 sm:ml-[266px]  flex flex-col gap-5  bg-[#C4C4C4] relative">
        <div className="px-5 py-3 flex gap-5 relative ">
          {/* button */}
          <div className="w-96 h-10 gap-3 bg space-y-5 relative">
            <button className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md"></button>
            <button className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md"></button>
            <button className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md"></button>
            <button className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md"></button>
          </div>
          {/* card 1*/}
          <div className="w-[800px] h-[270px] p-8 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
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
                  <button onClick={increasePopulation}>one up</button>
                </div>
                <div className=" text-center text-white text-sm flex items-center justify-center ">
                  {bears} around here..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvHome;
