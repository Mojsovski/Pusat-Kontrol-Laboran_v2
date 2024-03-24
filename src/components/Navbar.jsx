import React from "react";
import { useNavigate } from "react-router-dom";
import iconNotif from "../assets/icon/notifications_active.svg";
import iconSms from "../assets/icon/textsms.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Navbar = ({ title, showButtonBack }) => {
  const navigate = useNavigate();
  return (
    <nav className="fixed inset-x-0 sm:ml-[300px] bg-gray-100 border-gray-200 shadow-md z-50">
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
        <div className="flex md:order-2 gap-8 ">
          <button type="button">
            <img src={iconSms} alt="" className="w-[30px]" />
          </button>
          <button type="button">
            <img src={iconNotif} alt="" className="w-[30px]" />
          </button>
          <button
            type="button"
            className="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300 "
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
