import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import logoInput from "../../assets/icons/pcinput.svg";

import { create } from "zustand";
import { Link } from "react-router-dom";

function InvInput() {
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col  bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md">
          {/* col 1 */}
          <div className="h-10 flex flex-row gap-5 items-center">
            <img src={logoInput} className="w-[25px] " />
            <div className="p-1 font-semibold text-xl ">Input Inventaris</div>
          </div>
          {/* col 2 */}
          <div className="px-11 flex flex-row justify-between my-3">
            {/* row 1 */}
            <div className="space-y-6">
              {/* <div className="my-2">
                <label className="px-3 font-medium">Jenis Barang</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <select
                    type="text"
                    id="invJenis"
                    name="invJenis"
                    className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="NIM/NPP"
                  >
                    <option value="Komputer">Komputer</option>
                    <option value="Non Komputer">Non Komputer</option>
                  </select>
                </div>
              </div> */}
              <div className="my-2">
                <label className="px-3 font-medium ">Nama Komputer</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invNama"
                    name="invNama"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : D2I-01"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium ">Prosessor</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invCPU"
                    name="invCPU"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : Intel Core i3-10105F"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium">Motherboard</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invMobo"
                    name="invMobo"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : Gigabyte B360M DS3H"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium">RAM</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invRAM"
                    name="invRAM"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : DDR4 16GB"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium ">Kartu Grafis</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invGPU"
                    name="invGPU"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : Gigabyte RTX 3070 "
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium">Kondisi Barang</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <select
                    type="text"
                    id="invStatus"
                    name="invStatus"
                    className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                  >
                    <option value="baik">baik</option>
                    <option value="rusak ringan">rusak ringan</option>
                    <option value="rusak berat">rusak berat</option>
                  </select>
                </div>
              </div>
            </div>
            {/* row 2 */}
            <div className="space-y-6">
              <div className="my-2">
                <label className="px-3 font-medium">Kategori Komputer</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <select
                    type="text"
                    id="invCategory"
                    name="invCategory"
                    className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                  >
                    <option value="Cilent">Cilent</option>
                    <option value="Dosen">Dosen</option>
                    <option value="Laboran">Laboran</option>
                    <option value="Cadangan">Cadangan</option>
                  </select>
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium ">Penyimpanan</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invStorage"
                    name="invStorage"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : Kingston NV2 500GB"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium ">Keyboard</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invKeyboard"
                    name="invKeyboard"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : Logitech USB"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium">Mouse</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invMouse"
                    name="invMouse"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : Logitech USB"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium ">Monitor</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invMonitor"
                    name="invMonitor"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : LG 17inc "
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="px-3 font-medium">Power Supply</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="invPSU"
                    name="invPSU"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="contoh : bawaan casing"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* col 3 */}
          <div className="px-11 flex flex-row justify-end mt-10 ">
            <div className="space-y-6 ">
              <div className="my-2">
                <Link
                  to={"/inventaris/detail"}
                  type="submit"
                  className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
                >
                  Input
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvInput;
