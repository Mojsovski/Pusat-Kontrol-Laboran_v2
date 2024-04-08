import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import logoInput from "../../assets/icons/pcinput.svg";
import useStore from "../../data/Data.js";
import { useEffect } from "react";

// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

function InvListPC() {
  // const data = useStore((state) => state.data);
  // console.log({ inv });

  // const [data, setInv] = useState([]);

  // useEffect(() => {
  //   getInv();
  // }, []);

  // async function getInv() {
  //   const { data } = await supabase.from("inv").select();
  //   setInv(data);
  // }

  const { data, fetchData } = useStore();
  let Num = 1;

  useEffect(() => {
    fetchData(); // Panggil fetchData saat komponen Table pertama kali dimuat
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-4 ">
              <img src={logoInput} className="w-[25px] " />
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
                {data.map((inv) => (
                  <tr>
                    <td scope="col" className="px-1 py-3">
                      {Num++}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {inv.Name}
                    </td>
                    <td scope="col" className="px-4 py-3">
                      {inv.CPU}
                    </td>
                    <td scope="col" className="px-1 py-3">
                      {inv.RAM}
                    </td>
                    <td scope="col" className="px-3 py-3">
                      {inv.GPU}
                    </td>
                    <td scope="col" className="px-1 py-3">
                      {inv.Storage}
                    </td>
                    <td scope="col" className="px-1 py-3">
                      {inv.CategoryPC}
                    </td>
                    <td
                      scope="col"
                      className="px-1 py-3 flex items-center justify-center"
                    >
                      <p
                        className={`${
                          inv.Status === "baik"
                            ? "bg-[#07AC22AB] py-1 w-28 text-white items-center flex justify-center rounded-full shadow "
                            : inv.Status === "rusak ringan"
                            ? "bg-[#fdcd49] py-1 w-28 text-black items-center flex justify-center rounded-full shadow "
                            : inv.Status === "rusak berat"
                            ? "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-white shadow "
                            : "bg-[#FF0000] py-1 w-28 items-center flex justify-center rounded-full text-[#9B4332] shadow "
                        }`}
                      >
                        {inv.Status}
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
