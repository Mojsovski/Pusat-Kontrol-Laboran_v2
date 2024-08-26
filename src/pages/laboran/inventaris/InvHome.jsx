import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import useStore from "../../../data/Data.js";
import { useAuthStore } from "../../../data/Auth.js";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import Condition from "../../../components/global/Condition.jsx";

function InvHome() {
  const { inv, invpc, fetchData, fetchDataNonPC } = useStore();
  const { user } = useAuthStore.getState();

  const filterPrimaryPC = invpc.filter(
    (item) => item.primaryItem === true && item.room === user.user_metadata.room
  );

  const filterNonPC = inv.filter(
    (item) => item.room === user.user_metadata.room
  );
  const limitInv = filterNonPC.slice(0, 3);

  const countCategory = (category) =>
    invpc.filter(
      (item) =>
        item.pc.category === category && item.room === user.user_metadata.room
    ).length;
  const countClient = countCategory("client");
  const countDosen = countCategory("dosen");
  const countLaboran = countCategory("laboran");
  const countCadangan = countCategory("cadangan");

  const countStatus = (status) =>
    invpc.filter(
      (item) => item.status === status && item.room === user.user_metadata.room
    ).length;
  const countPinjam = countStatus("pinjam");
  const countDipinjam = countStatus("dipinjam");

  const countRusak = invpc.filter(
    (item) =>
      (item.status === "rusak ringan" || item.status === "rusak berat") &&
      item.room === user.user_metadata.room
  ).length;

  const countTotal = invpc.filter(
    (item) => item.room === user.user_metadata.room
  ).length;

  useEffect(() => {
    fetchData();
    fetchDataNonPC();
    document.title = "Dashboard - Pusat Kontrol Laboran";
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
                to={"/inventaris/input"}
                className="xl:w-[270px]  h-[50px] rounded-xl bg-neutral-300  hover:bg-neutral-100 shadow-md flex flex-row items-center justify-center gap-4 font-semibold"
              >
                <img src={icons.inputPC} className="md:w-[19px] w-[14px] " />
                Input Inventaris Lab
              </Link>
              <Link
                to={"/inventaris/list-nonpc"}
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
                    Rekap Komputer {user.user_metadata.room}
                  </div>
                </div>
                <Link
                  to={"/inventaris/rekap"}
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
                      <h2 className=" text-base font-semibold">Cilent</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Dosen</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Laboran</h2>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className=" text-base font-semibold">{countClient}</h2>
                    <h2 className="text-base font-semibold">{countDosen}</h2>
                    <h2 className="text-base font-semibold">{countLaboran}</h2>
                  </div>
                </div>
                {/*  2 */}
                <div className="flex justify-start gap-3">
                  <div className="space-y-5">
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Cadangan</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Rusak</h2>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-base font-semibold">{countCadangan}</h2>
                    <h2 className=" text-base font-semibold">{countRusak}</h2>
                  </div>
                </div>
                {/*  3 */}
                <div className="flex justify-start gap-3">
                  <div className="space-y-5">
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Pinjam</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Dipinjam</h2>
                    </div>
                    <div className="flex gap-2">
                      <img src={icons.editPC} className="w-[25px] " />
                      <h2 className="text-base font-semibold">Total PC</h2>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-base font-semibold">{countPinjam}</h2>
                    <h2 className="text-base font-semibold">{countDipinjam}</h2>
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
                to={"/inventaris/list-PC"}
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
                  to={"/inventaris/list-nonpc"}
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
                          <Condition condition={inv.condition} />
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

export default InvHome;
