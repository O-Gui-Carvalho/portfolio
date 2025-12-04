import { locations, Location, WindowId } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface LocationState {
    activeLocations: Record<WindowId, Location>
    setActiveLocation: (windowId: WindowId, location: Location | null) => void
    resetActiveLocation: (windowId: WindowId) => void
}

const useLocationStore = create<LocationState>()(immer((set) => ({
    activeLocations: {
        finder: locations.work,
        trash: locations.trash,
        contact: locations.work,
        resume: locations.work,
        safari: locations.work,
        photos: locations.work,
        terminal: locations.work,
        txtfile: locations.work,
        imgfile: locations.work,
    },

    setActiveLocation: (windowId: WindowId, location: Location | null) =>
      set((state) => {
        if (location) {
          state.activeLocations[windowId] = location;
        }
      }),

    resetActiveLocation: (windowId: WindowId) =>
      set((state) => {
        if (windowId === 'finder') {
          state.activeLocations[windowId] = locations.work;
        } else if (windowId === 'trash') {
          state.activeLocations[windowId] = locations.trash;
        }
      }),
})))

export default useLocationStore;