import { create } from "zustand";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../../data/Auth";

import LoginBG from "../../assets/images/login.jpg";
import UdinusLogo from "../../assets/images/UdinusLogo.png";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect } from "react";

const useHidePsw = create((set) => ({
  hidePassword: true,
  changeVisiblePwd: () =>
    set((state) => ({ hidePassword: !state.hidePassword })),
}));

function LoginPage() {
  const { formData, setFormData, error, handleLogin, user } = useAuthStore();
  const { hidePassword, changeVisiblePwd } = useHidePsw();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - Pusat Kontrol Laboran";
    if (user) {
      if (user.user_metadata.role === "admin") {
        navigate("/admin/home");
      } else if (user.user_metadata.role === "laboran") {
        navigate("/inventaris");
      }
    } else if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const onLogin = async () => {
    const user = await handleLogin();
    if (user) {
      if (user.user_metadata.role === "admin") {
        navigate("/admin/home");
      } else if (user.user_metadata.role === "laboran") {
        navigate("/inventaris");
      } else {
        navigate("/unauthenticated");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <>
      <div className="h-screen xl:h-full mx-auto relative   ">
        <div className="bg-neutral-300 grid lg:grid-cols-2">
          <img
            className=" lg:w-10/12 h-screen object-cover "
            src={LoginBG}
            alt="login-bg"
          />
          <div className="p-4 bg-neutral-300  md:bg-transparent absolute lg:relative md:flex md:justify-center md:items-center rounded-2xl md:m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0">
            <div className=" flex-col flex justify-center items-center  ">
              <img
                className=" md:size-48 size-28 object-cover  "
                src={UdinusLogo}
                alt="login-bg"
              />
              <div className="text-center m-7">
                <h3 className="md:text-3xl text-2xl ">Pusat Kontrol Laboran</h3>
                <h3 className="md:text-2xl text-xl ">Laboratorium Komputer</h3>
              </div>
              <div className="my-2">
                <label className="ml-3">Email</label>
                <div className="w-72 md:w-96 h-10 shadow-lg rounded-3xl bg-white">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="block text-base pl-4 p-3 bg-white w-full h-full rounded-3xl focus:outline-none "
                    placeholder="admin@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="my-2">
                <label className="ml-3 mb-1">Password</label>
                <div className=" w-72 md:w-96  h-10 shadow-lg rounded-3xl bg-white flex">
                  <input
                    type={hidePassword ? "password" : "text"}
                    id="password"
                    name="password"
                    className="block text-base pl-4 py-3 w-96 h-10 rounded-3xl focus:outline-none bg-white"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div
                    onClick={changeVisiblePwd}
                    className=" px-5 py-2 cursor-pointer"
                  >
                    {hidePassword ? (
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
              {error && <div className="text-red-500">{error}</div>}
              <div className="my-8">
                <button
                  onClick={onLogin}
                  className=" w-72 md:w-96 h-10 shadow-lg rounded-xl bg-blue-800 hover:bg-blue-700 text-white"
                >
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
