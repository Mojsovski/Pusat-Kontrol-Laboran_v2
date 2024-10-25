import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const useLogStore = create((set) => ({
  logpc: [],
  loginv: [],
  damageCount: 0,

  formlogpc: {
    id_log: "",
    action: "",
    id: "",
    name: "",
    status: "",
    condition: {},
    room: "",
    roomOld: "",
    roomNew: "",
    primaryItem: false,
    pc: {},
    comment: "",
  },

  //pc
  fetchLog: async () => {
    try {
      const { data: logpc, error } = await supabase.from("log_pc").select("*");
      if (error) throw error;
      set({ logpc });
    } catch (error) {}
  },

  fetchLogById: async (id) => {
    try {
      const { data: logpc, error } = await supabase
        .from("log_pc")
        .select("*")
        .eq("id_log", id)
        .single();
      if (error) throw error;
      set((state) => ({
        formlogpc: {
          ...logpc,
        },
      }));
    } catch (error) {}
  },

  countDamages: async (id) => {
    try {
      const { data: logpc, error } = await supabase
        .from("log_pc")
        .select("condition")
        .eq("id", id);
      if (error) throw error;

      let damageCount = 0;
      logpc.forEach((log) => {
        const conditions = log.condition;
        for (const key in conditions) {
          if (
            conditions[key] === "rusak ringan" ||
            conditions[key] === "rusak berat"
          ) {
            damageCount++;
          }
        }
      });

      set({ damageCount });
    } catch (error) {
      console.error("Error counting damages:", error.message);
    }
  },

  // countDamages: async (id) => {
  //   try {
  //     const { data: logpc, error } = await supabase
  //       .from("log_pc")
  //       .select("*")
  //       .eq("id", id)
  //       .eq("status", "rusak");
  //     if (error) throw error;
  //     set({ damageCount: logpc.length });
  //   } catch (error) {
  //     console.error("Error counting damages:", error.message);
  //   }
  // },
  //inv
  fetchLogInv: async () => {
    try {
      const { data: loginv, error } = await supabase.from("log").select("*");
      if (error) throw error;
      set({ loginv });
    } catch (error) {}
  },

  fetchLogInvById: async (id) => {
    try {
      const { data: loginv, error } = await supabase
        .from("log")
        .select("*")
        .eq("id_log", id)
        .single();
      if (error) throw error;
      set((state) => ({
        formlogpc: {
          ...loginv,
        },
      }));
    } catch (error) {}
  },

  //Non PC
  // updateFormInv: (field, value) =>
  //   set((state) => {
  //     if (field.includes(".")) {
  //       const [parent, child] = field.split(".");
  //       return {
  //         formInv: {
  //           ...state.formInv,
  //           [parent]: {
  //             ...state.formInv[parent],
  //             [child]: value,
  //           },
  //         },
  //       };
  //     } else {
  //       return {
  //         formInv: {
  //           ...state.formInv,
  //           [field]: value,
  //         },
  //       };
  //     }
  //   }),

  //reset form after input
}));

export default useLogStore;
