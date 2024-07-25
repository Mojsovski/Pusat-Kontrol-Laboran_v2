import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useAuthStore } from "../../data/Auth.js";

import Sidebar from "../../components/global/Sidebar.jsx";
import Navbar from "../../components/global/Navbar.jsx";
import icons from "../../assets/icons/icon.jsx";

function SignUp() {
  const navigate = useNavigate();
  const { formData, setFormData, handleSignup, resetFormSignUp } =
    useAuthStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const confirmSignUp = async (e) => {
    e.preventDefault();
    await handleSignup();
    navigate("/users");
    Swal.fire({
      title: "Berhasil!",
      text: "Akun sudah ditambahkan",
      icon: "success",
      timer: 850,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    resetFormSignUp();
  }, []);

  return (
    <div className="h-screen bg-[#C4C4C4] relative  ">
      <Sidebar />
      <Navbar title="Pengaturan" />
      <div className=" pr-10 py-28 pl-20 sm:ml-[266px] flex flex-col bg-[#C4C4C4] relative">
        <div className="relative w-full px-8 py-5 bg-neutral-300 rounded-3xl flex-col shadow-md">
          <div className="h-10 flex flex-row gap-5 items-center">
            <div className="flex flex-row gap-4 ">
              <img src={icons.inputPC} className="w-[25px] " />
              <div className="p-1 font-semibold text-xl ">Register Akun</div>
            </div>
          </div>
          <div className="flex flex-row my-7 mx-5 justify-between space-x-3">
            {/* col 1 */}
            <div className="w-1/4 flex flex-col items-center space-y-4">
              <div className="space-y-8 ">
                <img
                  className=" size-52 rounded-full object-cover"
                  src="https://mahasiswa.dinus.ac.id/images/foto/A/A12/2020/A12.2020.06406.jpg"
                  alt="user photo"
                />
              </div>
              <div className="w-28 flex flex-row items-center justify-center ">
                <Link
                  to={"/user/setting"}
                  className="w-32 h-10 py-2 shadow-lg rounded-3xl text-center bg-blue-800 hover:bg-blue-700 text-white"
                >
                  edit profil
                </Link>
              </div>
            </div>
            {/* col 2 */}
            <div className="w-3/4 space-y-5">
              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">Nama</div>
                <input
                  type="text"
                  className="w-64 text-end"
                  id="name"
                  name="name"
                  placeholder="contoh : Freddy Sambo"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">NPP/NIM</div>
                <input
                  type="text"
                  className="w-64 text-end"
                  id="npp"
                  name="npp"
                  placeholder="ketik di sini"
                  value={formData.npp}
                  onChange={handleChange}
                />
              </div>
              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">Nomer Handphone</div>
                <input
                  type="text"
                  className="w-64 text-end"
                  id="phone_number"
                  name="phone_number"
                  placeholder="ketik di sini"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">Alamat</div>
                <input
                  type="text"
                  className="w-64 text-end"
                  id="address"
                  name="address"
                  placeholder="ketik di sini"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">Status</div>
                <input
                  type="text"
                  className="w-64 text-end"
                  id="role"
                  name="role"
                  placeholder="ketik di sini"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>
              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">
                  Ruang Laboratorium
                </div>
                <input
                  type="text"
                  className="w-64 text-end"
                  id="room"
                  name="room"
                  placeholder="ketik di sini"
                  value={formData.room}
                  onChange={handleChange}
                />
              </div>

              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">Email</div>
                <input
                  type="email"
                  className="w-64 text-end"
                  id="email"
                  name="email"
                  placeholder="ketik di sini"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="h-10 px-7 shadow-lg rounded-3xl flex flex-row justify-between items-center bg-[#fbfbfb]">
                <div className="text-start font-semibold">Password</div>
                <input
                  type="password"
                  className="w-64 text-end"
                  id="password"
                  name="password"
                  placeholder="ketik di sini"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mx-7 my-10">
            <div className=" flex items-center justify-end">
              <button
                onClick={confirmSignUp}
                className="w-40 h-10 py-2 shadow-lg rounded-3xl bg-blue-800 hover:bg-blue-700 text-white"
              >
                buat akun!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
