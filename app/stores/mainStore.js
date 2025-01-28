import { create } from "zustand";

const useMainStore = create((set) => ({
  isDrawerOpen: false,
  daysRaces: [],

  setIsDrawerOpen: (isOpen) => set({ isDrawerOpen: isOpen }),
  setDayRaces: (races) => set({ daysRaces: races }),
}));

export default useMainStore;
