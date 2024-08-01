import { create } from "zustand";
const usePaginationStore = create((set) => ({
  currentPage: 1,
  itemsPerPage: 10,
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default usePaginationStore;
