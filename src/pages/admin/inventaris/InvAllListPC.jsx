import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DrawIcon from "@mui/icons-material/Draw";
import HomeIcon from "@mui/icons-material/Home";

import useStore from "../../../data/Data.js";
import usePaginationStore from "../../../data/Pagination.js";

import Sidebar from "../../../components/global/Sidebar.jsx";
import Navbar from "../../../components/global/Navbar.jsx";
import icons from "../../../assets/icons/icon.jsx";
import Pagination from "../../../components/global/Pagination.jsx";

function InvAllListPC() {
  const { room } = useParams();
  const { invpc, fetchData } = useStore();
  const { currentPage, itemsPerPage, setCurrentPage } = usePaginationStore();

  const filterUser = invpc.filter((inv) => inv.room === room);
  const filterPC = filterUser.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterPC.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative px-8 py-5  bg-neutral-300 rounded-3xl flex-col shadow-md space-y-6">
          <div className="h-10 flex lg:flex-row  flex-col justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Inventaris
              </div>
            </div>
            <div className="my-2 flex gap-2 ">
              <Link
                to={`/admin/inventaris/rekap/${room}`}
                className="px-4 py-1 shadow-lg rounded-xl bg-blue-800 hover:bg-blue-600 text-white text-sm"
              >
                <HomeIcon />
              </Link>
              <Link
                to={"/admin/inventaris/input"}
                className="px-4 py-1 shadow-lg rounded-xl bg-blue-800 hover:bg-blue-600 text-white text-sm"
              >
                <DrawIcon /> Input Inventaris
              </Link>
            </div>
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
                {currentItems.map((inv, index) => (
                  <tr key={inv.id}>
                    <td scope="col" className="px-1 py-3">
                      {indexOfFirstItem + index + 1}
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
                          className="bg-[#fdcd49] hover:bg-yellow-300 py-1 w-20  items-center flex justify-center rounded-xl shadow"
                        >
                          <SettingsSuggestIcon />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filterPC.length / itemsPerPage)}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvAllListPC;
