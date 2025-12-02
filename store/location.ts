import { locations, Location } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

interface LocationState {
    activeLocation: Location
    setActiveLocation: (location: Location | null) => void
    resetActiveLocation: () => void
}

const useLocationStore = create<LocationState>()(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location: Location | null) =>
      set((state) => {
        if (location) {
          state.activeLocation = location;
        }
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
    }),
})))

export default useLocationStore;