import { useState } from "react";
import { Link } from "react-router-dom";
import LoginBG from "../../assets/images/login.jpg";
import UdinusLogo from "../../assets/images/UdinusLogo.png";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const [showPassword, setShowPassword] = useState("false");

  const togglePasswordViibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="h-screen w-full bg-neutral-300 flex relative ">
        <img className=" w-5/12 object-cover " src={LoginBG} alt="login-bg" />
        <div className=" w-7/12 px-32 py-24 flex-col flex justify-center items-center ">
          <div className="w-[500px] h-[900px] p-6  flex flex-col justify-center items-center  ">
            <img
              className=" w-5/12 object-cover m-8"
              src={UdinusLogo}
              alt="login-bg"
            />
            <div className="text-center mb-7">
              <h3 className="text-3xl font">Pusat Kontrol Laboran</h3>
              <h3 className="text-2xl">Laboratorium Komputer</h3>
            </div>
            <div className="">
              <div className="my-2">
                <label className="ml-3 mb-1">Username</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="username"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="NIM/NPP"
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="ml-3 mb-1">Password</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white flex">
                  <input
                    type={showPassword ? "password" : "text"}
                    id="username"
                    className="block text-base pl-4 py-3 w-96 h-10 rounded-3xl focus:outline-none bg-white"
                    placeholder="password"
                  />
                  <div onClick={togglePasswordViibility} className=" px-5 py-2">
                    {showPassword ? (
                      <VisibilityOffIcon
                        fontSize="medium"
                        className="text-gray-600"
                      />
                    ) : (
                      <VisibilityIcon
                        fontSize="medium"
                        className="text-gray-600"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="my-8">
                <Link to={"/home"}>
                  <button className=" w-96 h-10 shadow-lg rounded-3xl bg-blue-800 text-white">
                    Masuk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
