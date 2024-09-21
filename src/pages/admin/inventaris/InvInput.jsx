import React, { useEffect, useState } from "react";
import useStore from "../../../data/Data";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import FormInputPC from "../../../components/admin/FormInputPC.jsx";
import FormInputNonPC from "../../../components/admin/FormInput.jsx";

function InvAdminInput() {
  const { updateFormPC, updateFormInv, resetForm } = useStore();
  const [selectedCategory, setSelectedCategory] = useState("pc");

  useEffect(() => {
    resetForm();
    updateFormInv("status", "lab");
    updateFormPC("status", "lab");
    // setSelectedCategory("");
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className="h-screen  bg-[#C4C4C4] relative  ">
        <div className="px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] ">
          <div className="relative  px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md space-y-6 ">
            {/* col 1 */}
            <div className=" h-10 flex lg:flex-row  flex-col justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <h1 className="p-1 font-semibold text-xl ">Input Inventaris</h1>
              </div>
              <div className="flex gap-3">
                <button
                  className={`w-32 h-7 shadow-lg rounded-lg ${
                    selectedCategory === "pc" ? "bg-blue-600" : "bg-blue-800"
                  }  `}
                  onClick={() => setSelectedCategory("pc")}
                >
                  <p className="text-center text-white">Komputer</p>
                </button>
                <button
                  className={`w-32 h-7 shadow-lg rounded-lg ${
                    selectedCategory === "inv" ? "bg-blue-600" : "bg-blue-800"
                  } `}
                  onClick={() => setSelectedCategory("inv")}
                >
                  <p className="text-center text-white">Non Komputer</p>
                </button>
              </div>
            </div>
            {selectedCategory === "pc" ? <FormInputPC /> : <FormInputNonPC />}
          </div>
        </div>
      </div>
    </>
  );
}

export default InvAdminInput;
