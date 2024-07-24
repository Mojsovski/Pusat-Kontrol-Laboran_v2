import { create } from "zustand";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const useProfileStore = create((set) => ({
  user: [],
  formUser: {
    email: "",
    password: "",
    name: "",
    npp: "",
    phone_number: "",
    address: "",
    role: "",
    room: "",
  },

  // Fetch data profile table
  fetchProfile: async () => {
    try {
      const { data: user, error } = await supabase.from("profiles").select("*");
      if (error) throw error;
      set({ user });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  },

  fetchProfileById: async (id) => {
    try {
      const { data: user, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      set({ formUser: user });
    } catch (error) {
      console.error("Error fetching data by ID:", error.message);
    }
  },

  // Update Data
  //PC
  updateProfile: async () => {
    const { formUser } = useProfileStore.getState();
    try {
      const { data: user, error } = await supabase
        .from("profiles")
        .update(formUser)
        .eq("id", formUser.id);
      if (error) throw error;
      console.log("Form updated successfully:", user);
    } catch (error) {
      console.error("Error updating form:", error.message);
    }
  },

  // Delete data
  //PC
  deleteProfile: async (id) => {
    try {
      const { data: user, error } = await supabase
        .from("profiles")
        .delete()
        .eq("id", id);
      if (error) throw error;
      console.log("Form deleted successfully:", user);
    } catch (error) {
      console.error("Error deleting form:", error.message);
    }
  },

  //update form
  //PC
  updateFormAccount: (field, value) =>
    set((state) => {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        return {
          formUser: {
            ...state.formUser,
            [parent]: {
              ...state.formUser[parent],
              [child]: value,
            },
          },
        };
      } else {
        return {
          formUser: {
            ...state.formUser,
            [field]: value,
          },
        };
      }
    }),

  //reset form after input

  resetFormUsers: () =>
    set({
      formUser: {
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

export default useProfileStore;
