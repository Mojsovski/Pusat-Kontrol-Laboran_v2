import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/Sidebar.jsx";
import Navbar from "../../../components/Navbar.jsx";
import icons from "../../../assets/icons/icon.jsx";

function InvListNonPC() {
  const navigate = useNavigate();
  const { inv, fetchDataNonPC, deleteFormNonPC } = useStore();

  const filterPC = inv.sort((a, b) => a.name.localeCompare(b.name));

  const handleDeleteInv = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Kamu tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "batal",
      confirmButtonText: "Ya, hapus inventaris!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteFormNonPC(id);
        Swal.fire({
          title: "Terhapus!",
          text: "Inventaris sudah terhapus.",
          icon: "success",
          timer: 700,
          showConfirmButton: false,
        });
        navigate("/inventaris/list-nonpc");
      }
    });
  };

  useEffect(() => {
    fetchDataNonPC();
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">
                Daftar Inventaris Non Komputer
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
                  <th scope="col" className="px-1 py-3">
                    Jumlah
                  </th>
                  <th scope="col" className="px-3 py-3 ">
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
                    <td scope="col" className="px-4 py-3 ">
                      {inv.name}
                    </td>
                    <td scope="col" className="px-1 py-3">
                      {inv.quantity}
                    </td>
                    <td
                      scope="col"
                      className="px-3 py-3 flex items-center justify-center"
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
                    <td className="px-1 py-3 ">
                      <div className="flex">
                        <div className="w-full flex justify-center">
                          <Link
                            to={`/inventaris/edit/${inv.id}`}
                            className="bg-[#fdcd49] py-1 w-20  items-center flex justify-center rounded-full shadow"
                          >
                            edit
                          </Link>
                        </div>
                        <div className="w-full flex justify-center">
                          <button
                            onClick={() => handleDeleteInv(inv.id)}
                            className="bg-red-500 text-white py-1 w-20  items-center flex justify-center rounded-full shadow"
                          >
                            hapus
                          </button>
                        </div>
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

export default InvListNonPC;
