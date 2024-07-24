import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";
import { jwtDecode } from "jwt-decode";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Login
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  }

  const user = data.user;
  const token = data.session.access_token; // Ambil token dari data sesi
  const decodedToken = jwtDecode(token); // Decode token untuk mendapatkan informasi tambahan
  sessionStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token); // Simpan token di localStorage
  setSessionExpiration(decodedToken.exp); // Atur waktu kedaluwarsa sesi berdasarkan token
  setCookie("token", token, 10); // Simpan token di cookie dengan masa berlaku 2 jam

  return user;
};

// Logout
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
  sessionStorage.removeItem("user");
  localStorage.removeItem("token");
  deleteCookie("token");
};

// signup
export const signup = async (
  email,
  password,
  name,
  npp,
  phone_number,
  address,
  role,
  room
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        npp,
        phone_number,
        address,
        role,
        room,
      },
    },
  });
  if (error) {
    throw error;
  }
  const user = data.user;

  // Auto authenticate the user after signup
  const { data: loginData, error: loginError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  if (loginError) {
    throw loginError;
  }

  const token = loginData.session.access_token; // Ambil token dari data sesi
  const decodedToken = jwtDecode(token); // Decode token untuk mendapatkan informasi tambahan
  sessionStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token); // Simpan token di localStorage
  setSessionExpiration(decodedToken.exp); // Atur waktu kedaluwarsa sesi berdasarkan token
  setCookie("token", token, 10); // Simpan token di cookie dengan masa berlaku 2 jam

  return user;
};

// Config Session & Token

// Tambahkan fungsi untuk mengatur waktu kedaluwarsa sesi
export const setSessionExpiration = (exp) => {
  const expirationTime = exp * 1000; // Konversi dari detik ke milidetik
  sessionStorage.setItem("sessionExpiration", expirationTime);
};

// Tambahkan fungsi untuk memperbarui token
export const refreshToken = async () => {
  const { data, error } = await supabase.auth.refreshSession();
  if (error) {
    throw error;
  }
  const token = data.session.access_token;
  const decodedToken = jwtDecode(token);
  sessionStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token", token);
  setSessionExpiration(decodedToken.exp);
  setCookie("token", token, 10);
};

// Periksa apakah sesi masih berlaku dan perbarui jika hampir habis
export const isSessionValid = () => {
  const currentTime = new Date().getTime();
  const expiration = sessionStorage.getItem("sessionExpiration");
  const timeLeft = expiration - currentTime;
  if (timeLeft < 5 * 60 * 1000) {
    // Jika kurang dari 5 menit
    refreshToken();
  }
  return currentTime < expiration;
};

// Fungsi untuk mengatur cookie
export const setCookie = (name, value, hours) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};
// Fungsi untuk menghapus cookie
export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

//                        State Management
export const useAuthStore = create((set, get) => ({
  formData: {
    email: "",
    password: "",
    name: "",
    npp: "",
    phone_number: "",
    address: "",
    role: "",
    room: "",
  },
  error: null,
  user: null,

  setFormData: (newFormData) =>
    set((state) => ({
      formData: { ...state.formData, ...newFormData },
    })),

  setError: (error) => set({ error }),
  setUser: (user) => set({ user }),

  handleSignup: async () => {
    const { formData } = get();
    const { email, password, name, npp, phone_number, address, role, room } =
      formData;
    try {
      const user = await signup(
        email,
        password,
        name,
        npp,
        phone_number,
        address,
        role,
        room
      );
      set({ user, error: null });
      return user;
    } catch (error) {
      set({ error: error.message });
    }
  },

  handleLogin: async () => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser && isSessionValid()) {
      set({ user: JSON.parse(storedUser), error: null });
      return JSON.parse(storedUser);
    } else {
      const { formData } = get();
      const { email, password } = formData;
      try {
        const user = await login(email, password);
        set({ user, error: null });
        return user;
      } catch (error) {
        set({ error: error.message });
      }
    }
  },

  handleLogout: async () => {
    try {
      await logout();
      sessionStorage.removeItem("user");
      localStorage.removeItem("token");
      deleteCookie("token");
      set({
        user: null,
        formData: {
          email: "",
          password: "",
          name: "",
          npp: "",
          phone_number: "",
          address: "",
          role: "",
          room: "",
        },
        error: null,
      });
    } catch (error) {
      set({ error: error.message });
    }
  },

  // Tambahkan fungsi untuk memeriksa status autentikasi saat aplikasi dimuat
  checkAuth: () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (isSessionValid()) {
        const user = JSON.parse(sessionStorage.getItem("user"));
        set({ user, error: null });
      } else {
        set({ user: null, error: "session sudah habis, silahkan login lagi" });
      }
    }
  },

  resetFormSignUp: () =>
    set({
      formData: {
        email: "",
        password: "",
        name: "",
        npp: "",
        phone_number: "",
        address: "",
        role: "",
        room: "",
      },
    }),
}));

// Panggil checkAuth saat aplikasi dimuat
useAuthStore.getState().checkAuth();
