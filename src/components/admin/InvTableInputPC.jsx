import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useStore from "../../data/Data";
import { useAuthStore } from "../../data/Auth";

function TableInputPC() {
  const navigate = useNavigate();
  const { formPC, updateFormPC, submitForm, resetFormPC } = useStore();
  const { user } = useAuthStore((state) => ({ user: state.user }));

  useEffect(() => {
    resetFormPC();
    if (user) {
      updateFormPC("room", user.user_metadata.room);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormPC(name, value);
  };

  const handleSubmitPC = async (e) => {
    e.preventDefault();
    await submitForm();
    navigate("/admin/inventaris/list-PC");
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
      <div className="px-11 flex flex-row justify-between my-3">
        {/* row 1 */}
        <div className="space-y-6">
          <div className="my-2">
            <label className="px-3 font-medium ">Nama Komputer</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                type="text"
                id="name"
                name="name"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : D2I-01"
                value={formPC.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium ">Prosessor</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                type="text"
                id="pc.cpu"
                name="pc.cpu"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Intel Core i3-10105F"
                value={formPC.pc.cpu}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Motherboard</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.mobo}
                onChange={handleChange}
                type="text"
                id="pc.mobo"
                name="pc.mobo"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Gigabyte B360M DS3H"
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">RAM</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.ram}
                onChange={handleChange}
                type="text"
                id="pc.ram"
                name="pc.ram"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : DDR4 16GB"
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium ">Kartu Grafis</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.gpu}
                onChange={handleChange}
                type="text"
                id="pc.gpu"
                name="pc.gpu"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Gigabyte RTX 3070 "
              />
            </div>
          </div>

          <div className="my-2">
            <label className="px-3 font-medium ">Penyimpanan</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.storage}
                onChange={handleChange}
                type="text"
                id="pc.storage"
                name="pc.storage"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Kingston NV2 500GB"
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium ">Keyboard</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.keyboard}
                onChange={handleChange}
                type="text"
                id="pc.keyboard"
                name="pc.keyboard"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Logitech USB"
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Mouse</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.mouse}
                onChange={handleChange}
                type="text"
                id="pc.mouse"
                name="pc.mouse"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Logitech USB"
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium ">Monitor</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.monitor}
                onChange={handleChange}
                type="text"
                id="pc.monitor"
                name="pc.monitor"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : LG 17inc "
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Power Supply</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.psu}
                onChange={handleChange}
                type="text"
                id="pc.psu"
                name="pc.psu"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : bawaan casing"
              />
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="space-y-6">
          <div className="my-2">
            <label className="px-3 font-medium">Kategori Komputer</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.pc.category}
                onChange={handleChange}
                type="text"
                id="pc.category"
                name="pc.category"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
              >
                <option value="">kategori pc</option>
                <option value="client">client</option>
                <option value="dosen">dosen</option>
                <option value="laboran">laboran</option>
                <option value="cadangan">cadangan</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Barang</label>
            <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.status}
                onChange={handleChange}
                type="text"
                id="status"
                name="status"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
              >
                <option value="">kondisi komputer saat ini</option>
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
                value={formPC.room}
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
      <div className="pt-10 flex justify-end">
        <div className="pt-7 flex justify-end">
          <button
            onClick={handleSubmitPC}
            type="submit"
            className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
          >
            Input
          </button>
        </div>
      </div>
    </>
  );
}

export default TableInputPC;
