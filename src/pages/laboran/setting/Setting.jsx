import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function Setting() {
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Pengaturan" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Akun Pengguna</div>
            </div>
          </div>
          {/* col 1 */}
          <div className="h-52 m-7 flex flex-row">
            <div className="w-3/4 flex items-center space-x-8">
              <img
                className=" size-40 rounded-full object-cover"
                src="https://mahasiswa.dinus.ac.id/images/foto/A/A12/2020/A12.2020.06406.jpg"
                alt="user photo"
              />
              <div className="space-y-3">
                <div className=" text-3xl font-semibold">
                  Amratta Tegar Lazuardy
                </div>
                <div className="text-lg font-semibold ">0686.89.2024.064</div>
              </div>
            </div>
            <div className="w-1/4 flex items-center justify-end">
              <Link
                to={"/user/setting"}
                className="w-32 h-10 py-2 shadow-lg rounded-3xl text-center bg-blue-800 hover:bg-blue-700 text-white"
              >
                edit profil
              </Link>
            </div>
          </div>
          {/* col 2 */}
          <div className="m-7 flex flex-col space-y-3">
            <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#efefef]">
              <div className="text-start font-semibold">Email</div>
              <div className="text-end">amrattategar30@gmail.com</div>
            </div>
            <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#efefef]">
              <div className="text-start font-semibold">Ruang Laboratorium</div>
              <div className="text-end">D.2.I</div>
            </div>
            <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#efefef]">
              <div className="text-start font-semibold">Status</div>
              <div className="text-end">laboran magang</div>
            </div>
            <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#efefef]">
              <div className="text-start font-semibold">Nomer Handphone</div>
              <div className="text-end">amrattategar30@gmail.com</div>
            </div>
            <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#efefef]">
              <div className="text-start font-semibold">Alamat</div>
              <div className="text-end">Semarang, Jawa Tengah</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
