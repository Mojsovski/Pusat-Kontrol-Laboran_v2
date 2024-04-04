import { create } from "zustand";
import data from "./data.json";

const useStore = create((set) => ({
  inv: data.inv,
}));

export default useStore;
