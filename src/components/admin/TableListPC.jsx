import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "../../data/Data.js";
import { useAuthStore } from "../../data/Auth";

import icons from "../../assets/icons/icon.jsx";

function TableListPC() {
  const { invpc, fetchData } = useStore();
  const { user } = useAuthStore((state) => ({ user: state.user }));

  // Filter based on user's room
  const filterUser = invpc.filter(
    (inv) => inv.room === user?.user_metadata?.room
  );
  const filterPC = filterUser.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
    </>
  );
}

export default TableListPC;
