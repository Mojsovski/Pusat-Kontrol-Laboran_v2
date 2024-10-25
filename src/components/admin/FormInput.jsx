import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DrawIcon from "@mui/icons-material/Draw";
import Swal from "sweetalert2";
import useStore from "../../data/Data.js";

function FormInputNonPC() {
  const navigate = useNavigate();
  const { formInv, updateFormInv, submitFormNonPC, resetFormInv } = useStore();

  useEffect(() => {
    resetFormInv();
    updateFormInv("status", "lab");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormInv(name, value);
  };

  const handleSubmitNonPC = async (e) => {
    e.preventDefault();
    if (
      !formInv.name ||
      !formInv.quantity ||
      !formInv.status ||
      !formInv.room ||
      !formInv.condition
    ) {
      Swal.fire({
        title: "Gagal Input!",
        text: "Isi form yang tersedia",
        icon: "error",
        timer: 850,
        showConfirmButton: false,
      });
      return;
    }

    await submitFormNonPC();
    navigate("/admin/inventaris/list?category=Non%20PC");
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
                value={formInv.condition}
                onChange={handleChange}
                type="text"
                id="condition"
                name="condition"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
              >
                <option value="">kondisi barang saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Keterangan</label>
            <div className=" h-10 shadow-lg rounded-3xl ">
              <input
                value={formInv.comment}
                onChange={handleChange}
                type="text"
                id="comment"
                name="comment"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="diisi bila ada yang kondisi tertentu"
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Ruang Laboratorium</label>
            <div className=" h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formInv.room}
                onChange={handleChange}
                type="text"
                id="room"
                name="room"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
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
          <div className="my-2 hidden">
            <div className="mx-3 my-1 flex justify-between items-center">
              <div className="flex justify-start gap-3 items-center">
                <label className="font-medium">Status</label>
              </div>
            </div>
            <div className="  h-10 shadow-lg rounded-3xl ">
              <input
                value={formInv.status}
                onChange={handleChange}
                type="text"
                id="status"
                name="status"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pt-7 flex justify-end">
        <button
          onClick={handleSubmitNonPC}
          type="submit"
          className="px-16 py-2 shadow-lg rounded-xl bg-blue-800 hover:bg-blue-600 text-white"
        >
          <DrawIcon /> Input
        </button>
      </div>
    </>
  );
}

export default FormInputNonPC;
