import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";
import { jwtDecode } from "jwt-decode";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }

    const user = data.user;
    const token = data.session.access_token;
    const decodedToken = jwtDecode(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    get().setSessionExpiration(decodedToken.exp);
    get().setCookie("token", token, 10);

    set({ user, error: null });
    return user;
  },

  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    get().deleteCookie("token");
    set({ user: null, error: null });
  },

  signup: async (
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

    const { data: loginData, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    if (loginError) {
      throw loginError;
    }

    const token = loginData.session.access_token;
    const decodedToken = jwtDecode(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    get().setSessionExpiration(decodedToken.exp);
    get().setCookie("token", token, 10);

    set({ user, error: null });
    return user;
  },

  setSessionExpiration: (exp) => {
    const expirationTime = exp * 1000;
    localStorage.setItem("sessionExpiration", expirationTime);
  },

  refreshToken: async () => {
    const { data, error } = await supabase.auth.refreshSession();
    if (error) {
      throw error;
    }
    const token = data.session.access_token;
    const decodedToken = jwtDecode(token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", token);
    get().setSessionExpiration(decodedToken.exp);
    get().setCookie("token", token, 10);
  },

  isSessionValid: () => {
    const currentTime = new Date().getTime();
    const expiration = localStorage.getItem("sessionExpiration");
    const timeLeft = expiration - currentTime;
    if (timeLeft < 5 * 60 * 1000) {
      get().refreshToken();
    }
    return currentTime < expiration;
  },

  setCookie: (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  },

  deleteCookie: (name) => {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },

  handleSignup: async () => {
    const { formData } = get();
    const { email, password, name, npp, phone_number, address, role, room } =
      formData;
    try {
      const user = await get().signup(
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
    const storedUser = localStorage.getItem("user");
    if (storedUser && get().isSessionValid()) {
      set({ user: JSON.parse(storedUser), error: null });
      return JSON.parse(storedUser);
    } else {
      const { formData } = get();
      const { email, password } = formData;
      try {
        const user = await get().login(email, password);
        set({ user, error: null });
        return user;
      } catch (error) {
        set({ error: error.message });
      }
    }
  },

  handleLogout: async () => {
    try {
      await get().logout();
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      get().deleteCookie("token");
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

  checkAuth: () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        set({ user: null, error: "session sudah habis, silahkan login lagi" });
      } else if (get().isSessionValid()) {
        const user = JSON.parse(localStorage.getItem("user"));
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
