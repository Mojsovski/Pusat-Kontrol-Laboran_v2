import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import UsersTable from "../../../components/laboran/UsersTable.jsx";

function Users() {
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Kelola Akun" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Akun Pengguna
              </div>
            </div>
            <Link
              to={"/signup"}
              className="w-32 h-7 shadow-lg rounded-3xl flex flex-row items-center justify-center bg-blue-800 hover:bg-blue-700 text-white"
            >
              <div className="text-center">buat akun</div>
            </Link>
          </div>
          {/* table */}
          <UsersTable />
        </div>
      </div>
    </div>
  );
}

export default Users;
