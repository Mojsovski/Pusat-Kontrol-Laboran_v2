import React, { useEffect } from "react";
import { create } from "zustand";
import { useAuthStore } from "../../../data/Auth";
import useStore from "../../../data/Data";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import TableInputNonPC from "../../../components/admin/InvTableInput.jsx";
import TableInputPC from "../../../components/admin/InvTableInputPC.jsx";

const useCategory = create((set) => ({
  selectedCategory: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

function InvAdminInput() {
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
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col  bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md">
          {/* col 1 */}
          <div className=" h-10 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Input Inventaris</div>
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

          {selectedCategory === "PC" && <TableInputPC />}
          {selectedCategory === "Non PC" && <TableInputNonPC />}
        </div>
      </div>
    </div>
  );
}

export default InvAdminInput;
