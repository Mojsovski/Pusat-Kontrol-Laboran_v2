import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "../../../data/Data.js";
import { useAuthStore } from "../../../data/Auth.js";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvAdminRekap() {
  const { inv, invpc, fetchData, fetchDataNonPC } = useStore();
  const { user } = useAuthStore.getState();

  //filter
  //pc
  const filterStatus = (status) =>
    invpc.filter((item) => item.status === status && item.room === "D.2.I");
  const filterPinjam = filterStatus("pinjam");
  const filterDipinjam = filterStatus("dipinjam");
  const filterRusak = invpc.filter(
    (item) =>
      (item.status === "rusak ringan" || item.status === "rusak berat") &&
      item.room === "D.2.I"
  );
  const filterPrimaryPC = invpc.filter(
    (item) => item.primaryItem === true && item.room === "D.2.I"
  );
  //non pc
  const limitInv = inv.filter((item) => item.room === "D.2.I").slice(0, 3);

  // count by category
  const countCategory = (category) =>
    invpc.filter(
      (item) => item.pc.category === category && item.room === "D.2.I"
    ).length;
  const countClient = countCategory("client");
  const countDosen = countCategory("dosen");
  const countLaboran = countCategory("laboran");
  const countCadangan = countCategory("cadangan");

  //count by status
  const countStatus = (status) =>
    invpc.filter((item) => item.status === status && item.room === "D.2.I")
      .length;
  const countRusak = invpc.filter(
    (item) =>
      (item.status === "rusak ringan" || item.status === "rusak berat") &&
      item.room === "D.2.I"
  ).length;
  const countPinjam = countStatus("pinjam");
  const countDipinjam = countStatus("dipinjam");

  //count all inv pc
  const countTotal = invpc.filter((item) => item.room === "D.2.I").length;

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
                  Rekap Inventaris
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
                  <div className=" text-base font-semibold">Komputer Rusak</div>
                </div>
                <div className="space-y-5">
                  <div className="text-base font-semibold">{countCadangan}</div>
                  <div className=" text-base font-semibold">{countRusak}</div>
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
            <div className=" flex justify-between ">
              <div className="px-5 h-7 rounded-2xl bg-[#0F4C92] shadow flex items-center justify-center">
                <div className=" text-center text-white text-xs  ">
                  terakhir update : 14 Juni 2023
                </div>
              </div>
              <div className="px-5 h-7 rounded-2xl bg-[#FF0000] shadow flex items-center justify-center ">
                <div className=" text-center text-white text-xs ">
                  belum verifikasi
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Column 2 */}
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
                  {filterPinjam.map((inv, index) => (
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
                  {filterDipinjam.map((inv, index) => (
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
        {/* Column 3 */}
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
                <tbody clas>
                  {filterRusak.map((inv, index) => (
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
        {/* Column 4 */}
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
                to={"/admin/inventaris/list-PC"}
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
        {/* column 5 */}
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
                to={"/admin/inventaris/list-nonpc"}
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
                  {limitInv.map((inv, index) => (
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
      </div>
    </div>
  );
}

export default InvAdminRekap;
