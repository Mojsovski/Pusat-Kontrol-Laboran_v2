import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const useStore = create((set) => ({
  inv: [],
  invpc: [],
  formPC: {
    id: "",
    name: "",
    status: "",
    condition: {},
    room: "",
    primaryItem: false,
    pc: {},
    comment: "",
  },
  formInv: {
    id: "",
    name: "",
    status: "",
    quantity: "",
    room: "",
  },

  // ~~~Inventaris PC~~~

  // Fetch data
  //PC
  fetchData: async () => {
    try {
      const { data: invpc, error } = await supabase.from("inv_pc").select("*");
      if (error) throw error;
      set({ invpc });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },

  fetchDataById: async (id) => {
    try {
      const { data: invpc, error } = await supabase
        .from("inv_pc")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      set({ formPC: invpc });
    } catch (error) {
      console.error("Error fetching data by ID:", error.message);
    }
  },

  //NON PC

  fetchDataNonPC: async () => {
    try {
      const { data: inv, error } = await supabase.from("inv").select("*");
      if (error) throw error;
      set({ inv });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },

  fetchDataByIdNonPC: async (id) => {
    try {
      const { data: inv, error } = await supabase
        .from("inv")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      set({ formInv: inv });
    } catch (error) {
      console.error("Error fetching data by ID:", error.message);
    }
  },

  // Create Data
  //PC
  submitForm: async () => {
    const { formPC } = useStore.getState();
    formPC.id = uuidv4();
    try {
      const { data: invpc, error } = await supabase
        .from("inv_pc")
        .insert([formPC]);
      if (error) throw error;
      console.log("Form submitted successfully:", invpc);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  },

  //NON PC
  submitFormNonPC: async () => {
    const { formInv } = useStore.getState();
    formInv.id = uuidv4();
    try {
      const { data: inv, error } = await supabase.from("inv").insert([formInv]);
      if (error) throw error;
      console.log("Form submitted successfully:", inv);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  },

  // Update Data
  //PC
  updateForm: async () => {
    const { formPC } = useStore.getState();
    try {
      const { data: invpc, error } = await supabase
        .from("inv_pc")
        .update(formPC)
        .eq("id", formPC.id);
      if (error) throw error;
      console.log("Form updated successfully:", invpc);
    } catch (error) {
      console.error("Error updating form:", error.message);
    }
  },
  //NonPC
  updateFormNonPC: async () => {
    const { formInv } = useStore.getState();
    try {
      const { data: inv, error } = await supabase
        .from("inv")
        .update(formInv)
        .eq("id", formInv.id);
      if (error) throw error;
      console.log("Form updated successfully:", inv);
    } catch (error) {
      console.error("Error updating form:", error.message);
    }
  },

  // Delete data
  //PC
  deleteForm: async (id) => {
    try {
      const { data: invpc, error } = await supabase
        .from("inv_pc")
        .delete()
        .eq("id", id);
      if (error) throw error;
      console.log("Form deleted successfully:", invpc);
    } catch (error) {
      console.error("Error deleting form:", error.message);
    }
  },
  //NonPC
  deleteFormNonPC: async (id) => {
    try {
      const { data: inv, error } = await supabase
        .from("inv")
        .delete()
        .eq("id", id);
      if (error) throw error;
      console.log("Form deleted successfully:", inv);
    } catch (error) {
      console.error("Error deleting form:", error.message);
    }
  },

  //update form
  //PC
  updateFormPC: (field, value) =>
    set((state) => {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        return {
          formPC: {
            ...state.formPC,
            [parent]: {
              ...state.formPC[parent],
              [child]: value,
            },
          },
        };
      } else {
        return {
          formPC: {
            ...state.formPC,
            [field]: value,
          },
        };
      }
    }),

  //Non PC
  updateFormInv: (field, value) =>
    set((state) => {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        return {
          formInv: {
            ...state.formInv,
            [parent]: {
              ...state.formInv[parent],
              [child]: value,
            },
          },
        };
      } else {
        return {
          formInv: {
            ...state.formInv,
            [field]: value,
          },
        };
      }
    }),

  //reset form after input
  //PC
  resetFormPC: () =>
    set({
      formPC: {
        id: "",
        name: "",
        status: "",
        condition: {},
        room: "",
        primaryItem: false,
        pc: {},
        comment: "",
      },
    }),
  //Non PC
  resetFormInv: () =>
    set({
      formInv: {
        id: "",
        name: "",
        status: "",
        quantity: "",
        room: "",
      },
    }),

  resetForm: () =>
    set({
      formPC: {
        id: "",
        name: "",
        status: "",
        quantity: "",
        room: "",
        primaryItem: false,
        pc: {},
        condition: {},
        comment: "",
      },
    }),
}));

export default useStore;
