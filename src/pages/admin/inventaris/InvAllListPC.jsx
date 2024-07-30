import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/global/Sidebar.jsx";
import Navbar from "../../../components/global/Navbar.jsx";
import icons from "../../../assets/icons/icon.jsx";

function InvAllListPC() {
  const { room } = useParams();
  const { invpc, fetchData } = useStore();

  const filterUser = invpc.filter((inv) => inv.room === room);
  const filterPC = filterUser.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center justify-between">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Inventaris
              </div>
            </div>
            <Link
              to={"/admin/inventaris/input"}
              className="px-5 h-6 rounded-2xl bg-blue-800 hover:bg-blue-700 flex items-center shadow"
            >
              <div className="  text-white text-xs font-medium  ">
                input inventaris
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
                  <th scope="col" className="px-4 py-3 ">
                    Prosessor
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
                  <th scope="col" className="px-1 py-3 ">
                    Kondisi
                  </th>
                  <th scope="col" className="px-1 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterPC.map((inv, index) => (
                  <tr key={inv.id}>
                    <td scope="col" className="px-1 py-3">
                      {index + 1}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {inv.name}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {inv.pc.cpu}
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
                    <td className="px-1 py-3 ">
                      <div className="w-full flex justify-center">
                        <Link
                          to={`/admin/inventaris/detail/${inv.id}`}
                          className="bg-[#fdcd49] py-1 w-20  items-center flex justify-center rounded-full shadow"
                        >
                          detail
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvAllListPC;
