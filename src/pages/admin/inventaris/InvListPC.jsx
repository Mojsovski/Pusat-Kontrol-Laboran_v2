import React from "react";
import { Link } from "react-router-dom";
import DrawIcon from "@mui/icons-material/Draw";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import TableListPC from "../../../components/admin/TableListPC.jsx";

function InvAdminListPC() {
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative px-8 py-5  bg-neutral-300 rounded-3xl flex-col shadow-md space-y-3">
          <div className="h-10 flex lg:flex-row  flex-col justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Inventaris
              </div>
            </div>
            <div className="my-2 flex gap-2 ">
              <Link
                to={"/admin/inventaris/input"}
                className="px-4  shadow-lg rounded-xl bg-blue-800 hover:bg-blue-600 text-white"
              >
                <DrawIcon />
              </Link>
            </div>
          </div>
          {/* table */}
          <TableListPC />
        </div>
      </div>
    </div>
  );
}

export default InvAdminListPC;
