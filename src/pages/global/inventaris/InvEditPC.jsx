import React, { useEffect } from "react";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";

import FormEditPC from "../../../components/global/inventaris/FormEditPC.jsx";

function InvEditPC() {
  const { formPC } = useStore();

  useEffect(() => {
    document.title = "Edit Inventaris PC | Pusat Kontrol Laboran";
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" showButtonBack={true} />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Edit Inventaris PC {formPC.name}
              </div>
            </div>
          </div>
          {/* col */}
          <FormEditPC />
        </div>
      </div>
    </div>
  );
}

export default InvEditPC;
