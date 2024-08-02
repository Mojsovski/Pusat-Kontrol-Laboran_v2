import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import useStore from "../../../data/Data.js";
import { useAuthStore } from "../../../data/Auth.js";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvAdminHome() {
  const { inv, invpc, fetchData, fetchDataNonPC } = useStore();
  const { user } = useAuthStore.getState();

  const filterPrimaryPC = invpc.filter((item) => item.primaryItem === true);

  const filterNonPC = inv
    .filter((item) => item.room)
    .sort((a, b) => a.room.localeCompare(b.room));
  const limitInv = filterNonPC.slice(0, 3);

  const countCategory = (room) =>
    invpc.filter((item) => item.room === room).length;
  const countA = countCategory("D.2.A");
  const countB = countCategory("D.2.B");
  const countC = countCategory("D.2.C");
  const countD = countCategory("D.2.D");
  const countE = countCategory("D.2.E");
  const countF = countCategory("D.2.F");
  const countG = countCategory("D.2.G");
  const countH = countCategory("D.2.H");
  const countI = countCategory("D.2.I");
  const countJ = countCategory("D.2.J");
  const countK = countCategory("D.2.K");
  const countL = countCategory("D.3.L");
  const countM = countCategory("D.3.M");
  const countN = countCategory("D.3.N");
  const countUPT = countCategory("UPT");

  const countDosen = countCategory("dosen");
  const countLaboran = countCategory("laboran");
  const countCadangan = countCategory("cadangan");

  const countStatus = (status) =>
    invpc.filter((item) => item.status === status).length;
  const countPinjam = countStatus("pinjam");
  const countDipinjam = countStatus("dipinjam");

  const countRusak = invpc.filter(
    (item) => item.status === "rusak ringan" || item.status === "rusak berat"
  ).length;

  const countTotal = invpc.filter((item) => item.room).length;

  useEffect(() => {
    fetchData();
    fetchDataNonPC();
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar title="Dashboard" />
      <div className=" h-screen bg-[#C4C4C4]  ">
        <div className=" px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] space-y-6">
          {/* column 1 */}
          <div className=" flex flex-col xl:flex-row gap-5  ">
            {/* button */}
            <div className="flex flex-col  justify-between space-y-3 ">
              <Link
                to={"/admin/inventaris/input"}
                className="xl:w-[270px]  h-[50px] rounded-xl bg-neutral-300  hover:bg-neutral-100 shadow-md flex flex-row items-center justify-center gap-4 font-semibold"
              >
                <img src={icons.inputPC} className="md:w-[19px] w-[14px] " />
                Input Inventaris Lab
              </Link>
              <Link
                to={"/admin/inventaris/list-nonpc"}
                className="xl:w-[270px]  h-[50px] rounded-xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row items-center justify-center gap-4 font-semibold"
              >
                <img src={icons.editPC} className="w-[21px] " />
                Edit Inventaris Lab
              </Link>
              <Link
                to={"/downloadrekap"}
                className="xl:w-[270px] h-[50px] rounded-xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row items-center justify-center gap-4 font-semibold"
              >
                <img src={icons.verifikasiPC} className="w-[19px] " />
                Verifikasi Bulanan
              </Link>
            </div>

            {/* card 1*/}
            <div className=" px-8 py-5 w-full bg-neutral-300 rounded-3xl shadow-md   ">
              <div className=" flex flex-row justify-between items-center">
                <div className="flex flex-row gap-4 ">
                  <img src={icons.rekapPC} className="w-[25px] " />
                  <div className="p-1 font-semibold text-xl ">
                    Rekap Komputer
                  </div>
                </div>
                <Link
                  to={"/admin/inventaris/ruanglab"}
                  className="px-5 h-6 rounded-2xl bg-[#F5BD45] hover:bg-yellow-400 flex items-center shadow"
                >
                  <div className="  text-black text-xs font-medium  ">
                    selengkapnya
                  </div>
                </Link>
              </div>
              {/* table */}
              <div className="flex-col lg:flex-row py-5 gap-7 px-5 text-8xl flex  justify-between items-start relative ">
                {/*  1 */}
                <div className="flex justify-start gap-3 ">
                  <div className="space-y-5 ">
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className=" text-base font-semibold">D.2.A</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.B</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.C</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.D</h2>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className=" text-base font-semibold">{countA}</h2>
                    <h2 className="text-base font-semibold">{countB}</h2>
                    <h2 className="text-base font-semibold">{countC}</h2>
                    <h2 className="text-base font-semibold">{countD}</h2>
                  </div>
                </div>
                {/*  2 */}
                <div className="flex justify-start gap-3">
                  <div className="space-y-5">
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.E</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.F</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.G</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.H</h2>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-base font-semibold">{countE}</h2>
                    <h2 className="text-base font-semibold">{countF}</h2>
                    <h2 className="text-base font-semibold">{countG}</h2>
                    <h2 className=" text-base font-semibold">{countH}</h2>
                  </div>
                </div>
                <div className="flex justify-start gap-3">
                  <div className="space-y-5">
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.I</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.J</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.2.K</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.3.L</h2>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-base font-semibold">{countI}</h2>
                    <h2 className="text-base font-semibold">{countJ}</h2>
                    <h2 className="text-base font-semibold">{countK}</h2>
                    <h2 className="text-base font-semibold">{countL}</h2>
                  </div>
                </div>
                {/*  3 */}
                <div className="flex justify-start gap-3">
                  <div className="space-y-5">
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.3.M</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">D.3.N</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">UPT</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Total PC</h2>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-base font-semibold">{countM}</h2>
                    <h2 className="text-base font-semibold">{countN}</h2>
                    <h2 className="text-base font-semibold">{countUPT}</h2>
                    <h2 className="text-base font-semibold">{countTotal}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className=" w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md ">
            <div className=" h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.rekapPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-lg ">
                  Spesifikasi Komputer Utama
                </div>
              </div>
              <Link
                to={"/admin/inventaris/list-PC"}
                className="px-5 h-6 rounded-2xl bg-[#F5BD45] hover:bg-yellow-400 flex items-center shadow"
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

          {/* column 3 */}
          {/* <div className="flex gap-5 relative  ">
          <div className="w-full h-[277px] px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={icons.rekapPC} className="w-[35px] " />
              <div className="p-1 font-semibold text-xl ">Rekap</div>
            </div>
            <div className="h-32 text-center text-8xl flex justify-center items-center ">
              D.2.I
            </div>
            <div className="h-10 text-center text-base flex justify-center items-center ">
              Shift : Siang (14.00-21.00)
            </div>
            <div className="h-9 flex justify-center items-center">
              <div className="w-36 h-7 py-1 rounded-2xl bg-[#07AC22]">
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
                <div className=" text-center text-white text-sm flex items-center justify-center "></div>
              </div>
            </div>
          </div>
        </div> */}

          {/* column 4 */}
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
                  className="px-5 h-6 rounded-2xl bg-[#F5BD45] hover:bg-yellow-400 flex items-center shadow"
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
                        Ruang
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
                          {inv.room}
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
            {/* row 2 */}
            {/* <div className="w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={icons.rekapPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Rekap</div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default InvAdminHome;
