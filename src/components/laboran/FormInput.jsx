import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useStore from "../../data/Data.js";
import { useAuthStore } from "../../data/Auth.js";

function FormInputNonPC() {
  const navigate = useNavigate();
  const { formInv, updateFormInv, submitFormNonPC, resetFormInv } = useStore();
  const { user } = useAuthStore((state) => ({ user: state.user }));

  useEffect(() => {
    resetFormInv();
    if (user) {
      updateFormInv("room", user.user_metadata.room);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormInv(name, value);
  };

  const handleSubmitNonPC = async (e) => {
    e.preventDefault();
    await submitFormNonPC();
    navigate("/inventaris/list-nonpc");
    Swal.fire({
      title: "Berhasil!",
      text: "Data inventaris sudah ditambahkan",
      icon: "success",
      timer: 850,
      showConfirmButton: false,
    });
  };

  return (
    <>
      <div className="px-5 md:px-11 flex flex-col md:flex-row md:flex-auto justify-between my-3 sm:space-x-10">
        {/* row 1 */}
        <div className="space-y-7 md:space-y-6 sm:w-full md:w-[400px]">
          <div className="my-2">
            <label className="px-3 font-medium ">Nama barang</label>
            <div className=" h-10 shadow-lg rounded-3xl">
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
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
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
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
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
            <div className=" h-10 shadow-lg rounded-3xl ">
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
          <div className="pt-7 flex justify-end">
            <button
              onClick={handleSubmitNonPC}
              type="submit"
              className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
            >
              Input
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormInputNonPC;
