import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  BsCpu,
  BsMotherboard,
  BsMemory,
  BsGpuCard,
  BsDeviceSsd,
  BsMouse3,
  BsKeyboard,
} from "react-icons/bs";
import { BiPowerOff, BiNote } from "react-icons/bi";
import { PiMonitorLight } from "react-icons/pi";
import { TbHomeMove } from "react-icons/tb";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import useStore from "../../../data/Data.js";
import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchDataById, formPC, invpc } = useStore();

  function conditionPC(condition) {
    if (condition === "baik") {
      return "bg-[#07AC22AB] my-1 w-20 text-white text-sm items-center flex justify-center rounded-full shadow";
    } else if (condition === "rusak ringan") {
      return "bg-[#fdcd49] my-1 w-24 text-black text-sm items-center flex justify-center rounded-full shadow";
    } else if (condition === "rusak berat") {
      return "bg-[#FF0000] my-1 w-24 text-white text-sm items-center flex justify-center rounded-full shadow";
    } else {
      return "bg-[#FF0000] my-1 w-20 text-white text-sm items-center flex justify-center rounded-full shadow";
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
      <Navbar title="Inventaris" showButtonBack={true} />
      <div className="h-screen bg-[#C4C4C4] relative flex-wrap ">
        <div className="px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4]">
          <div className="relative  px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md space-y-6">
            <div className="h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Detail Inventaris PC
                </div>
              </div>
              <div className="space-x-3 flex">
                <div className="rounded-2xl bg-blue-700 px-3">
                  <p className="text-white">
                    Ditambahkan :
                    {new Date(formPC.created_at).toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="rounded-2xl bg-blue-700 px-3">
                  <p className="text-white">
                    Diedit :
                    {formPC.updated_at
                      ? new Date(formPC.updated_at).toLocaleString("id-ID")
                      : "belum pernah"}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 lg:px-11 flex flex-col lg:flex-row lg:flex-auto justify-between my-3 lg:space-x-10">
              {/* row 1 */}
              <div className="space-y-7 md:space-y-6 lg:w-1/2">
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-start items-center gap-3">
                    <label className="font-medium ">Nama Komputer</label>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.name}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsCpu className=" size-5" />
                      <label className="font-medium ">Prosessor</label>
                    </div>
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
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsMotherboard className=" size-5" />
                      <label className="font-medium ">Motherboard</label>
                    </div>
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
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsMemory className=" size-5" />
                      <label className="font-medium ">RAM</label>
                    </div>
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
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsGpuCard className=" size-5" />
                      <label className="font-medium ">Kartu Grafis</label>
                    </div>
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
                  <div className="mx-3 my-2 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BiNote className=" size-5" />
                      <label className="font-medium ">Keterangan</label>
                    </div>
                  </div>
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
                  <div className="mx-3 my-1 flex justify-start items-center gap-3">
                    <label className="font-medium ">Kategori</label>
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formPC.pc.category}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsDeviceSsd className=" size-5" />
                      <label className="font-medium ">Penyimpanan</label>
                    </div>
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
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsKeyboard className=" size-5" />
                      <label className="font-medium ">Keyboard</label>
                    </div>
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
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsMouse3 className=" size-5" />
                      <label className="font-medium ">mouse</label>
                    </div>
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
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <PiMonitorLight className=" size-5" />
                      <label className="font-medium text-center ">
                        Monitor
                      </label>
                    </div>
                    <div className={conditionPC(formPC.condition.monitor)}>
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
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BiPowerOff className=" size-5" />
                      <label className="font-medium ">Power Supply</label>
                    </div>
                    <div className={conditionPC(formPC.condition.keyboard)}>
                      {formPC.condition.keyboard}
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
            <div className=" px-11 pt-14 flex flex-col lg:flex-row justify-between gap-5">
              <div className="flex lg:flex-row flex-col gap-3">
                <Link
                  to={`/inventaris/editpc/${formPC.id}`}
                  className="bg-[#fdcd49] hover:bg-yellow-300 px-9 py-2 h-10 space-x-3 items-center flex justify-center rounded-xl shadow"
                >
                  <EditRoundedIcon sx={{ fontSize: 20 }} />
                  <p className="text-center">Edit</p>
                </Link>
                <Link
                  to={`/inventaris/pindah/pc/${formPC.id}`}
                  className="bg-sky-700 hover:bg-sky-600 px-9 py-2 h-10 space-x-3 items-center flex justify-center rounded-xl shadow"
                >
                  <TbHomeMove className="text-white size-5" />
                  <p className="text-center text-white">Pindah</p>
                </Link>
              </div>
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
