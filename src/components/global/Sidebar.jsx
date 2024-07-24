import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Logotype from "../../assets/images/UdinusLogo.png";
import logoHome from "../../assets/icons/home.svg";
import logoInventaris from "../../assets/icons/inv.svg";
import logoJaringan from "../../assets/icons/jaringan.svg";
import logoPelaporan from "../../assets/icons/pelaporan.svg";

import logoLogOut from "../../assets/icon/Logout.svg";
import logoSetting from "../../assets/icon/settings.svg";
import warningImage from "../../assets/images/warningOut.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useAuthStore } from "../../data/Auth";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleLogout = useAuthStore((state) => state.handleLogout); // Get handleLogout from useAuthStore
  const { user } = useAuthStore((state) => ({ user: state.user })); // Get user from store

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const confirmLogout = () => {
    Swal.fire({
      title: "Yakin Mau Keluar?",
      text: "Semoga Kembali lagi! Jangan lupa simpan perubahan kamu",
      imageUrl: warningImage,
      imageWidth: 180,
      imageHeight: 180,
      showCancelButton: true,
      confirmButtonText: "Keluar Akun",
      cancelButtonText: "Batal",
      buttonsStyling: false,
      customClass: {
        title: "text-lg font-bold mb-1",
        text: "text-base font-normal",
        confirmButton:
          "w-full max-w-md px-44 py-1 bg-[#3653B0] hover:bg-blue-500 text-white rounded-full",
        cancelButton:
          "w-full max-w-md mt-1 py-1 bg-[#FF3B3B] hover:bg-red-400 text-white rounded-full",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
        localStorage.clear();
        window.location.href = "/";
        Swal.fire("Berhasil Keluar!", "", "success");
      }
    });
  };

  return (
    <div
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-[300px] bg-[#0F4C92] h-screen transition-transform ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <div className="h-full px-4 overflow-y-auto pt-16 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center flex-col mb-4">
            <img src={Logotype} className="w-36" />
            <div className="my-5 flex flex-col">
              <span className="self-center text-xl whitespace-nowrap text-[#E6E6E6]">
                Pusat Kontrol Laboran
              </span>
              <span className="self-center text-base whitespace-nowrap text-[#E6E6E6]">
                Laboratorium Komputer
              </span>
            </div>
          </div>
          <ul className="space-y-2 font-medium text-xl">
            <li>
              <Link
                to={"/inventaris"}
                className="flex items-center  mx-8 py-2 px-4  text-[#E6E6E6] hover:text-black rounded-2xl hover:bg-[#F5BD45] group "
              >
                <img src={logoHome} className="w-[30px] h-8 " />
                <span className="ms-3 justify-center">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/inventaris/listinventaris"}
                className="flex items-center  mx-8 py-2 px-4  text-[#E6E6E6] hover:text-black rounded-2xl hover:bg-[#F5BD45] group "
              >
                <img src={logoInventaris} className="w-[30px] h-8 " />
                <span className="ms-3 justify-center">List Inventaris</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/inventaris/rekap"}
                className="flex items-center  mx-8 py-2 px-4  text-[#E6E6E6] hover:text-black rounded-2xl hover:bg-[#F5BD45] group "
              >
                <img src={logoJaringan} className="w-[30px] h-8 " />
                <span className="ms-3 justify-center">Rekap Inventaris</span>
              </Link>
            </li>
            {user?.user_metadata?.role === "admin" ? (
              <li>
                <Link
                  to={"/users"}
                  className="flex items-center  mx-8 py-2 px-4  text-[#E6E6E6] hover:text-black rounded-2xl hover:bg-[#F5BD45] group "
                >
                  <img src={logoPelaporan} className="w-[30px] h-8 " />
                  <span className="ms-3 justify-center">Kelola Akun</span>
                </Link>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="pb-16">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/user"}
                className="flex items-center  mx-8 py-2 px-4  text-[#E6E6E6] hover:text-black rounded-2xl hover:bg-[#F5BD45] group "
              >
                <img src={logoSetting} className="w-[30px] h-8 " />
                <span className="ms-3 justify-center">Pengaturan</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center  mx-8 py-2 px-4  text-[#E6E6E6] hover:text-black rounded-2xl hover:bg-[#F5BD45] group] "
                onClick={confirmLogout} // Add onClick event for logout
              >
                <img src={logoLogOut} className="w-[30px] h-8" />
                <span className="flex-1 ms-3 whitespace-nowrap text-[#E6E6E6]">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed top-4 left-4 cursor-pointer block sm:hidden`}
        onClick={toggleMenu}
      >
        {showMenu ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" className="z-100" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
