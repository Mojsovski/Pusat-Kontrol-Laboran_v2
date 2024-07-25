import React, { useEffect } from "react";
import useStore from "../../../data/Data.js";
import { Link } from "react-router-dom";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import TableListInv from "../../../components/admin/TableListInv.jsx";

function InvAdminListNonPC() {
  const { fetchDataNonPC, deleteFormNonPC } = useStore();
  useEffect(() => {
    fetchDataNonPC();
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center justify-between">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Inventaris Non Komputer
              </div>
            </div>
            <Link
              to={"/admin/inventaris/input"}
              className="px-5 h-6 rounded-2xl bg-blue-800 hover:bg-blue-700 flex items-center shadow"
            >
              <div className="  text-white text-xs font-medium  ">
                input inventaris
              </div>
            </Link>
          </div>
          {/* table */}
          <TableListInv />
        </div>
      </div>
    </div>
  );
}

export default InvAdminListNonPC;
