import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchDataById, formPC } = useStore();

  function conditionPC(condition) {
    switch (condition) {
      case "baik":
        return "bg-[#07AC22AB] my-1 w-20 text-white text-sm items-center flex justify-center rounded-full shadow";
      case "rusak ringan":
        return "bg-[#fdcd49] py-1 w-28 text-black items-center flex justify-center rounded-full shadow";
      case "rusak berat":
        return "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-white shadow";
      default:
        return "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332] shadow";
    }
  }

  useEffect(() => {
    if (id) {
      fetchDataById(id);
    }
    document.title = `Detail PC ${formPC.name} - Pusat Kontrol Laboran`;
  }, [id]);

  return (
    <>
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className="h-screen bg-[#C4C4C4] relative  ">
        <div className="px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4]">
          <div className="relative  px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md space-y-6">
            <div className="h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Detail Inventaris PC
                </div>
              </div>
            </div>
            <div className="px-5 lg:px-11 flex flex-col lg:flex-row lg:flex-auto justify-between my-3 lg:space-x-10">
              {/* row 1 */}
              <div className="space-y-7 md:space-y-6 lg:w-1/2">
                <div className="my-2">
                  <div className="flex justify-start">
                    <label className="px-3 font-medium ">Nama Komputer</label>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.name}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Prosessor</label>
                    <div className={conditionPC(formPC.condition.cpu)}>
                      {formPC.condition.cpu}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.cpu}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Motherboard</label>
                    <div className={conditionPC(formPC.condition.mobo)}>
                      {formPC.condition.mobo}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.mobo}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">RAM</label>
                    <div className={conditionPC(formPC.condition.ram)}>
                      {formPC.condition.ram}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.ram}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Kartu Grafis</label>
                    <div className={conditionPC(formPC.condition.gpu)}>
                      {formPC.condition.gpu}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.gpu}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium ">Keterangan</label>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.comment || "tidak ada"}
                    </div>
                  </div>
                </div>
              </div>
              {/* row 2 */}
              <div className="space-y-7 md:space-y-6 lg:w-1/2">
                <div className="my-2">
                  <label className="px-3 font-medium ">Kategori komputer</label>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.category}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Penyimpanan</label>
                    <div className={conditionPC(formPC.condition.storage)}>
                      {formPC.condition.storage}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.storage}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Keyboard</label>
                    <div className={conditionPC(formPC.condition.keyboard)}>
                      {formPC.condition.keyboard}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.keyboard}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Mouse</label>
                    <div className={conditionPC(formPC.condition.mouse)}>
                      {formPC.condition.mouse}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.mouse}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Monitor</label>
                    <div className={conditionPC(formPC.condition.mobo)}>
                      {formPC.condition.monitor}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.monitor}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <label className="px-3 font-medium ">Power Supplay</label>
                    <div className={conditionPC(formPC.condition.psu)}>
                      {formPC.condition.psu}
                    </div>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.psu}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-11 pt-14 flex flex-col lg:flex-row justify-between items-center space-y-5">
              <button>
                <Link
                  to={`/inventaris/editpc/${formPC.id}`}
                  className="px-16 py-2  shadow-lg rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black"
                >
                  edit
                </Link>
              </button>
              <button
                type="submit"
                className="px-16 py-2  shadow-lg rounded-xl  bg-blue-800 hover:bg-blue-700 text-white"
                onClick={() => navigate(-1)}
              >
                kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvDetail;
