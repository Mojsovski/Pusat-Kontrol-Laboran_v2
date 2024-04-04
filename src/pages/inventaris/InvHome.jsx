import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

import logoInputPC from "../../assets/icons/pcinput.svg";
import logoEditPC from "../../assets/icons/pcedit.svg";
import logoVerifikasi from "../../assets/icons/verifikasi.svg";
import logoRekap from "../../assets/icons/inv2.svg";

import logoBandwidth from "../../assets/icons/jaringan.svg";

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));

function InvHome() {
  // const bears = useStore((state) => state.bears);
  // const increasePopulation = useStore((state) => state.increasePopulation);
  // const removeAllBears = useStore((state) => state.removeAllBears);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative space-y-6">
        {/* column 1 */}
        <div className="flex gap-5 relative">
          {/* button */}
          <div className="w-96 h-10 gap-3 bg space-y-7 relative">
            <Link
              to={"/inventaris/input"}
              // onClick={increasePopulation}
              className="relative w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={logoInputPC} className="w-[19px] " />
              Input Inventaris Lab
            </Link>
            <Link
              to={"/inventaris/input"}
              // onClick={increasePopulation}
              className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={logoEditPC} className="w-[21px] " />
              Edit Inventaris Lab
            </Link>
            <Link
              to={"/inventaris/input"}
              // onClick={increasePopulation}
              className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={logoVerifikasi} className="w-[19px] " />
              Verifikasi Bulanan
            </Link>
            <Link
              to={"/inventaris/input"}
              // onClick={increasePopulation}
              className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={logoInputPC} className="w-[19px]" />
              Input Inventaris
            </Link>
          </div>

          {/* card 1*/}
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md ">
            <div className=" h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={logoRekap} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Rekap Inventaris
                </div>
              </div>
              <button className="px-5 h-6 rounded-2xl bg-[#F5BD45] flex items-center shadow">
                <div className="  text-black text-xs font-medium  ">
                  selengkapnya
                </div>
              </button>
            </div>
            {/* table */}
            <div className="py-5 gap-7 px-5 h-[169px]  text-8xl flex flex-row justify-between items-start">
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">PC Cilent</div>
                  <div className="text-base font-semibold">PC Dosen</div>
                  <div className="text-base font-semibold">PC Laboran</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">PC Cadangan</div>
                  <div className="text-base font-semibold">PC Rusak</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">PC Pinjam</div>
                  <div className="text-base font-semibold">PC Dipinjam</div>
                  <div className="text-base font-semibold">Total PC</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                </div>
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className="px-5 h-7 rounded-2xl bg-[#0F4C92] shadow flex items-center justify-center">
                <div className=" text-center text-white text-xs  ">
                  terakhir update : 14 Juni 2023
                </div>
              </div>
              <div className="px-5 h-7 rounded-2xl bg-[#FF0000] shadow flex items-center justify-center ">
                <div className=" text-center text-white text-xs ">
                  belum verifikasi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* column 2 */}
        <div className="flex gap-5 relative  ">
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md ">
            <div className=" h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={logoRekap} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Spesifikasi Komputer Utama
                </div>
              </div>
              <button className="px-5 h-6 rounded-2xl bg-[#F5BD45] flex items-center shadow">
                <div className="  text-black text-xs font-medium  ">
                  selengkapnya
                </div>
              </button>
            </div>
            {/* table */}
            <div className="h-[180px] text-center text-8xl flex justify-center items-center">
              asas
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className="flex gap-5 relative  ">
          <div className="w-full h-[277px] px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={logoRekap} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">Rekap</div>
            </div>
            <div className="h-32 text-center text-8xl flex justify-center items-center ">
              D.2.I
            </div>
            <div className="h-10 text-center text-base flex justify-center items-center ">
              Shift : Siang (14.00-21.00)
            </div>
            <div className="h-9 flex justify-center items-center">
              <div className="w-36 h-7 py-1 rounded-2xl bg-[#07AC22]">
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
              </div>
            </div>
          </div>
        </div>

        {/* column 4 */}
        <div className=" flex gap-5 relative  ">
          {/* row 1 */}
          <div className=" w-1/2  h-[277px] px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative ">
            <div className=" h-10 flex flex-row gap-4">
              <img src={logoInputPC} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">Rekap</div>
            </div>
            <div className="h-32 text-center text-8xl flex justify-center items-center ">
              D.2.I
            </div>
            <div className="h-10 text-center text-base flex justify-center items-center ">
              Shift : Siang (14.00-21.00)
            </div>
            <div className="h-9 flex justify-center items-center">
              <div className="w-36 h-7 py-1 rounded-2xl bg-[#07AC22]">
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="w-1/2 h-[277px] px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={logoInputPC} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">Rekap</div>
            </div>
            <div className="h-32 text-center text-8xl flex justify-center items-center ">
              D.2.I
            </div>
            <div className="h-10 text-center text-base flex justify-center items-center ">
              Shift : Siang (14.00-21.00)
            </div>
            <div className="h-9 flex justify-center items-center">
              <div className="w-36 h-7 py-1 rounded-2xl bg-[#07AC22]">
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvHome;
