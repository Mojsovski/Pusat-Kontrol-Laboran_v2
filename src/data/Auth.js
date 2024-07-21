import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";
import { jwtDecode } from "jwt-decode";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  setCookie("token", token, 2); // Simpan token di cookie dengan masa berlaku 2 jam
  return user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
  sessionStorage.removeItem("user");
  localStorage.removeItem("token");
  deleteCookie("token");
};

// Tambahkan fungsi untuk mengatur waktu kedaluwarsa sesi
export const setSessionExpiration = (exp) => {
  const expirationTime = exp * 1000; // Konversi dari detik ke milidetik
  sessionStorage.setItem("sessionExpiration", expirationTime);
};

// Periksa apakah sesi masih berlaku
export const isSessionValid = () => {
  const currentTime = new Date().getTime();
  const expiration = sessionStorage.getItem("sessionExpiration");
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

export const useAuthStore = create((set, get) => ({
  email: "",
  password: "",
  error: null,
  user: null,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setError: (error) => set({ error }),
  setUser: (user) => set({ user }),
  handleLogin: async () => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser && isSessionValid()) {
      set({ user: JSON.parse(storedUser), error: null });
      return JSON.parse(storedUser);
    } else {
      const { email, password } = get();
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
      set({ user: null, email: "", password: "", error: null });
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
        set({ user: null, error: "Session expired" });
      }
    }
  },
}));

// Panggil checkAuth saat aplikasi dimuat
useAuthStore.getState().checkAuth();
