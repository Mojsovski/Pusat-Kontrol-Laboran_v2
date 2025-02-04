import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useStore from "../../../data/Data.js";
import useFilterAdmin from "../../../data/filterAdmin.js";
import useCountAdmin from "../../../data/countAdmin.js";

import Sidebar from "../../../components/global/Sidebar.jsx";
import Navbar from "../../../components/global/Navbar.jsx";
import icons from "../../../assets/icons/icon.jsx";
import {
  ConditionAll,
  Condition,
} from "../../../components/global/Condition.jsx";

function InvAllRekap() {
  const { room } = useParams();
  const { fetchData, fetchDataNonPC } = useStore();
  const {
    filterConditionPCAll,
    filterPinjamPC,
    filterDipinjamPC,
    filterPrimaryPC,
    filterLimitInv,
  } = useFilterAdmin();

  const {
    countClient,
    countDosen,
    countLaboran,
    countCadangan,
    countTotal,
    countRusakRingan,
    countRusakBerat,
    countPinjam,
    countDipinjam,
  } = useCountAdmin();

  useEffect(() => {
    fetchData();
    fetchDataNonPC();
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Rekap Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative space-y-6">
        {/* Column 1 */}
        <div className="flex gap-5 relative">
          {/* card 1*/}
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md ">
            <div className=" h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.rekapPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Rekap Inventaris Ruang {room}
                </div>
              </div>
            </div>
            {/* table */}
            <div className="py-8 gap-7 px-10  text-8xl flex flex-row justify-between items-start">
              {/*  1 */}
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">
                    Komputer Cilent
                  </div>
                  <div className="text-base font-semibold">Komputer Dosen</div>
                  <div className="text-base font-semibold">
                    Komputer Laboran
                  </div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">{countClient}</div>
                  <div className="text-base font-semibold">{countDosen}</div>
                  <div className="text-base font-semibold">{countLaboran}</div>
                </div>
              </div>
              {/*  2 */}
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className="text-base font-semibold">
                    Komputer Cadangan
                  </div>
                  <div className=" text-base font-semibold">
                    Komputer Rusak Ringan
                  </div>
                  <div className=" text-base font-semibold">
                    Komputer Rusak Berat
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="text-base font-semibold">{countCadangan}</div>
                  <div className=" text-base font-semibold">
                    {countRusakRingan}
                  </div>
                  <div className=" text-base font-semibold">
                    {countRusakBerat}
                  </div>
                </div>
              </div>
              {/*  3 */}
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">
                    Komputer Pinjam
                  </div>
                  <div className="text-base font-semibold">
                    Komputer Dipinjam
                  </div>
                  <div className="text-base font-semibold">Total PC</div>
                </div>
                <div className="space-y-5">
                  <div className="text-base font-semibold">{countPinjam}</div>
                  <div className="text-base font-semibold">{countDipinjam}</div>
                  <div className="text-base font-semibold">{countTotal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex gap-5 relative  ">
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md ">
            <div className=" h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.rekapPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-lg ">
                  Spesifikasi Komputer Utama
                </div>
              </div>
              <Link
                to={`/admin/inventaris/listPC/${room}`}
                className="px-5 h-6 rounded-2xl bg-[#F5BD45] flex items-center shadow"
              >
                <div className="  text-black text-xs font-medium  ">
                  selengkapnya
                </div>
              </Link>
            </div>
            {/* table */}
            <div className="overflow-x-auto relative ">
              <table className="w-full text-sm  rtl:text-right text-center ">
                <thead className="text-center">
                  <tr>
                    <th scope="col" className="px-1 py-3  ">
                      No
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Nama
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Prosessor
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Motherboard
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      RAM
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Kartu grafis
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Penyimpanan
                    </th>

                    <th scope="col" className="px-1 py-3">
                      Kategori
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterPrimaryPC.map((inv, index) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-4 py-3">
                        {inv.name}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.cpu}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.mobo}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.ram}
                      </td>
                      <td scope="col" className="px-3 py-3">
                        {inv.pc.gpu}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.storage}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* column 3 */}
        <div className=" flex gap-5 relative  ">
          {/* row 1 */}
          <div className=" w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative ">
            <div className=" h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.rekapPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-lg ">
                  Barang Non Komputer
                </div>
              </div>
              <Link
                to={`/admin/inventaris/list/${room}`}
                className="px-5 h-6 rounded-2xl bg-[#F5BD45] flex items-center shadow"
              >
                <div className="  text-black text-xs font-medium  ">
                  selengkapnya
                </div>
              </Link>
            </div>
            {/* table */}
            <div className="overflow-x-auto relative ">
              <table className="w-full text-sm  rtl:text-right text-center ">
                <thead className="text-center">
                  <tr>
                    <th scope="col" className="px-1 py-3  ">
                      No
                    </th>
                    <th scope="col" className="px-7 py-3 ">
                      Nama
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Jumlah
                    </th>
                    <th scope="col" className=" py-3 ">
                      Kondisi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterLimitInv.map((inv, index) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-7 py-3">
                        {inv.name}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.quantity}
                      </td>
                      <td
                        scope="col"
                        className="py-3 flex items-center justify-center "
                      >
                        <Condition condition={inv.condition} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Column 4 */}
        <div className=" flex gap-5 relative ">
          {/* row 1 */}
          <div className=" w-1/2 px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative ">
            <div className=" h-10 flex flex-row gap-4">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Pinjam Komputer</div>
            </div>
            <div className="overflow-x-auto relative ">
              <table className="w-full text-sm  rtl:text-right text-center ">
                <thead className=" text-center">
                  <tr>
                    <th scope="col" className="px-1 py-3  ">
                      No
                    </th>
                    <th scope="col" className="px-10 py-3 ">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterPinjamPC.map((inv, index) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {inv.name}
                      </td>
                      <td
                        scope="col"
                        className="px-1 py-3 flex items-center justify-center"
                      >
                        <p
                          className={`${
                            inv.status === "baik"
                              ? "bg-[#07AC22AB] py-1 w-28 text-white items-center flex justify-center rounded-full shadow "
                              : inv.status === "rusak ringan"
                              ? "bg-[#fdcd49] py-1 w-28 text-black items-center flex justify-center rounded-full shadow "
                              : inv.status === "rusak berat"
                              ? "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                              : inv.status === "pinjam"
                              ? " bg-sky-700 py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                              : inv.status === "dipinjam"
                              ? " bg-indigo-500 py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                              : "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332] shadow "
                          }`}
                        >
                          {inv.status}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* row 2 */}
          <div className="w-1/2  px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={icons.inputPC} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">
                Komputer Dipinjam
              </div>
            </div>
            <div className="overflow-x-auto relative ">
              <table className="w-full text-sm  rtl:text-right text-center ">
                <thead className=" text-center">
                  <tr>
                    <th scope="col" className="px-1 py-3  ">
                      No
                    </th>
                    <th scope="col" className="px-10 py-3 ">
                      Nama
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterDipinjamPC.map((inv, index) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {inv.name}
                      </td>

                      <td
                        scope="col"
                        className="px-1 py-3 flex items-center justify-center"
                      >
                        <p
                          className={`${
                            inv.status === "baik"
                              ? "bg-[#07AC22AB] py-1 w-28 text-white items-center flex justify-center rounded-full shadow "
                              : inv.status === "rusak ringan"
                              ? "bg-[#fdcd49] py-1 w-28 text-black items-center flex justify-center rounded-full shadow "
                              : inv.status === "rusak berat"
                              ? "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                              : inv.status === "pinjam"
                              ? " bg-sky-700 py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                              : inv.status === "dipinjam"
                              ? " bg-indigo-500 py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                              : "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332] shadow "
                          }`}
                        >
                          {inv.status}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Column 5 */}
        <div className="flex gap-5 relative">
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
            <div className="h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">Komputer Rusak</div>
              </div>
            </div>
            <div className="overflow-x-auto relative ">
              <table className="w-full text-sm  rtl:text-right text-center ">
                <thead className="text-center">
                  <tr>
                    <th scope="col" className="px-1 py-3  ">
                      No
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Nama
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Prosessor
                    </th>
                    <th scope="col" className="px-1 py-3">
                      Kategori
                    </th>
                    <th scope="col" className="px-1 py-3">
                      Kondisi
                    </th>
                    <th scope="col" className="px-1 py-3">
                      Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterConditionPCAll.map((inv, index) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-4 py-3">
                        {inv.name}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.cpu}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.category}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        <ConditionAll condition={inv.condition} />
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.pc.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvAllRekap;
