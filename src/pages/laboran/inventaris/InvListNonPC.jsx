import React from "react";
import useStore from "../../data/Data";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvListPC() {
  const inv = useStore((state) => state.inv);
  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative ">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Inventaris
              </div>
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
                {inv.map((data) => (
                  <tr>
                    <td scope="col" className="px-1 py-3">
                      {data.id}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {data.invNama}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {data.invCPU}
                    </td>
                    <td scope="col" className="px-1 py-3">
                      {data.invRAM}
                    </td>
                    <td scope="col" className="px-3 py-3">
                      {data.invGPU}
                    </td>
                    <td scope="col" className="px-1 py-3">
                      {data.invStorage}
                    </td>
                    <td scope="col" className="px-1 py-3">
                      {data.invCategory}
                    </td>
                    <td
                      scope="col"
                      className="px-1 py-3 flex items-center justify-center"
                    >
                      <p
                        className={`${
                          data.invStatus === "baik"
                            ? "bg-[#07AC22AB] py-1 w-28 text-white items-center flex justify-center rounded-full shadow "
                            : data.invStatus === "rusak ringan"
                            ? "bg-[#fdcd49] py-1 w-28 text-black items-center flex justify-center rounded-full shadow "
                            : data.invStatus === "rusak berat"
                            ? "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                            : "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332] shadow "
                        }`}
                      >
                        {data.invStatus}
                      </p>
                    </td>
                    <td className="px-1 py-3 ">
                      <div className="w-full flex justify-center">
                        <button className="bg-[#fdcd49] py-1 w-20  items-center flex justify-center rounded-full shadow">
                          detail
                        </button>
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

export default InvListPC;
