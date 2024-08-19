import React, { useEffect } from "react";
import { create } from "zustand";
import { useAuthStore } from "../../../data/Auth";
import useStore from "../../../data/Data";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import FormInputNonPC from "../../../components/laboran/FormInput.jsx";
import FormInputPC from "../../../components/laboran/FormInputPC.jsx";

const useCategory = create((set) => ({
  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

function InvInput() {
  const { updateFormPC, updateFormInv, resetForm } = useStore();
  const { user } = useAuthStore((state) => ({ user: state.user }));
  const { selectedCategory, setSelectedCategory } = useCategory();

  useEffect(() => {
    resetForm();
    setSelectedCategory("");
    if (user) {
      updateFormPC("room", user.user_metadata.room);
      updateFormInv("room", user.user_metadata.room);
    }
  }, [user]);

  return (
    <>
      <Sidebar />
      <Navbar title="Inventaris" showButtonBack={true} />
      <div className="h-screen  bg-[#C4C4C4] relative  ">
        <div className="px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] ">
          <div className="relative  px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md space-y-6 ">
            {/* col 1 */}
            <div className=" h-10 flex lg:flex-row  flex-col justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <h1 className="p-1 font-semibold text-xl ">Input Inventaris</h1>
              </div>
              <div className="my-2 ">
                <div className=" w-60 h-7 shadow-lg rounded-3xl bg-white">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    type="text"
                    id="category"
                    name="category"
                    className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="NIM/NPP"
                  >
                    <option value="">Pilih jenis barang</option>
                    <option value="PC">Komputer</option>
                    <option value="Non PC">Non Komputer</option>
                  </select>
                </div>
              </div>
            </div>

            {selectedCategory === "PC" && <FormInputPC />}
            {selectedCategory === "Non PC" && <FormInputNonPC />}
          </div>
        </div>
      </div>
    </>
  );
}

export default InvInput;
