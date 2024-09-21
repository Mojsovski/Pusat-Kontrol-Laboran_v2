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

import useLogStore from "../../../data/Log.js";

import Sidebar from "../../../components/global/Sidebar.jsx";
import Navbar from "../../../components/global/Navbar.jsx";
import icons from "../../../assets/icons/icon.jsx";
import {
  Action,
  ConditionDetail,
} from "../../../components/global/Condition.jsx";

function LogPCDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formlogpc, logpc, fetchLogById } = useLogStore();

  useEffect(() => {
    if (id) {
      fetchLogById(id);
    }
    document.title = `Detail PC ${formlogpc.name} - Pusat Kontrol Laboran`;
  }, [id]);

  return (
    <>
      <Sidebar />
      <Navbar title="Log" showButtonBack={true} />
      <div className="h-screen bg-[#C4C4C4] relative flex-wrap ">
        <div className="px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4]">
          <div className="relative  px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md ">
            <div className="h-10 flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Detail Log Aktifitas Inventaris PC
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <Action action={formlogpc.action} />
                <div className="flex flex-col rounded-2xl bg-blue-700 px-3">
                  <p className="text-white">
                    Ditambahkan :
                    {new Date(formlogpc.log_time).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-end">
              <div className="rounded-2xl bg-blue-700 px-3">
                <p className="text-white">id barang :{formlogpc.id}</p>
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
                      {formlogpc.name}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsCpu className=" size-5" />
                      <label className="font-medium ">Prosessor</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.cpu} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.cpu}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsMotherboard className=" size-5" />
                      <label className="font-medium ">Motherboard</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.mobo} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.mobo}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsMemory className=" size-5" />
                      <label className="font-medium ">RAM</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.ram} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.ram}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsGpuCard className=" size-5" />
                      <label className="font-medium ">Kartu Grafis</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.gpu} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.gpu}
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
                      {formlogpc.comment || "tidak ada"}
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
                      {formlogpc.pc.category}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsDeviceSsd className=" size-5" />
                      <label className="font-medium ">Penyimpanan</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.storage} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.storage}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsKeyboard className=" size-5" />
                      <label className="font-medium ">Keyboard</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.keyboard} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.keyboard}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BsMouse3 className=" size-5" />
                      <label className="font-medium ">mouse</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.mouse} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.mouse}
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
                    <ConditionDetail condition={formlogpc.condition.monitor} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.monitor}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <div className="mx-3 my-1 flex justify-between items-center ">
                    <div className="flex justify-start gap-3 items-center">
                      <BiPowerOff className=" size-5" />
                      <label className="font-medium ">Power Supply</label>
                    </div>
                    <ConditionDetail condition={formlogpc.condition.psu} />
                  </div>
                  <div className="  h-10 shadow-lg rounded-3xl bg-white">
                    <div className="block text-base pl-4 p-2 bg-[#c9c9c944] w-full h-full rounded-3xl focus:outline-none ">
                      {formlogpc.pc.psu}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogPCDetail;
