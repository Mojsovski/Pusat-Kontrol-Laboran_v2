import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import logoInput from "../../assets/icons/pcinput.svg";
import { Link } from "react-router-dom";
import useStore from "../../data/Data";

import logoInputPC from "../../assets/icons/pcinput.svg";
import logoEditPC from "../../assets/icons/pcedit.svg";
import logoVerifikasi from "../../assets/icons/verifikasi.svg";
import logoRekap from "../../assets/icons/inv2.svg";

function InvRekap() {
  const inv = useStore((state) => state.inv);
  const filteredInv = inv.filter(
    (item) => item.invStatus === "rusak berat" || item.invStatus === "baik"
  );

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
                <img src={logoRekap} className="w-[25px] " />
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
        {/* Column 3 */}
        <div className="flex gap-5 relative">
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
            <div className="h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={logoInput} className="w-[25px] " />
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
                  {filteredInv.map((data) => (
                    <tr>
                      <td scope="col" className="px-1 py-3">
                        {data.id}
                      </td>
                      <td scope="col" className="px-4 py-3">
                        {data.invNama}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {data.invCPU}
                      </td>
                      <td scope="col" className="px-1 py-3">
                        {data.invMobo}
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
