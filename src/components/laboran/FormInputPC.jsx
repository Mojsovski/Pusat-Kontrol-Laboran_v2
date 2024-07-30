import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useStore from "../../data/Data";
import { useAuthStore } from "../../data/Auth";

function FormInputPC() {
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
    navigate("/inventaris/list-PC");
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
      <div className="px-11 flex flex-row justify-between my-3 space-x-10">
        {/* row 1 */}
        <div className="space-y-6 w-1/2">
          <div className="my-2">
            <label className="px-3 font-medium ">Nama Komputer</label>
            <div className=" h-10 shadow-lg rounded-3xl  ">
              <input
                value={formPC.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none  "
                placeholder="contoh : D2I-01"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kategori Komputer</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.pc.category}
                onChange={handleChange}
                type="text"
                id="pc.category"
                name="pc.category"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
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
            <label className="px-3 font-medium ">Prosessor</label>
            <div className=" h-10 shadow-lg rounded-3xl bg-white">
              <input
                type="text"
                id="pc.cpu"
                name="pc.cpu"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Intel Core i3-10105F"
                value={formPC.pc.cpu}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Motherboard</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.mobo}
                onChange={handleChange}
                type="text"
                id="pc.mobo"
                name="pc.mobo"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Gigabyte B360M DS3H"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">RAM</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.ram}
                onChange={handleChange}
                type="text"
                id="pc.ram"
                name="pc.ram"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : DDR4 16GB"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium ">Kartu Grafis</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.gpu}
                onChange={handleChange}
                type="text"
                id="pc.gpu"
                name="pc.gpu"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Gigabyte RTX 3070 "
                required
              />
            </div>
          </div>

          <div className="my-2">
            <label className="px-3 font-medium ">Penyimpanan</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.storage}
                onChange={handleChange}
                type="text"
                id="pc.storage"
                name="pc.storage"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Kingston NV2 500GB"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium ">Keyboard</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.keyboard}
                onChange={handleChange}
                type="text"
                id="pc.keyboard"
                name="pc.keyboard"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Logitech USB"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Mouse</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.mouse}
                onChange={handleChange}
                type="text"
                id="pc.mouse"
                name="pc.mouse"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : Logitech USB"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium ">Monitor</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.monitor}
                onChange={handleChange}
                type="text"
                id="pc.monitor"
                name="pc.monitor"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : LG 17inc "
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Power Supply</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <input
                value={formPC.pc.psu}
                onChange={handleChange}
                type="text"
                id="pc.psu"
                name="pc.psu"
                className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                placeholder="contoh : bawaan casing"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Ruang Laboratorium</label>
            <div className="  h-10 shadow-lg rounded-3xl ">
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
        {/* row 2 */}
        <div className="space-y-6 w-1/2">
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Barang</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.status}
                onChange={handleChange}
                type="text"
                id="status"
                name="status"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
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
            <label className="px-3 font-medium">Keterangan</label>
            <div className="  h-10 shadow-lg rounded-3xl ">
              <input
                value={formPC.comment}
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
            <label className="px-3 font-medium">Kondisi Prosessor</label>
            <div className="h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.cpu}
                onChange={handleChange}
                type="text"
                id="condition.cpu"
                name="condition.cpu"
                className="block text-base pl-4 bg-white w-full h-full rounded-3xl focus:outline-none"
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Motherboard</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.mobo}
                onChange={handleChange}
                type="text"
                id="condition.mobo"
                name="condition.mobo"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi RAM</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.ram}
                onChange={handleChange}
                type="text"
                id="condition.ram"
                name="condition.ram"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Kartu Grafis</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.gpu}
                onChange={handleChange}
                type="text"
                id="condition.gpu"
                name="condition.gpu"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Penyimpanan</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.storage}
                onChange={handleChange}
                type="text"
                id="condition.storage"
                name="condition.storage"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Keyboard</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.keyboard}
                onChange={handleChange}
                type="text"
                id="condition.keyboard"
                name="condition.keyboard"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Mouse</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.mouse}
                onChange={handleChange}
                type="text"
                id="condition.mouse"
                name="condition.mouse"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Monitor</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.monitor}
                onChange={handleChange}
                type="text"
                id="condition.monitor"
                name="condition.monitor"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label className="px-3 font-medium">Kondisi Power Supply</label>
            <div className="  h-10 shadow-lg rounded-3xl bg-white">
              <select
                value={formPC.condition.psu}
                onChange={handleChange}
                type="text"
                id="condition.psu"
                name="condition.psu"
                className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                required
              >
                <option value="">kondisi saat ini</option>
                <option value="baik">baik</option>
                <option value="rusak ringan">rusak ringan</option>
                <option value="rusak berat">rusak berat</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 px-11 pt-14 flex flex-row justify-end items-center space-x-5">
        <div className="flex items-center py-2 ">
          <div className="flex h-5">
            <input
              id="primaryItem"
              type="checkbox"
              checked={formPC.primaryItem}
              onChange={(e) => updateFormPC("primaryItem", e.target.checked)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
          </div>
          <label
            htmlFor="primaryItem"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <a className="text-black hover:underline">
              Jadikan sebagai spesifikasi utama
            </a>
          </label>
        </div>

        <button
          onClick={handleSubmitPC}
          type="submit"
          className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
        >
          Input
        </button>
      </div>
    </>
  );
}

export default FormInputPC;
