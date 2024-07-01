import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useStore from "../../../data/Data.js";

import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import icons from "../../../assets/icons/icon.jsx";

function InvInput() {
  const { formData, updateFormData, submitForm, resetFormData } = useStore();

  useEffect(() => {
    resetFormData(); // Reset formData ketika komponen dimuat
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Inventaris" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col  bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 pb-14 bg-neutral-300 rounded-3xl flex-col shadow-md">
          {/* col 1 */}
          <div className=" h-10 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Input Inventaris</div>
            </div>
            <div className="my-2 ">
              <div className=" w-60 h-7 shadow-lg rounded-3xl bg-white">
                <select
                  value={formData.category}
                  onChange={handleChange}
                  type="text"
                  id="category"
                  name="category"
                  className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                  placeholder="NIM/NPP"
                >
                  <option value="">Pilih jenis barang</option>
                  <option value="PC">Komputer</option>
                  <option value="Non PC">Non Komputer</option>
                </select>
              </div>
            </div>
          </div>

          {/* col 2 */}

          {formData.category === "PC" && (
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
                      value={formData.name}
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
                      value={formData.pc.cpu}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium">Motherboard</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <input
                      value={formData.pc.mobo}
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
                      value={formData.pc.ram}
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
                      value={formData.pc.gpu}
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
                  <label className="px-3 font-medium">Kondisi Barang</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <select
                      value={formData.status}
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
                    </select>
                  </div>
                </div>
              </div>
              {/* row 2 */}
              <div className="space-y-6">
                <div className="my-2">
                  <label className="px-3 font-medium">Kategori Komputer</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <select
                      value={formData.pc.category}
                      onChange={handleChange}
                      type="text"
                      id="pc.category"
                      name="pc.category"
                      className="block text-base pl-4  bg-white w-full h-full rounded-3xl focus:outline-none "
                    >
                      <option value="">kategori pc</option>
                      <option value="Cilent">Cilent</option>
                      <option value="Dosen">Dosen</option>
                      <option value="Laboran">Laboran</option>
                      <option value="Cadangan">Cadangan</option>
                    </select>
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium ">Penyimpanan</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <input
                      value={formData.pc.storage}
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
                      value={formData.pc.keyboard}
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
                      value={formData.pc.mouse}
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
                      value={formData.pc.monitor}
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
                      value={formData.pc.psu}
                      onChange={handleChange}
                      type="text"
                      id="pc.psu"
                      name="pc.psu"
                      className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                      placeholder="contoh : bawaan casing"
                    />
                  </div>
                </div>
                <div className="pt-10 flex justify-end" onClick={handleSubmit}>
                  <Link
                    to={"/inventaris/list-PC"}
                    type="submit"
                    className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
                  >
                    Input
                  </Link>
                </div>
              </div>
            </div>
          )}
          {formData.category === "Non PC" && (
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
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label className="px-3 font-medium">Kondisi Barang</label>
                  <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                    <select
                      value={formData.status}
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
                    </select>
                  </div>
                </div>
                <div className="pt-7 flex justify-end" onClick={handleSubmit}>
                  <Link
                    to={"/inventaris/list-PC"}
                    type="submit"
                    className="px-16 py-2 shadow-lg rounded-3xl bg-blue-800 text-white"
                  >
                    Input
                  </Link>
                </div>
              </div>
            </div>
          )}
          {/* col 3 */}
        </div>
      </div>
    </div>
  );
}

export default InvInput;
