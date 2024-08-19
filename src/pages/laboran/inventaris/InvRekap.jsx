import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import useStore from "../../../data/Data.js";
import useFilters from "../../../data/filter.js";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";
import Condition from "../../../components/global/Condition.jsx";
import {
  MoveButton,
  HomeBackButton,
} from "../../../components/global/ActionButton.jsx";

function InvRekap() {
  const {
    fetchData,
    fetchDataNonPC,
    fetchMovePC,
    handleMoveFormPC,
    updateForm,
  } = useStore();

  const {
    filterStatus,
    filterPinjam,
    filterDipinjam,
    filterRusak,
    filterPrimaryPC,
    limitInv,
    countClient,
    countDosen,
    countLaboran,
    countCadangan,
    countPinjam,
    countDipinjam,
    countRusak,
    countTotal,
  } = useFilters();

  const handleBackHome = (id) => {
    Swal.fire({
      title: "Mengembalikan barang",
      text: "Apa kamu ingin mengembalikan barang?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "batal",
      confirmButtonText: "Ya, kembalikan inventaris!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Fetch the current data by ID
        const currentData = await fetchMovePC(id);

        // Update the formPC state
        handleMoveFormPC("status", "lab");
        handleMoveFormPC("roomOld", "");
        handleMoveFormPC("roomNew", "");
        handleMoveFormPC("room", currentData.roomOld);

        await updateForm();
        await fetchData();
        Swal.fire({
          title: "Mengembalikan Barang",
          text: "Inventaris sudah dikembalikan ke tempat asal.",
          icon: "success",
          timer: 700,
          showConfirmButton: false,
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
    fetchDataNonPC();
    document.title = "Rekap - Pusat Kontrol Laboran";
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar title="Rekap Inventaris" />
      <div className="h-screen bg-[#C4C4C4] relative  ">
        <div className=" px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] space-y-6">
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
          {/* Column 2 */}
          <div className=" flex lg:flex-row flex-col gap-5 relative ">
            {/* row 1 */}
            <div className=" lg:w-1/2 px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative ">
              <div className=" h-10 flex flex-row gap-4">
                <img src={icons.inputPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Pinjam Komputer
                </div>
              </div>
              <div className="overflow-x-auto relative ">
                <table className="w-full text-sm  rtl:text-right text-center ">
                  <thead className=" text-center">
                    <tr>
                      <th scope="col" className="px-1 py-3  ">
                        No
                      </th>
                      <th scope="col" className="px-7 py-3 ">
                        Nama
                      </th>
                      <th scope="col" className="px-1 py-3 ">
                        Lokasi Peminjam
                      </th>
                      <th scope="col" className="px-1 py-3">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterPinjam.map((inv, index) => (
                      <tr>
                        <td scope="col" className="px-1 py-3">
                          {index + 1}
                        </td>
                        <td scope="col" className="px-3 py-3">
                          {inv.name}
                        </td>
                        <td
                          scope="col"
                          className="px-1 py-3 flex justify-center"
                        >
                          <div className=" rounded-2xl px-2 w-20 bg-sky-700">
                            <p className="text-white">{inv.roomNew}</p>
                          </div>
                        </td>
                        <td className="px-1 py-3 ">
                          <div className="w-full flex justify-center gap-2">
                            <HomeBackButton
                              onClick={() => handleBackHome(inv.id)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* row 2 */}
            <div className="lg:w-1/2  px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md relative">
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
                      <th scope="col" className="px-6 py-3 ">
                        Nama
                      </th>
                      <th scope="col" className="px-1 py-3 ">
                        Lokasi Sekarang
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterDipinjam.map((inv, index) => (
                      <tr>
                        <td scope="col" className="px-1 py-3">
                          {index + 1}
                        </td>
                        <td scope="col" className="px-3 py-3">
                          {inv.name}
                        </td>
                        <td
                          scope="col"
                          className="px-1 py-3 flex justify-center"
                        >
                          <div className=" rounded-2xl px-2 w-20 bg-sky-700">
                            <p className="text-white">{inv.room}</p>
                          </div>
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
                  <div className="p-1 font-semibold text-xl ">
                    Komputer Rusak
                  </div>
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
                      <th scope="col" className="px-5 py-3">
                        Keterangan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
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
                        <td scope="col" className="px-1 py-3">
                          <Condition condition={inv.condition} />
                        </td>
                        <td scope="col" className="px-5 py-3">
                          {inv.comment}
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
    </>
  );
}

export default InvRekap;
