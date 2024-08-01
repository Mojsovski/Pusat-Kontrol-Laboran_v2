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
  const { formData, setFormData, error, handleLogin } = useAuthStore();
  const { hidePassword, changeVisiblePwd } = useHidePsw();
  const navigate = useNavigate();

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

  useEffect(() => {
    document.title = "Login - Pusat Kontrol Laboran";
  }, []);

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
            <div className="my-2">
              <label className="ml-3 mb-1">Email</label>
              <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white">
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
              <div className="my-2">
                <label className="ml-3 mb-1">Password</label>
                <div className=" w-96 h-10 shadow-lg rounded-3xl bg-white flex">
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
                  className=" w-96 h-10 shadow-lg rounded-3xl bg-blue-800 text-white"
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
