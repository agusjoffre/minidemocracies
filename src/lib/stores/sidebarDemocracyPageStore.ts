import { create } from "zustand";

interface DemocracyMenuStore {
  selectedMenu: "MAIN" | "MEMBERS" | "BILLS" | "FORUM" | "HISTORY";
  setSelectedMenu: (
    item: "MAIN" | "MEMBERS" | "BILLS" | "FORUM" | "HISTORY"
  ) => void;
}

export const useDemocracyMenuStore = create<DemocracyMenuStore>((set) => ({
  selectedMenu: "MAIN",
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));
