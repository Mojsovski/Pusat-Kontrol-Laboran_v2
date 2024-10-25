import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import TableLogPC from "../../../components/admin/TableLogPC.jsx";
import TableLogInv from "../../../components/admin/TableLogInv.jsx";

function Log() {
  const [activeTable, setActiveTable] = useState("pc");

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Log" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <h2 className="p-1 font-semibold text-xl ">Log Aktifitas</h2>
            </div>
            <div className="flex gap-3">
              <button
                className={`w-32 h-7 shadow-lg rounded-lg ${
                  activeTable === "pc" ? "bg-blue-600" : "bg-blue-800"
                }  `}
                onClick={() => setActiveTable("pc")}
              >
                <p className="text-center text-white">Komputer</p>
              </button>
              <button
                className={`w-32 h-7 shadow-lg rounded-lg ${
                  activeTable === "inv" ? "bg-blue-600" : "bg-blue-800"
                } `}
                onClick={() => setActiveTable("inv")}
              >
                <p className="text-center text-white">Non Komputer</p>
              </button>
            </div>
          </div>
          {/* table */}
          {activeTable === "pc" ? <TableLogPC /> : <TableLogInv />}
        </div>
      </div>
    </div>
  );
}

export default Log;
