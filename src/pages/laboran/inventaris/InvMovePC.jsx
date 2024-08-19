import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import useStore from "../../../data/Data.js";
import { useAuthStore } from "../../../data/Auth.js";

import Sidebar from "../../../components/global/Sidebar.jsx";
import Navbar from "../../../components/global/Navbar.jsx";
import icons from "../../../assets/icons/icon.jsx";

function InvMovePC() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore((state) => ({ user: state.user }));
  const { fetchMovePC, formPC, handleMoveFormPC, updateForm } = useStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleMoveFormPC(name, value);
    if (name === "room") {
      handleMoveFormPC("roomNew", value);
      if (value === user.user_metadata.room) {
        handleMoveFormPC("status", "lab");
      } else {
        handleMoveFormPC("status", "dipinjam");
      }
    }
  };

  const handleUpdateInv = async (e) => {
    e.preventDefault();
    if (!formPC.name || !formPC.room || !formPC.roomOld || !formPC.status) {
      Swal.fire({
        title: "Gagal Input!",
        text: "Isi form yang tersedia",
        icon: "error",
        timer: 850,
        showConfirmButton: false,
      });
      return;
    }
    if (formPC.roomOld === formPC.room) {
      Swal.fire({
        title: "Gagal Input!",
        text: "Ubah ruangan terbaru!",
        icon: "error",
        timer: 850,
        showConfirmButton: false,
      });
      return;
    }
    await updateForm();
    navigate("/inventaris/list-PC");
    Swal.fire({
      title: "Berhasil!",
      text: "Data inventaris sudah berubah",
      icon: "success",
      timer: 850,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    if (id) {
      fetchMovePC(id).then((data) => {
        if (data) {
          handleMoveFormPC("roomOld", data.room);
        }
      });
    }
  }, [id]);

  return (
    <>
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" h-screen bg-[#C4C4C4] relative  ">
        <div className="  px-5 md:pr-10 py-28 md:pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] space-y-6">
          <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
            <div className="h-10 flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 ">
                <img src={icons.inputPC} className="w-[25px] " />
                <div className="p-1 font-semibold text-xl ">
                  Pindah Komputer {formPC.name}
                </div>
              </div>
            </div>
            <div className="px-5 lg:px-11 flex flex-col lg:w-[450px] lg:flex-auto justify-between my-3 lg:space-x-10">
              {/* row 1 */}
              <div className="space-y-6">
                <div className="my-2">
                  <label className="px-3 font-medium ">Nama barang</label>
                  <div className=" h-10 shadow-lg rounded-3xl bg-white">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block text-base pl-4 p-3 bg-[#e6e6e6] w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : obeng"
                      value={formPC.name}
                      onChange={handleChange}
                      readOnly
                    />
                  </div>
                </div>
                <div className="my-2  ">
                  <label className="px-3 font-medium">Ruang sebelumnya</label>
                  <div className="h-10 shadow-lg rounded-3xl ">
                    <input
                      value={formPC.roomOld}
                      onChange={handleChange}
                      type="text"
                      id="roomOld"
                      name="roomOld"
                      className="block text-base pl-4 p-3 bg-[#e6e6e6] w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : D.2.C"
                      readOnly
                    />
                  </div>
                </div>
                <div className="my-2 ">
                  <label className="px-3 font-medium">Ruang selanjutnya</label>
                  <div className="h-10 shadow-lg rounded-3xl ">
                    <input
                      value={formPC.roomNew}
                      onChange={handleChange}
                      type="text"
                      id="roomNew"
                      name="roomNew"
                      className="block text-base pl-4 p-3 bg-[#e6e6e6] w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : D.2.C"
                    />
                  </div>
                </div>
                <div className="my-2 hidden ">
                  <label className="px-3 font-medium">Status</label>
                  <div className="h-10 shadow-lg rounded-3xl ">
                    <input
                      value={formPC.status}
                      onChange={handleChange}
                      type="text"
                      id="status"
                      name="status"
                      className="block text-base pl-4 p-3 bg-[#e6e6e6] w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : D.2.C"
                      readOnly
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium">Lokasi Terbaru</label>
                  <div className=" h-10 shadow-lg rounded-3xl bg-white">
                    <select
                      value={formPC.room}
                      onChange={handleChange}
                      type="room"
                      id="room"
                      name="room"
                      className="block text-base pl-4 bg-white w-full h-full rounded-3xl focus:outline-none "
                    >
                      <option value="">pilih ruang laboratorium</option>
                      <option value="D.2.A">D.2.A</option>
                      <option value="D.2.B">D.2.B</option>
                      <option value="D.2.C">D.2.C</option>
                      <option value="D.2.D">D.2.D</option>
                      <option value="D.2.E">D.2.E</option>
                      <option value="D.2.F">D.2.F</option>
                      <option value="D.2.G">D.2.G</option>
                      <option value="D.2.H">D.2.H</option>
                      <option value="D.2.I">D.2.I</option>
                      <option value="D.2.J">D.2.J</option>
                      <option value="D.2.K">D.2.K</option>
                      <option value="D.3.L">D.3.L</option>
                      <option value="D.3.M">D.3.M</option>
                      <option value="D.3.N">D.3.N</option>
                      <option value="UPT">UPT</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-11 flex flex-col lg:flex-row justify-end items-center my-3">
              <div className="pt-10 flex justify-end">
                <button
                  onClick={handleUpdateInv}
                  type="submit"
                  className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
                >
                  Edit Inventaris {formPC.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvMovePC;
