import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/Sidebar.jsx";
import Navbar from "../../../components/Navbar.jsx";
import icons from "../../../assets/icons/icon.jsx";

function InvRekap() {
  const { data, fetchData } = useStore();

  const filteredInv = data.filter((item) => item.status === "rusak ringan");
  const filterPCRusak = data.filter(
    (item) => item.status === "rusak ringan" && item.category === "PC"
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
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
              <Link
                to={"/inventaris/rekap"}
                className="px-5 h-6 rounded-2xl bg-[#F5BD45] flex items-center shadow"
              >
                <div className="  text-black text-xs font-medium  ">
                  selengkapnya
                </div>
              </Link>
            </div>
            {/* table */}
            <div className="py-8 gap-7 px-10  text-8xl flex flex-row justify-between items-start">
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">
                    Komputer Cilent
                  </div>
                  <div className="text-base font-semibold">Komputer Dosen</div>
                  <div className="text-base font-semibold">
                    Komputer Laboran
                  </div>
                  <div className="text-base font-semibold">
                    Komputer Cadangan
                  </div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">Komputer Rusak</div>
                  <div className=" text-base font-semibold">
                    Komputer Pinjam
                  </div>
                  <div className="text-base font-semibold">
                    Komputer Dipinjam
                  </div>
                  <div className="text-base font-semibold">Total PC</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
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
              <div className="p-1 font-semibold text-xl ">Barang Pinjam</div>
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
                      jumlah
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Kondisi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInv.map((inv, index) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {inv.name}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.status}
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
              <div className="p-1 font-semibold text-xl ">Barang Dipinjam</div>
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
                      jumlah
                    </th>
                    <th scope="col" className="px-1 py-3 ">
                      Kondisi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInv.map((inv, index) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {index + 1}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {inv.name}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {inv.status}
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
                  {filterPCRusak.map((inv, index) => (
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
      </div>
    </div>
  );
}

export default InvRekap;
