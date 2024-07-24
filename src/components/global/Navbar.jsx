import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../data/Auth";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Navbar = ({ title, showButtonBack }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  return (
    <nav className="fixed inset-x-0 sm:ml-[300px] bg-gray-200 border-gray-200 shadow-md z-50">
      <div className="flex flex-wrap items-center justify-between py-6 px-6">
        <div className="flex">
          {showButtonBack && (
            <ArrowBackIosIcon
              onClick={() => {
                navigate(-1);
              }}
              fontSize="large"
              className="text-[#3653B0] mr-3 cursor-pointer"
            />
          )}
          <p className="text-3xl font-bold text-gray-900 ">{title}</p>
        </div>
        <div className="flex md:order-2 gap-8  ">
          <button
            type="button"
            className="flex text-sm  rounded-2xl bg-white  "
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <img
              className="w-[35px] h-[35px] rounded-full object-cover"
              src="https://mahasiswa.dinus.ac.id/images/foto/A/A12/2020/A12.2020.06406.jpg"
              alt="user photo"
            />
            <span className="p-2 font-medium flex ">
              {user.user_metadata.name}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
