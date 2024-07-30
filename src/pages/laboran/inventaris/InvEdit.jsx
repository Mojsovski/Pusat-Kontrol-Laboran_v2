import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/global/Sidebar";
import Navbar from "../../../components/global/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchDataByIdNonPC,
    formInv,
    updateFormInv,
    updateFormNonPC,
    deleteFormNonPC,
  } = useStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormInv(name, value);
  };

  const handleUpdateInv = async (e) => {
    e.preventDefault();
    await updateFormNonPC();
    navigate("/inventaris/list-nonpc");
    Swal.fire({
      title: "Berhasil!",
      text: "Data inventaris sudah berubah",
      icon: "success",
      timer: 850,
      showConfirmButton: false,
    });
  };

  const handleDeleteInv = () => {
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
    if (id) {
      fetchDataByIdNonPC(id);
    }
  }, [id]);

  return (
    <>
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className="w-screen h-screen bg-[#C4C4C4] relative  ">
        <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
            <div className="h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Edit Inventaris {formInv.name}
                </div>
              </div>
            </div>
            <div className="px-11 flex flex-row justify-between my-3">
              {/* row 1 */}
              <div className="space-y-6">
                <div className="my-2">
                  <label className="px-3 font-medium ">Nama barang</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : obeng"
                      value={formInv.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium ">Jumlah Barang</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : 1"
                      value={formInv.quantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium">Kondisi barang</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <select
                      value={formInv.status}
                      onChange={handleChange}
                      type="text"
                      id="status"
                      name="status"
                      className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                    >
                      <option value="">kondisi barang saat ini</option>
                      <option value="baik">baik</option>
                      <option value="rusak ringan">rusak ringan</option>
                      <option value="rusak berat">rusak berat</option>
                      <option value="pinjam">pinjam</option>
                      <option value="dipinjam">dipinjam</option>
                    </select>
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium">Ruang Laboratorium</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl ">
                    <input
                      value={formInv.room}
                      onChange={handleChange}
                      type="text"
                      id="room"
                      name="room"
                      className="block text-base pl-4 p-3 bg-[#e6e6e6] w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : D.2.C"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-11 flex flex-row justify-between my-3">
              <div className="pt-10 flex justify-start">
                <button
                  onClick={handleDeleteInv}
                  className="px-16 py-2 shadow-lg rounded-3xl bg-red-500 text-white"
                >
                  hapus
                </button>
              </div>
              <div className="pt-10 flex justify-end">
                <button
                  onClick={handleUpdateInv}
                  type="submit"
                  className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
                >
                  Edit Inventaris {formInv.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvEdit;
