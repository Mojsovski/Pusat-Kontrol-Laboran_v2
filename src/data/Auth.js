import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";

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
  // Setelah pengguna berhasil login
  const user = data.user;
  sessionStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
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
    if (storedUser) {
      set({ user: JSON.parse(storedUser), error: null });
      return JSON.parse(storedUser);
    } else {
      const { email, password } = get();
      try {
        const user = await login(email, password);
        sessionStorage.setItem("user", JSON.stringify(user));
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
      set({ user: null, email: "", password: "", error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));
