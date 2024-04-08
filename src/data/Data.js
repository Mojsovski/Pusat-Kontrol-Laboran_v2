// import { create } from "zustand";
// import data from "./data1.json";

// const useStore = create((set) => ({
//   // inv: data.invPC,
//   inv: data.inv,
// }));

// export default useStore;

import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const useStore = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      // Ambil data dari Supabase
      const { data, error } = await supabase.from("inv3").select("*");
      if (error) throw error;
      // Simpan data dalam state Zustand
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },
}));

export default useStore;
