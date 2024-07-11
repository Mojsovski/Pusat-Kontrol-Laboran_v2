import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvHome() {
  const { data, fetchData } = useStore();

  const filterDefaultPC = data.filter((item) => item.primaryItem === true);
  const filterNonPC = data.filter((item) => item.category === "Non PC");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative space-y-6">
        {/* column 1 */}
        <div className="flex gap-5 relative">
          {/* button */}
          <div className="w-96 h-10 gap-3 bg space-y-7 relative">
            <Link
              to={"/inventaris/input"}
              className="relative w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={icons.inputPC} className="w-[19px] " />
              Input Inventaris Lab
            </Link>
            <Link
              to={"/inventaris/list-nonpc"}
              className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={icons.editPC} className="w-[21px] " />
              Edit Inventaris Lab
            </Link>
            <Link
              to={"/inventaris/input"}
              className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={icons.verifikasiPC} className="w-[19px] " />
              Verifikasi Bulanan
            </Link>
            <Link
              to={"/inventaris/input"}
              className="w-full h-12 rounded-3xl bg-neutral-300 hover:bg-neutral-100 shadow-md flex flex-row px-7 py-2 items-center gap-4 font-semibold"
            >
              <img src={icons.inputPC} className="w-[19px]" />
              Input Inventaris
            </Link>
          </div>

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
            <div className="py-5 gap-7 px-5 h-[169px]  text-8xl flex flex-row justify-between items-start">
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">PC Cilent</div>
                  <div className="text-base font-semibold">PC Dosen</div>
                  <div className="text-base font-semibold">PC Laboran</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">PC Cadangan</div>
                  <div className="text-base font-semibold">PC Rusak</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
                  <div className="text-base font-semibold">30</div>
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <div className="space-y-5">
                  <div className=" text-base font-semibold">PC Pinjam</div>
                  <div className="text-base font-semibold">PC Dipinjam</div>
                  <div className="text-base font-semibold">Total PC</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                  <div className="text-base font-semibold">:</div>
                </div>
                <div className="space-y-5">
                  <div className=" text-base font-semibold">30</div>
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

        {/* column 2 */}
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
                to={"/inventaris/list-PC"}
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
                  {filterDefaultPC.map((inv, index) => (
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
                to={"/inventaris/list-nonpc"}
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
                  {filterNonPC.map((inv, index) => (
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
          <div className="w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
            <div className=" h-10 flex flex-row gap-4">
              <img src={icons.rekapPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Rekap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvHome;
