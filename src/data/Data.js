import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const useStore = create((set) => ({
  data: [],
  formData: {
    id: "",
    name: "",
    default: "",
    status: "",
    category: "",
    pc: [],
  },

  // ~~~Inventaris PC~~~

  // Fetch data

  fetchData: async () => {
    try {
      const { data, error } = await supabase.from("inv5").select("*");
      if (error) throw error;
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },

  fetchDataById: async (id) => {
    try {
      const { data, error } = await supabase
        .from("inv5")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      set({ formData: data });
    } catch (error) {
      console.error("Error fetching data by ID:", error.message);
    }
  },

  // Create Data

  submitForm: async () => {
    const { formData } = useStore.getState();
    formData.id = uuidv4();
    try {
      const { data, error } = await supabase.from("inv5").insert([formData]);
      if (error) throw error;
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  },

  // Update Data

  updateForm: async () => {
    const { formData } = useStore.getState();
    try {
      const { data, error } = await supabase
        .from("inv5")
        .update(formData)
        .eq("id", formData.id);
      if (error) throw error;
      console.log("Form updated successfully:", data);
    } catch (error) {
      console.error("Error updating form:", error.message);
    }
  },

  // Delete data

  deleteForm: async () => {
    const { formData } = useStore.getState();
    try {
      const { data, error } = await supabase
        .from("inv5")
        .delete()
        .eq("id", formData.id);
      if (error) throw error;
      console.log("Form deleted successfully:", data);
    } catch (error) {
      console.error("Error deleting form:", error.message);
    }
  },

  authData: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword;
      if (error) throw error;
      // Simpan data dalam state Zustand
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },

  updateFormData: (field, value) =>
    set((state) => {
      // For nested objects like pc, you might need a more complex logic
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        return {
          formData: {
            ...state.formData,
            [parent]: {
              ...state.formData[parent],
              [child]: value,
            },
          },
        };
      } else {
        return {
          formData: {
            ...state.formData,
            [field]: value,
          },
        };
      }
    }),

  resetFormData: () =>
    set({
      formData: {
        id: "",
        name: "",
        default: "",
        status: "",
        category: "",
        pc: {},
      },
    }),
}));

export default useStore;
